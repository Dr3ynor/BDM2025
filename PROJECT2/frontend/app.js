const contractAddress = "0xaAE5C76Cc40aaA565f0cd04307732A8De67c6839";

const contractAbi = [

    {
        "inputs": [],
        "name": "ReentrancyGuardReentrantCall",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "ContributionMade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountClaimed",
                "type": "uint256"
            }
        ],
        "name": "FundsClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "targetAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "ProjectCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum Crowdfunding.State",
                "name": "newState",
                "type": "uint8"
            }
        ],
        "name": "ProjectStateChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "investor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountRefunded",
                "type": "uint256"
            }
        ],
        "name": "RefundIssued",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "claimFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "contribute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_targetAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_durationDays",
                "type": "uint256"
            }
        ],
        "name": "createProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "requestRefund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_contributor",
                "type": "address"
            }
        ],
        "name": "getContribution",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getInvestors",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getProject",
        "outputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "targetAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "raisedAmount",
                "type": "uint256"
            },
            {
                "internalType": "enum Crowdfunding.State",
                "name": "state",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "totalContributors",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getProjectsCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "projectCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projects",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "title",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "imageUrl",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "targetAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "raisedAmount",
                "type": "uint256"
            },
            {
                "internalType": "enum Crowdfunding.State",
                "name": "state",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }

];

let provider;
let signer;
let contract;
let userAddress;
let projectsCache = [];


const connectWalletBtn = document.getElementById('connect-wallet-btn');
const connectionStatusDiv = document.getElementById('connection-status');
const userAddressP = document.getElementById('user-address');
const addressSpan = document.getElementById('address');
const metamaskWarningDiv = document.getElementById('metamask-warning');
const createProjectForm = document.getElementById('create-project-form');
const createStatusP = document.getElementById('create-status');
const projectsListDiv = document.getElementById('projects-list');
const myInvestmentsListDiv = document.getElementById('my-investments-list');
const finishedProjectsListDiv = document.getElementById('finished-projects-list');
const loadingProjectsP = document.getElementById('loading-projects');
const loadingMyInvestmentsP = document.getElementById('loading-my-investments');
const loadingFinishedProjectsP = document.getElementById('loading-finished-projects');
const errorMessageP = document.getElementById('error-message');
const sortBySelect = document.getElementById('sort-by');
const filterCreatorInput = document.getElementById('filter-creator');
const filterBtn = document.getElementById('filter-btn');
const resetFilterBtn = document.getElementById('reset-filter-btn');
const finishedFilterSelect = document.getElementById('finished-filter');



function showError(message) {
    console.error(message);
    errorMessageP.textContent = `Error: ${message}`;
    errorMessageP.style.display = 'block';
    // setTimeout(() => errorMessageP.style.display = 'none', 5000);
}


function hideError() {
    errorMessageP.style.display = 'none';
    errorMessageP.textContent = '';
}

function showStatus(element, message, isSuccess = true) {
    element.textContent = message;
    element.className = isSuccess ? 'status-message success' : 'status-message error';
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
        element.textContent = '';
    }, 5000);
}


//init of app and joining to metamask
async function init() {
    hideError();
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask je nainstalován!');
        metamaskWarningDiv.style.display = 'none';
        provider = new ethers.providers.Web3Provider(window.ethereum);

        // get accounts if already connected
        try {
            const accounts = await provider.listAccounts();
            if (accounts.length > 0) {
                await connectWallet(); // Připojit se, pokud už je autorizováno
            }
        } catch (error) {
            console.warn("Nepodařilo se automaticky připojit:", error);
        }

        // listen to account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload()); // reloading if changed

    } else {
        console.warn('MetaMask není nainstalován!');
        metamaskWarningDiv.style.display = 'block';
        connectWalletBtn.disabled = true;
    }

    // adding listeners to buttons
    connectWalletBtn.addEventListener('click', connectWallet);
    createProjectForm.addEventListener('submit', handleCreateProject);
    sortBySelect.addEventListener('change', displayProjects);
    filterBtn.addEventListener('click', displayProjects);
    resetFilterBtn.addEventListener('click', () => {
        filterCreatorInput.value = '';
        displayProjects();
    });
    finishedFilterSelect.addEventListener('change', displayFinishedProjects);


    await loadAndDisplayProjects();
}

