// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30; // Použijte aktuální stabilní verzi

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol"; // Proti re-entrancy útokům

contract Crowdfunding is ReentrancyGuard {

    // Struktura pro uchování informací o projektu
    struct Project {
        address payable creator; // Adresa tvůrce projektu (payable pro příjem prostředků)
        string title;            // Název projektu
        string description;      // Popis projektu
        string imageUrl;         // URL obrázku projektu (nebo IPFS hash)
        uint256 targetAmount;    // Cílová částka v Wei (1 ETH = 1e18 Wei)
        uint256 deadline;        // Časový limit projektu (Unix timestamp)
        uint256 raisedAmount;    // Vybraná částka v Wei
        State state;             // Aktuální stav projektu
        mapping(address => uint256) contributions; // Mapa investorů a jejich příspěvků
        address[] investors;     // Pole adres investorů (pro snazší refundaci, pozor na gas!)
    }

    // Stavy projektu
    enum State {
        Fundraising, // Probíhá sbírka
        Expired,     // Vypršel čas, cíl nebyl dosažen
        Successful   // Cíl dosažen
    }

    // Mapa projektů podle jejich ID
    mapping(uint256 => Project) public projects;

    // Počítadlo projektů pro přidělování unikátních ID
    uint256 public projectCounter;

    // --- Eventy ---
    // Eventy umožňují frontendu efektivně reagovat na změny v kontraktu
    event ProjectCreated(
        uint256 indexed projectId,
        address indexed creator,
        string title,
        uint256 targetAmount,
        uint256 deadline
    );

    event ContributionMade(
        uint256 indexed projectId,
        address indexed contributor,
        uint256 amount
    );

    event FundsClaimed(
        uint256 indexed projectId,
        address indexed creator,
        uint256 amountClaimed
    );

    event RefundIssued(
        uint256 indexed projectId,
        address indexed investor,
        uint256 amountRefunded
    );

     event ProjectStateChanged(
        uint256 indexed projectId,
        State newState
    );

    // --- Funkce ---

    /**
     * @notice Vytvoří nový crowdfundingový projekt.
     * @param _title Název projektu.
     * @param _description Popis projektu.
     * @param _imageUrl URL obrázku nebo IPFS hash.
     * @param _targetAmount Cílová částka v ETH (bude převedena na Wei).
     * @param _durationDays Délka trvání kampaně ve dnech.
     */
    function createProject(
        string memory _title,
        string memory _description,
        string memory _imageUrl,
        uint256 _targetAmount, // Očekáváme hodnotu v ETH pro jednoduchost ve frontendu
        uint256 _durationDays
    ) public {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_targetAmount > 0, "Target amount must be greater than 0");
        require(_durationDays > 0, "Duration must be at least 1 day");

        uint256 projectId = projectCounter;
        Project storage newProject = projects[projectId]; // Získání reference do storage

        newProject.creator = payable(msg.sender); // Uložení tvůrce
        newProject.title = _title;
        newProject.description = _description;
        newProject.imageUrl = _imageUrl;
        // Převod ETH na Wei - POZOR: frontend musí posílat ETH!
        newProject.targetAmount = _targetAmount * 1 ether;
        // Výpočet deadline (aktuální čas + trvání v sekundách)
        newProject.deadline = block.timestamp + (_durationDays * 1 days);
        newProject.state = State.Fundraising; // Počáteční stav

        projectCounter++; // Inkrementace pro další projekt

        emit ProjectCreated(
            projectId,
            msg.sender,
            _title,
            newProject.targetAmount,
            newProject.deadline
        );
    }

    /**
     * @notice Umožní uživateli přispět na projekt.
     * @param _projectId ID projektu, na který se přispívá.
     */
    function contribute(uint256 _projectId) public payable nonReentrant {
        Project storage project = projects[_projectId];

        require(project.creator != address(0), "Project does not exist"); // Kontrola existence projektu
        require(project.state == State.Fundraising, "Project is not accepting funds");
        require(block.timestamp < project.deadline, "Project deadline has passed");
        require(msg.value > 0, "Contribution must be positive");

        // Zaznamenání příspěvku
        uint256 currentContribution = project.contributions[msg.sender];
        if (currentContribution == 0) {
            // Přidat investora do pole, pouze pokud přispívá poprvé
            project.investors.push(msg.sender);
        }
        project.contributions[msg.sender] += msg.value;
        project.raisedAmount += msg.value;

        emit ContributionMade(_projectId, msg.sender, msg.value);

        // Kontrola, zda projekt dosáhl cíle po tomto příspěvku
        // (Stav se ale mění až po deadline)
    }

    /**
     * @notice Zkontroluje stav projektu po uplynutí deadline a případně změní stav.
     * Tuto funkci může zavolat kdokoli, ale změna stavu nastane jen jednou.
     * @param _projectId ID projektu ke kontrole.
     */
    function checkProjectState(uint256 _projectId) internal {
         Project storage project = projects[_projectId];
         if (project.state == State.Fundraising && block.timestamp >= project.deadline) {
             if (project.raisedAmount >= project.targetAmount) {
                 project.state = State.Successful;
                 emit ProjectStateChanged(_projectId, State.Successful);
             } else {
                 project.state = State.Expired;
                 emit ProjectStateChanged(_projectId, State.Expired);
             }
         }
    }


    /**
     * @notice Umožní tvůrci projektu vybrat prostředky, pokud byl projekt úspěšný.
     * @param _projectId ID projektu.
     */
    function claimFunds(uint256 _projectId) public nonReentrant {
        checkProjectState(_projectId); // Nejprve aktualizujeme stav, pokud uplynul deadline
        Project storage project = projects[_projectId];

        require(project.state == State.Successful, "Project was not successful or not finished");
        require(msg.sender == project.creator, "Only the creator can claim funds");

        uint256 amountToClaim = project.raisedAmount;
        project.raisedAmount = 0; // Nulování před odesláním (Checks-Effects-Interactions)

        emit FundsClaimed(_projectId, project.creator, amountToClaim);

        // Odeslání prostředků tvůrci
        (bool success, ) = project.creator.call{value: amountToClaim}("");
        require(success, "Failed to send funds to creator");
    }

    /**
     * @notice Umožní investorovi získat zpět své prostředky, pokud projekt neuspěl.
     * @param _projectId ID projektu.
     */
    function requestRefund(uint256 _projectId) public nonReentrant {
        checkProjectState(_projectId); // Nejprve aktualizujeme stav, pokud uplynul deadline
        Project storage project = projects[_projectId];

        require(project.state == State.Expired, "Project did not expire unsuccessfully");
        uint256 contributionAmount = project.contributions[msg.sender];
        require(contributionAmount > 0, "You did not contribute to this project or already refunded");

        project.contributions[msg.sender] = 0; // Nulování před odesláním (Checks-Effects-Interactions)
        // Poznámka: Neodečítáme z project.raisedAmount, protože celková suma už není relevantní
        // a snižovalo by to transparentnost celkově vybrané částky před refundacemi.

        emit RefundIssued(_projectId, msg.sender, contributionAmount);

        // Odeslání prostředků zpět investorovi
        (bool success, ) = payable(msg.sender).call{value: contributionAmount}("");
        require(success, "Refund failed");
    }

    // --- Funkce pro čtení dat (View/Pure) ---

    /**
     * @notice Vrátí detaily projektu.
     */
    function getProject(uint256 _projectId) public view returns (
        address creator,
        string memory title,
        string memory description,
        string memory imageUrl,
        uint256 targetAmount,
        uint256 deadline,
        uint256 raisedAmount,
        State state,
        uint256 totalContributors
    ) {
        Project storage project = projects[_projectId];
        require(project.creator != address(0), "Project does not exist");
        return (
            project.creator,
            project.title,
            project.description,
            project.imageUrl,
            project.targetAmount,
            project.deadline,
            project.raisedAmount,
            project.state,
            project.investors.length // Počet unikátních investorů
        );
    }

     /**
     * @notice Vrátí počet všech projektů.
     */
    function getProjectsCount() public view returns (uint256) {
        return projectCounter;
    }

    /**
     * @notice Vrátí výši příspěvku konkrétního uživatele na konkrétní projekt.
     */
    function getContribution(uint256 _projectId, address _contributor) public view returns (uint256) {
        return projects[_projectId].contributions[_contributor];
    }

     /**
     * @notice Vrátí seznam investorů pro daný projekt (může být náročné na gas pro hodně investorů).
     */
    function getInvestors(uint256 _projectId) public view returns (address[] memory) {
        return projects[_projectId].investors;
    }
}
