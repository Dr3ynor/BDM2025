// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol"; // re-entrancy attack protection

contract Crowdfunding is ReentrancyGuard {

    struct Project {
        address payable creator;
        string title;
        string description;
        string imageUrl;
        uint256 targetAmount;
        uint256 deadline;        // (unix timestamp)
        uint256 raisedAmount;    // amount in wei
        State state;
        mapping(address => uint256) contributions; // Map of contributions by address
        address[] investors;     // array of unique investors
    }

    enum State {
        Fundraising,
        Expired,     // time expired or project failed after deadline
        Successful
    }

    mapping(uint256 => Project) public projects;

    // counter for project IDs
    uint256 public projectCounter;

    // --- events ---
    // events for frontend to listen to
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

    // --- functions ---

    function createProject(
        string memory _title,
        string memory _description,
        string memory _imageUrl,
        uint256 _targetAmount, // target amount in ether
        uint256 _durationDays
    ) public {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_targetAmount > 0, "Target amount must be greater than 0");
        require(_durationDays > 0, "Duration must be at least 1 day");

        uint256 projectId = projectCounter;
        Project storage newProject = projects[projectId]; // get reference to the new project

        newProject.creator = payable(msg.sender); // saving the creator's address
        newProject.title = _title;
        newProject.description = _description;
        newProject.imageUrl = _imageUrl;
        newProject.targetAmount = _targetAmount * 1 ether;
        newProject.deadline = block.timestamp + (_durationDays * 1 days);
        newProject.state = State.Fundraising; // Počáteční stav

        projectCounter++; // increment project counter for next project ID

        emit ProjectCreated(
            projectId,
            msg.sender,
            _title,
            newProject.targetAmount,
            newProject.deadline
        );
    }


    function contribute(uint256 _projectId) public payable nonReentrant {
        Project storage project = projects[_projectId];

        require(project.creator != address(0), "Project does not exist"); // check if project exists
        require(project.state == State.Fundraising, "Project is not accepting funds");
        require(block.timestamp < project.deadline, "Project deadline has passed");
        require(msg.value > 0, "Contribution must be positive");

        // 
        uint256 currentContribution = project.contributions[msg.sender];
        if (currentContribution == 0) {
            // add investor to the list if this is their first contribution
            project.investors.push(msg.sender);
        }
        project.contributions[msg.sender] += msg.value;
        project.raisedAmount += msg.value;

        emit ContributionMade(_projectId, msg.sender, msg.value);
    }


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


    function claimFunds(uint256 _projectId) public nonReentrant {
        checkProjectState(_projectId); // update project state first
        Project storage project = projects[_projectId];

        require(project.state == State.Successful, "Project was not successful or not finished");
        require(msg.sender == project.creator, "Only the creator can claim funds");

        uint256 amountToClaim = project.raisedAmount;
        project.raisedAmount = 0; // zero out the raised amount to prevent re-entrancy

        emit FundsClaimed(_projectId, project.creator, amountToClaim);

        // sendintg funds to the project creator
        (bool success, ) = project.creator.call{value: amountToClaim}("");
        require(success, "Failed to send funds to creator");
    }


    function requestRefund(uint256 _projectId) public nonReentrant {
        checkProjectState(_projectId); // update project state first
        Project storage project = projects[_projectId];

        require(project.state == State.Expired, "Project did not expire unsuccessfully");
        uint256 contributionAmount = project.contributions[msg.sender];
        require(contributionAmount > 0, "You did not contribute to this project or already refunded");

        project.contributions[msg.sender] = 0; // zero out the contribution to prevent re-entrancy
        // not counting raisedAmount, because the total amount is not relevant anymore
        // and it would reduce the transparency of the total amount raised before refunds.

        emit RefundIssued(_projectId, msg.sender, contributionAmount);

        // sending funds back to the contributor
        (bool success, ) = payable(msg.sender).call{value: contributionAmount}("");
        require(success, "Refund failed");
    }

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
            project.investors.length // only unique investors
        );
    }

    function getProjectsCount() public view returns (uint256) {
        return projectCounter;
    }

    /// get the contribution of a specific address for a specific project
    function getContribution(uint256 _projectId, address _contributor) public view returns (uint256) {
        return projects[_projectId].contributions[_contributor];
    }

    // get the list of investors for a specific project
    function getInvestors(uint256 _projectId) public view returns (address[] memory) {
        return projects[_projectId].investors;
    }
}