//handling changes in the account in metamask
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('MetaMask odpojen.');
        userAddress = null;
        signer = null;
        contract = null; // Zrušit instanci kontraktu se signerem
        connectWalletBtn.textContent = 'Připojit MetaMask';
        connectWalletBtn.disabled = false;
        userAddressP.style.display = 'none';
        // Znovu načíst projekty bez specifických dat uživatele
        loadAndDisplayProjects();
        clearMyInvestments(); // Vyčistit sekci mých investic
    } else {
        console.log('Účet změněn:', accounts[0]);
        // join with new account
        connectWallet();
    }
}



async function connectWallet() {
    hideError();
    try {
        console.log("Pokus o připojení peněženky...");
        // requesting accounts
        const accounts = await provider.send("eth_requestAccounts", []);
        userAddress = accounts[0];
        signer = provider.getSigner();
        console.log("Připojen účet:", userAddress);

        // update UI
        addressSpan.textContent = `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`;
        userAddressP.style.display = 'block';
        connectWalletBtn.textContent = 'Připojeno';
        connectWalletBtn.disabled = true; // Už je připojeno

        // create instance of contract to interact with
        contract = new ethers.Contract(contractAddress, contractAbi, signer);
        console.log("Instance kontraktu vytvořena.");

        await loadAndDisplayProjects();
        await loadAndDisplayMyInvestments();
        listenToEvents();


    } catch (error) {
        showError(`Nepodařilo se připojit k peněžence: ${error.message}`);
        // ensure UI is resested
        userAddress = null;
        signer = null;
        contract = null;
        connectWalletBtn.textContent = 'Připojit MetaMask';
        connectWalletBtn.disabled = false;
        userAddressP.style.display = 'none';
        clearMyInvestments();
    }
}

async function loadProjects() {
    // use provider if not signer (for reading only)
    const readContract = contract || new ethers.Contract(contractAddress, contractAbi, provider);
    if (!readContract) {
        showError("Kontrakt není inicializován.");
        return [];
    }

    try {
        console.log("Načítání počtu projektů...");
        const countBigInt = await readContract.getProjectsCount();
        const count = countBigInt.toNumber();
        console.log(`Nalezeno ${count} projektů.`);
        loadingProjectsP.textContent = `Nalezeno ${count} projektů. Načítání detailů...`;


        const projectPromises = [];
        for (let i = 0; i < count; i++) {
            projectPromises.push(
                readContract.getProject(i)
                    .then(async (proj) => {
                        let myContribution = ethers.BigNumber.from(0);
                        if (userAddress) {
                            try {
                                myContribution = await readContract.getContribution(i, userAddress);
                            } catch (err) {
                                console.warn(`Nepodařilo se načíst příspěvek pro projekt ${i}: ${err.message}`);
                            }
                        }

                        // assigining values to object
                        return {
                            id: i,
                            creator: proj.creator,
                            title: proj.title,
                            description: proj.description,
                            imageUrl: proj.imageUrl,
                            targetAmount: ethers.utils.formatEther(proj.targetAmount),
                            deadline: proj.deadline.toNumber(),
                            raisedAmount: ethers.utils.formatEther(proj.raisedAmount),
                            state: proj.state, // 0: Fundraising, 1: Expired, 2: Successful
                            totalContributors: proj.totalContributors.toNumber(),
                            myContribution: ethers.utils.formatEther(myContribution)
                        };
                    })
                    .catch(error => {
                        console.error(`Error ${i}:`, error);
                        // returns null to avoid Promise.all failure
                        return null;
                    })
            );
        }

        const loadedProjects = (await Promise.all(projectPromises)).filter(p => p !== null); // Odstranit neúspěšně načtené
        console.log("Všechny detaily projektů načteny.");
        projectsCache = loadedProjects; // Uložit do cache
        return projectsCache;

    } catch (error) {
        //showError(`Chyba při načítání projektů: ${error.message}`);
        //showError(`Login pro zobrazení projektů`);
        loadingProjectsP.textContent = "Chyba při načítání projektů.";
        loadingProjectsP.style.color = 'red';
        return []; // returns empty array if error
    }
}


function formatTimestamp(timestamp) {
    if (!timestamp) return 'N/A';
    // Timestamp is in seconds, convert to milliseconds
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('cs-CZ'); // Formát pro Česko
}

// get remaining time
function getTimeRemaining(deadline) {
    const now = Math.floor(Date.now() / 1000); // time now in milliseconds
    const remainingSeconds = deadline - now;

    if (remainingSeconds <= 0) {
        return "Uplynulo";
    }

    const days = Math.floor(remainingSeconds / (60 * 60 * 24));
    const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);

    let result = "";
    if (days > 0) result += `${days}d `;
    if (hours > 0) result += `${hours}h `;
    if (minutes > 0) result += `${minutes}m`;
    if (result === "") result = "< 1m"; // less than a minute

    return result.trim();
}

// html card for project
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.dataset.projectId = project.id;

    const timeRemaining = getTimeRemaining(project.deadline);
    const isExpired = project.state === 1; // Expired
    const isSuccessful = project.state === 2; // Successful
    const isFundraising = project.state === 0; // Fundraising

    let statusBadge = '';
    if (isFundraising && timeRemaining !== "Uplynulo") {
        statusBadge = `<span class="status-badge status-fundraising">Probíhá</span>`;
    } else if (isSuccessful) {
        statusBadge = `<span class="status-badge status-successful">Úspěšný</span>`;
    } else if (isExpired) {
        statusBadge = `<span class="status-badge status-expired">Neúspěšný (Vypršel)</span>`;
    } else {
        // if time elapsed but not expired
        statusBadge = `<span class="status-badge status-expired">Čeká na vyhodnocení</span>`;
    }


    let imageUrlHtml = '';
    if (project.imageUrl) {
        try {
            new URL(project.imageUrl);
            imageUrlHtml = `<img src="${project.imageUrl}" alt="${project.title}" loading="lazy">`;
        } catch (_) {
            // if URL is invalid, log the error and use a placeholder
            console.warn(`Neplatné URL obrázku pro projekt ${project.id}: ${project.imageUrl}`);
            // imageUrlHtml = `<img src="placeholder.png" alt="${project.title}">`; // PLACEHOLDER
        }
    }


    // Progress bar calculation
    console.log('Raised Amount:', project.raisedAmount);
    console.log('Target Amount:', project.targetAmount * 1e-18);
    const progress = project.raisedAmount / (project.targetAmount * 1e-18) * 100;

    console.log('Progress:', progress);




    const progressBarHtml = `
        <div class="progress-bar" title="${progress.toFixed(2)}% vybráno">
            <div class="progress-bar-inner" style="width: ${progress}%;"></div>
        </div>
    `;


    card.innerHTML = `
        ${imageUrlHtml}
        <h3>${project.title} (ID: ${project.id})</h3>
        <p>${project.description}</p>
        <p><strong>Cíl:</strong> ${project.targetAmount * 1e-18} ETH</p>
        <p><strong>Vybráno:</strong> ${project.raisedAmount} ETH (${project.totalContributors} investorů)</p>
         ${progressBarHtml}
        <p><strong>Deadline:</strong> ${formatTimestamp(project.deadline)}</p>
        <p><strong>Zbývá:</strong> ${timeRemaining}</p>
        <p><strong>Stav:</strong> ${statusBadge}</p>
        ${project.myContribution > 0 ? `<p><strong>Můj příspěvek:</strong> ${project.myContribution} ETH</p>` : ''}

        <div class="project-actions">
            ${isFundraising && timeRemaining !== "Uplynulo" && userAddress ? `
                <input type="number" id="amount-${project.id}" placeholder="ETH" step="0.01" min="0.001">
                <button class="contribute-btn" data-project-id="${project.id}">Přispět</button>
            ` : ''}

             ${isSuccessful && userAddress && userAddress.toLowerCase() === project.creator.toLowerCase() ? `
                <button class="claim-btn" data-project-id="${project.id}">Vybrat prostředky</button>
            ` : ''}

             ${isExpired && project.myContribution > 0 && userAddress ? `
                <button class="refund-btn" data-project-id="${project.id}">Požádat o vrácení</button>
            ` : ''}
        </div>
        <p class="creator-address"><strong>Tvůrce:</strong> ${project.creator}</p>
         <p id="action-status-${project.id}" class="status-message" style="display: none;"></p> `;

    // Adding event listeners to buttons
    const contributeBtn = card.querySelector('.contribute-btn');
    if (contributeBtn) {
        contributeBtn.addEventListener('click', handleContribute);
    }
    const claimBtn = card.querySelector('.claim-btn');
    if (claimBtn) {
        claimBtn.addEventListener('click', handleClaimFunds);
    }
    const refundBtn = card.querySelector('.refund-btn');
    if (refundBtn) {
        refundBtn.addEventListener('click', handleRefund);
    }

    return card;
}


// displays projects in the list
function displayProjects() {
    if (!projectsCache) {
        console.log("Projekty ještě nebyly načteny.");
        return;
    }

    loadingProjectsP.style.display = 'none';
    projectsListDiv.innerHTML = ''; // delete previous projects

    // filtering
    const filterAddress = filterCreatorInput.value.trim().toLowerCase();
    let filteredProjects = projectsCache.filter(p => p.state === 0); // only fundraising projects

    if (filterAddress) {
        try {
            // check if the address is valid
            ethers.utils.getAddress(filterAddress); // throws error if invalid
            filteredProjects = filteredProjects.filter(p => p.creator.toLowerCase() === filterAddress);
        } catch (e) {
            showError("Zadaná adresa tvůrce není platná Ethereum adresa.");
            filterCreatorInput.style.border = "1px solid red";
        }
    } else {
        filterCreatorInput.style.border = ""; // reset style if no filter
    }


    const sortBy = sortBySelect.value;
    if (sortBy === 'newest') {
        filteredProjects.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'oldest') {
        filteredProjects.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'deadline') {
        filteredProjects.sort((a, b) => a.deadline - b.deadline);
    }


    if (filteredProjects.length === 0) {
        projectsListDiv.innerHTML = '<p>Nebyly nalezeny žádné probíhající projekty odpovídající filtrům.</p>';
    } else {
        filteredProjects.forEach(project => {
            const card = createProjectCard(project);
            projectsListDiv.appendChild(card);
        });
    }
    console.log("Probíhající projekty zobrazeny.");
    displayFinishedProjects(); // show finished projects too
}

// displays finished projects (successful or expired)
function displayFinishedProjects() {
    if (!projectsCache) return;

    loadingFinishedProjectsP.style.display = 'none';
    finishedProjectsListDiv.innerHTML = '';

    const filterValue = finishedFilterSelect.value; // 'all', 'successful', 'expired'

    let finishedProjects = projectsCache.filter(p => p.state === 1 || p.state === 2); // Expired or Successful

    if (filterValue === 'successful') {
        finishedProjects = finishedProjects.filter(p => p.state === 2);
    } else if (filterValue === 'expired') {
        finishedProjects = finishedProjects.filter(p => p.state === 1);
    }
    // sort by deadline
    finishedProjects.sort((a, b) => b.deadline - a.deadline); // latest first


    if (finishedProjects.length === 0) {
        finishedProjectsListDiv.innerHTML = '<p>Nebyly nalezeny žádné dokončené projekty odpovídající filtru.</p>';
    } else {
        finishedProjects.forEach(project => {
            const card = createProjectCard(project);
            finishedProjectsListDiv.appendChild(card);
        });
    }
    console.log("Dokončené projekty zobrazeny.");
}


// shows projects in which user invested
async function loadAndDisplayMyInvestments() {
    if (!userAddress || !projectsCache) {
        clearMyInvestments();
        return;
    }
    loadingMyInvestmentsP.style.display = 'block';
    myInvestmentsListDiv.innerHTML = ''; // clear previous

    // go through all loaded projects and check if user has contribution
    const investedProjects = projectsCache.filter(p => parseFloat(p.myContribution) > 0);

    if (investedProjects.length === 0) {
        myInvestmentsListDiv.innerHTML = '<p>Zatím jste neinvestovali do žádného projektu.</p>';
    } else {
        investedProjects.sort((a, b) => b.id - a.id); // newest investments first
        investedProjects.forEach(project => {
            const card = createProjectCard(project);
            myInvestmentsListDiv.appendChild(card);
        });
    }
    loadingMyInvestmentsP.style.display = 'none';
    console.log("Moje investice zobrazeny.");
}

function clearMyInvestments() {
    myInvestmentsListDiv.innerHTML = '<p>Připojte peněženku pro zobrazení vašich investic.</p>';
    loadingMyInvestmentsP.style.display = 'none';
}


async function handleCreateProject(event) {
    event.preventDefault(); // prevent default form submission
    hideError();
    showStatus(createStatusP, 'Odesílání transakce...', true);

    if (!contract || !signer) {
        showError("Nejste připojeni k peněžence nebo kontrakt není inicializován.");
        showStatus(createStatusP, 'Chyba: Nejste připojeni.', false);
        return;
    }

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image-url').value; // can be empty
    const targetEth = document.getElementById('target-eth').value;
    const durationDays = document.getElementById('duration-days').value;


    if (!title || !description || !targetEth || !durationDays) {
        showStatus(createStatusP, 'Chyba: Vyplňte všechna povinná pole.', false);
        return;
    }

    try {
        // contranct expected target amount in ETH, converts it to Wei itself
        // duration is in days

        const targetAmount = ethers.utils.parseEther(targetEth); // Převod ETH na Wei
        const duration = parseInt(durationDays);

        if (isNaN(targetAmount) || targetAmount <= 0) {
            showStatus(createStatusP, 'Chyba: Neplatná cílová částka.', false);
            return;
        }
        if (isNaN(duration) || duration <= 0) {
            showStatus(createStatusP, 'Chyba: Neplatná doba trvání.', false);
            return;
        }

        console.log(`Vytváření projektu: ${title}, Cíl: ${targetAmount} ETH, Trvání: ${duration} dní`);

        const tx = await contract.createProject(title, description, imageUrl, targetAmount, duration);
        showStatus(createStatusP, `Transakce odeslána (${tx.hash}). Čekání na potvrzení...`, true);
        console.log("Transakce odeslána:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transakce potvrzena:", receipt);
        showStatus(createStatusP, `Projekt "${title}" úspěšně vytvořen!`, true);

        createProjectForm.reset();

    } catch (error) {
        console.error("Chyba při vytváření projektu:", error);
        const reason = error.reason || error.message || JSON.stringify(error);
        showError(`Chyba při vytváření projektu: ${reason}`);
        showStatus(createStatusP, `Chyba: ${reason}`, false);
    }
}

// handles "Přispět" button 
async function handleContribute(event) {
    const button = event.target;
    const projectId = button.dataset.projectId;
    const amountInput = document.getElementById(`amount-${projectId}`);
    const amountEth = amountInput.value;
    const statusElement = document.getElementById(`action-status-${projectId}`);

    hideError();
    showStatus(statusElement, 'Připravuji transakci...', true);


    if (!contract || !signer) {
        showError("Nejste připojeni k peněžence nebo kontrakt není inicializován.");
        showStatus(statusElement, 'Chyba: Nejste připojeni.', false);
        return;
    }
    if (!amountEth || parseFloat(amountEth) <= 0) {
        showError("Zadejte platnou částku pro příspěvek.");
        showStatus(statusElement, 'Chyba: Neplatná částka.', false);
        return;
    }


    try {
        const amountWei = ethers.utils.parseEther(amountEth);
        console.log(`Přispívání ${amountEth} ETH (${amountWei} Wei) na projekt ${projectId}`);

        const tx = await contract.contribute(projectId, { value: amountWei });
        showStatus(statusElement, `Transakce odeslána (${tx.hash}). Čekání...`, true);
        console.log("Transakce příspěvku odeslána:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transakce příspěvku potvrzena:", receipt);
        showStatus(statusElement, `Úspěšně přispěno ${amountEth} ETH!`, true);

        amountInput.value = ''; // clear input


    } catch (error) {
        console.error(`Chyba při přispívání na projekt ${projectId}:`, error);
        const reason = error.reason || error.message || JSON.stringify(error);
        showError(`Chyba při přispívání: ${reason}`);
        showStatus(statusElement, `Chyba: ${reason}`, false);
    }
}

// handles claim funds button
async function handleClaimFunds(event) {
    const button = event.target;
    const projectId = button.dataset.projectId;
    const statusElement = document.getElementById(`action-status-${projectId}`);

    hideError();
    showStatus(statusElement, 'Připravuji transakci...', true);

    if (!contract || !signer) {
        showError("Nejste připojeni k peněžence.");
        showStatus(statusElement, 'Chyba: Nejste připojeni.', false);
        return;
    }

    try {
        console.log(`Pokus o výběr prostředků pro projekt ${projectId}`);
        const tx = await contract.claimFunds(projectId);
        showStatus(statusElement, `Transakce odeslána (${tx.hash}). Čekání...`, true);
        console.log("Transakce výběru odeslána:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transakce výběru potvrzena:", receipt);
        showStatus(statusElement, 'Prostředky úspěšně vybrány!', true);
        button.disabled = true; // deactivate button if successful


    } catch (error) {
        console.error(`Chyba při výběru prostředků pro projekt ${projectId}:`, error);
        const reason = error.reason || error.message || JSON.stringify(error);
        showError(`Chyba při výběru prostředků: ${reason}`);
        showStatus(statusElement, `Chyba: ${reason}`, false);
    }
}

async function handleRefund(event) {
    const button = event.target;
    const projectId = button.dataset.projectId;
    const statusElement = document.getElementById(`action-status-${projectId}`);

    hideError();
    showStatus(statusElement, 'Připravuji transakci...', true);

    if (!contract || !signer) {
        showError("Nejste připojeni k peněžence.");
        showStatus(statusElement, 'Chyba: Nejste připojeni.', false);
        return;
    }

    try {
        console.log(`Pokus o vrácení příspěvku pro projekt ${projectId}`);
        const tx = await contract.requestRefund(projectId);
        showStatus(statusElement, `Transakce odeslána (${tx.hash}). Čekání...`, true);
        console.log("Transakce vrácení odeslána:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transakce vrácení potvrzena:", receipt);
        showStatus(statusElement, 'Příspěvek úspěšně vrácen!', true);
        button.disabled = true;

    } catch (error) {
        console.error(`Chyba při žádosti o vrácení pro projekt ${projectId}:`, error);
        const reason = error.reason || error.message || JSON.stringify(error);
        showError(`Chyba při žádosti o vrácení: ${reason}`);
        showStatus(statusElement, `Chyba: ${reason}`, false);
    }
}


async function updateSingleProjectData(projectId) {
    console.log(`Aktualizuji data pro projekt ID: ${projectId}`);
    //use provider if not signer (for reading only)
    const readContract = contract || new ethers.Contract(contractAddress, contractAbi, provider);
    if (!readContract) return; //cannot update without contract

    try {
        const proj = await readContract.getProject(projectId);
        let myContribution = ethers.BigNumber.from(0);
        if (userAddress) {
            try {
                myContribution = await readContract.getContribution(projectId, userAddress);
            } catch (err) {
                console.warn(`Nepodařilo se znovu načíst příspěvek pro projekt ${projectId}: ${err.message}`);
            }
        }

        const updatedProjectData = {
            id: projectId,
            creator: proj.creator,
            title: proj.title,
            description: proj.description,
            imageUrl: proj.imageUrl,
            targetAmount: ethers.utils.formatEther(proj.targetAmount),
            deadline: proj.deadline.toNumber(),
            raisedAmount: ethers.utils.formatEther(proj.raisedAmount),
            state: proj.state,
            totalContributors: proj.totalContributors.toNumber(),
            myContribution: ethers.utils.formatEther(myContribution)
        };
        console.log("Target Amount:", updatedProjectData.targetAmount);
        // find project in cache and update it
        const index = projectsCache.findIndex(p => p.id === projectId);
        if (index !== -1) {
            projectsCache[index] = updatedProjectData;
        } else {
            // if project is not in cache, add it
            projectsCache.push(updatedProjectData);
        }

        displayProjects();
        if (userAddress) {
            loadAndDisplayMyInvestments();
        }

        console.log(`Projekt ${projectId} aktualizován v UI.`);

    } catch (error) {
        console.error(`Chyba při aktualizaci dat projektu ${projectId}:`, error);
    }
}


//listening to events from contract
function listenToEvents() {
    if (!contract) {
        console.log("Kontrakt není inicializován pro naslouchání eventům.");
        return;
    }
    console.log("Nastavuji naslouchání eventům kontraktu...");

    // delete all listeners, important to avoid duplicates
    contract.removeAllListeners();

    contract.on("ProjectCreated", (projectIdBN, creator, title, targetAmountBN, deadlineBN, event) => {
        const projectId = projectIdBN.toNumber();
        console.log(`EVENT: ProjectCreated - ID: ${projectId}, Creator: ${creator}, Title: ${title}`);
        showStatus(createStatusP, `Nový projekt "${title}" (ID: ${projectId}) byl zaregistrován na blockchainu!`, true)
        updateSingleProjectData(projectId);
    });

    contract.on("ContributionMade", (projectIdBN, contributor, amountBN, event) => {
        const projectId = projectIdBN.toNumber();
        const amount = ethers.utils.formatEther(amountBN);
        console.log(`EVENT: ContributionMade - ID: ${projectId}, Contributor: ${contributor}, Amount: ${amount} ETH`);
        // find status elemnt for project and display info (if it's current user contribution)
        const statusElement = document.getElementById(`action-status-${projectId}`);
        if (statusElement && contributor.toLowerCase() === userAddress?.toLowerCase()) {
            showStatus(statusElement, `Váš příspěvek ${amount} ETH byl zaznamenán.`, true);
        }
        updateSingleProjectData(projectId);
    });

    contract.on("FundsClaimed", (projectIdBN, creator, amountClaimedBN, event) => {
        const projectId = projectIdBN.toNumber();
        const amountClaimed = ethers.utils.formatEther(amountClaimedBN);
        console.log(`EVENT: FundsClaimed - ID: ${projectId}, Creator: ${creator}, Amount: ${amountClaimed} ETH`);
        const statusElement = document.getElementById(`action-status-${projectId}`);
        if (statusElement && creator.toLowerCase() === userAddress?.toLowerCase()) {
            showStatus(statusElement, `Úspěšně jste vybrali ${amountClaimed} ETH.`, true);
        }
        updateSingleProjectData(projectId);
    });

    contract.on("RefundIssued", (projectIdBN, investor, amountRefundedBN, event) => {
        const projectId = projectIdBN.toNumber();
        const amountRefunded = ethers.utils.formatEther(amountRefundedBN);
        console.log(`EVENT: RefundIssued - ID: ${projectId}, Investor: ${investor}, Amount: ${amountRefunded} ETH`);
        const statusElement = document.getElementById(`action-status-${projectId}`);
        if (statusElement && investor.toLowerCase() === userAddress?.toLowerCase()) {
            showStatus(statusElement, `Váš příspěvek ${amountRefunded} ETH byl vrácen.`, true);
        }
        updateSingleProjectData(projectId);
    });

    contract.on("ProjectStateChanged", (projectIdBN, newState, event) => {
        const projectId = projectIdBN.toNumber();
        const stateName = ["Fundraising", "Expired", "Successful"][newState];
        console.log(`EVENT: ProjectStateChanged - ID: ${projectId}, New State: ${stateName}`);
        updateSingleProjectData(projectId);
    });

    console.log("Naslouchání eventům aktivní.");
}

async function loadAndDisplayProjects() {
    loadingProjectsP.style.display = 'block';
    loadingProjectsP.textContent = 'Načítání projektů...';
    loadingFinishedProjectsP.style.display = 'block';
    loadingFinishedProjectsP.textContent = 'Načítání dokončených projektů...';

    await loadProjects(); // loads project and saves them to cache (global variable)
    displayProjects();
}


// starting app
document.addEventListener('DOMContentLoaded', init);
