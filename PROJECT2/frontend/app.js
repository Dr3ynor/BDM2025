// --- Konfigurace ---
// !! TOTO MUSÍTE NAHRADIT ADRESOU VAŠEHO NASAZENÉHO KONTRAKTU !!
const contractAddress = "0xaAE5C76Cc40aaA565f0cd04307732A8De67c6839";
// metamask address: 0x51140d3A3B639051C14A446Ec3c082E7F077C03B
// Z hardhatu: 0xaAE5C76Cc40aaA565f0cd04307732A8De67c6839

// !! TOTO MUSÍTE NAHRADIT ABI VAŠEHO ZKOMPILOVANÉHO KONTRAKTU !!
// ABI (Application Binary Interface) je JSON popis rozhraní kontraktu.
// Získáte ho po kompilaci kontraktu (např. v adresáři artifacts/ při použití Hardhat).
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

// --- Globální proměnné ---
let provider;
let signer;
let contract;
let userAddress;
let projectsCache = []; // Cache pro načtené projekty

// --- DOM Elementy ---
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


// --- Funkce ---

/** Zobrazí chybovou zprávu */
function showError(message) {
    console.error(message);
    errorMessageP.textContent = `Chyba: ${message}`;
    errorMessageP.style.display = 'block';
    // Můžete přidat timeout pro automatické skrytí
    // setTimeout(() => errorMessageP.style.display = 'none', 5000);
}

/** Skryje chybovou zprávu */
function hideError() {
    errorMessageP.style.display = 'none';
    errorMessageP.textContent = '';
}

/** Zobrazí stavovou zprávu (např. u formuláře) */
function showStatus(element, message, isSuccess = true) {
     element.textContent = message;
     element.className = isSuccess ? 'status-message success' : 'status-message error';
     element.style.display = 'block';
      // Můžete přidat timeout pro automatické skrytí
     setTimeout(() => {
         element.style.display = 'none';
         element.textContent = '';
         }, 5000);
}


/** Inicializace aplikace a připojení k MetaMask */
async function init() {
    hideError(); // Skrýt případné staré chyby
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask je nainstalován!');
        metamaskWarningDiv.style.display = 'none';
        provider = new ethers.providers.Web3Provider(window.ethereum);

        // Zkusit získat účty (pokud už byl web autorizován)
        try {
            const accounts = await provider.listAccounts();
            if (accounts.length > 0) {
                await connectWallet(); // Připojit se, pokud už je autorizováno
            }
        } catch (error) {
            console.warn("Nepodařilo se automaticky připojit:", error);
            // Není třeba zobrazovat chybu, uživatel musí kliknout na tlačítko
        }

        // Naslouchání změn účtu a sítě v MetaMask
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload()); // Jednoduchý reload při změně sítě

    } else {
        console.warn('MetaMask není nainstalován!');
        metamaskWarningDiv.style.display = 'block';
        connectWalletBtn.disabled = true;
    }

    // Přidání listenerů na tlačítka a filtry
    connectWalletBtn.addEventListener('click', connectWallet);
    createProjectForm.addEventListener('submit', handleCreateProject);
    sortBySelect.addEventListener('change', displayProjects);
    filterBtn.addEventListener('click', displayProjects);
    resetFilterBtn.addEventListener('click', () => {
        filterCreatorInput.value = '';
        displayProjects();
    });
     finishedFilterSelect.addEventListener('change', displayFinishedProjects);


    // Načíst projekty i když není peněženka připojena (pro čtení)
    await loadAndDisplayProjects();
}

/** Zpracování změny účtu v MetaMask */
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
        // Znovu se připojit s novým účtem
        connectWallet();
    }
}


/** Připojení k peněžence MetaMask */
async function connectWallet() {
    hideError();
    try {
        console.log("Pokus o připojení peněženky...");
        // Vyžádat si přístup k účtům
        const accounts = await provider.send("eth_requestAccounts", []);
        userAddress = accounts[0];
        signer = provider.getSigner();
        console.log("Připojen účet:", userAddress);

        // Aktualizace UI
        addressSpan.textContent = `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}`;
        userAddressP.style.display = 'block';
        connectWalletBtn.textContent = 'Připojeno';
        connectWalletBtn.disabled = true; // Už je připojeno

        // Vytvořit instanci kontraktu se signerem pro transakce
        contract = new ethers.Contract(contractAddress, contractAbi, signer);
        console.log("Instance kontraktu vytvořena.");

        // Znovu načíst data, která mohou být specifická pro uživatele
        await loadAndDisplayProjects(); // Zahrnuje i zobrazení
        await loadAndDisplayMyInvestments();
        listenToEvents(); // Začít naslouchat eventům až po připojení a vytvoření kontraktu


    } catch (error) {
        showError(`Nepodařilo se připojit k peněžence: ${error.message}`);
        // Zajistit, že UI je ve stavu "nepřipojeno"
        userAddress = null;
        signer = null;
        contract = null;
        connectWalletBtn.textContent = 'Připojit MetaMask';
        connectWalletBtn.disabled = false;
        userAddressP.style.display = 'none';
         clearMyInvestments(); // Vyčistit sekci mých investic
    }
}

/** Načte všechny projekty z kontraktu */
async function loadProjects() {
    // Použít providera, pokud není signer (pro čtení stačí)
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
                    // Načíst i příspěvek aktuálního uživatele, pokud je připojen
                    let myContribution = ethers.BigNumber.from(0);
                    if(userAddress) {
                        try {
                             myContribution = await readContract.getContribution(i, userAddress);
                        } catch (err) {
                             console.warn(`Nepodařilo se načíst příspěvek pro projekt ${i}: ${err.message}`);
                             // Pokračujeme dál, i když se příspěvek nepodaří načíst
                        }
                    }

                    // Přidání ID a příspěvku k objektu projektu
                    return {
                        id: i,
                        creator: proj.creator,
                        title: proj.title,
                        description: proj.description,
                        imageUrl: proj.imageUrl,
                        // Převod Wei na Ether pro zobrazení
                        targetAmount: ethers.utils.formatEther(proj.targetAmount),
                        deadline: proj.deadline.toNumber(), // Převod BigNumber na number (pozor na limit JS)
                        raisedAmount: ethers.utils.formatEther(proj.raisedAmount),
                        state: proj.state, // 0: Fundraising, 1: Expired, 2: Successful
                        totalContributors: proj.totalContributors.toNumber(),
                        myContribution: ethers.utils.formatEther(myContribution) // Převod Wei na Ether
                    };
                })
                 .catch(error => {
                     console.error(`Chyba při načítání projektu ${i}:`, error);
                     // Vrátit null nebo nějaký placeholder, aby Promise.all neselhal celý
                     return null;
                 })
            );
        }

        // Počkat na všechny promise
        const loadedProjects = (await Promise.all(projectPromises)).filter(p => p !== null); // Odstranit neúspěšně načtené
        console.log("Target Amount:", loadedProjects.map(p => p.targetAmount));
        console.log("Všechny detaily projektů načteny.");
        projectsCache = loadedProjects; // Uložit do cache
        return projectsCache;

    } catch (error) {
        showError(`Chyba při načítání projektů: ${error.message}`);
        loadingProjectsP.textContent = "Chyba při načítání projektů.";
        loadingProjectsP.style.color = 'red';
        return []; // Vrátit prázdné pole v případě chyby
    }
}


/** Formátuje timestamp na čitelný datum a čas */
function formatTimestamp(timestamp) {
    if (!timestamp) return 'N/A';
    // Timestamp z kontraktu je v sekundách, Date očekává milisekundy
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('cs-CZ'); // Formát pro Česko
}

/** Vypočítá zbývající čas */
function getTimeRemaining(deadline) {
    const now = Math.floor(Date.now() / 1000); // Aktuální čas v sekundách
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
    if (result === "") result = "< 1m"; // Pokud zbývá méně než minuta

    return result.trim();
}

/** Vytvoří HTML kartu pro projekt */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.dataset.projectId = project.id; // Uložení ID do datasetu

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
         // Případ, kdy čas vypršel, ale stav ještě nebyl aktualizován v kontraktu
          statusBadge = `<span class="status-badge status-expired">Čeká na vyhodnocení</span>`;
    }


    let imageUrlHtml = '';
    if (project.imageUrl) {
        // Základní validace URL (není dokonalá)
        try {
            new URL(project.imageUrl); // Zkusí vytvořit URL objekt
            imageUrlHtml = `<img src="${project.imageUrl}" alt="${project.title}" loading="lazy">`;
        } catch (_) {
            // Pokud to není validní URL, nezobrazí se (nebo můžete zobrazit placeholder)
            console.warn(`Neplatné URL obrázku pro projekt ${project.id}: ${project.imageUrl}`);
            // imageUrlHtml = `<img src="placeholder.png" alt="${project.title}">`; // Příklad placeholderu
        }
    }


     // Progress bar calculation
    const progress = Math.min((parseFloat(project.raisedAmount) / parseFloat(project.targetAmount)) * 100, 100);
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
        ${ project.myContribution > 0 ? `<p><strong>Můj příspěvek:</strong> ${project.myContribution} ETH</p>` : '' }

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

    // Přidání event listenerů pro tlačítka v kartě
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


/** Zobrazí projekty na stránce podle filtrů a řazení */
function displayProjects() {
     if (!projectsCache) {
         console.log("Projekty ještě nebyly načteny.");
         return;
     }

    loadingProjectsP.style.display = 'none'; // Skrýt načítací zprávu
    projectsListDiv.innerHTML = ''; // Vyčistit předchozí seznam

     // Filtrování
    const filterAddress = filterCreatorInput.value.trim().toLowerCase();
    let filteredProjects = projectsCache.filter(p => p.state === 0); // Pouze Fundraising projekty

    if (filterAddress) {
         try {
            // Ověření, zda je adresa platná (základní)
            ethers.utils.getAddress(filterAddress); // Vyhodí chybu, pokud není platná
             filteredProjects = filteredProjects.filter(p => p.creator.toLowerCase() === filterAddress);
         } catch (e) {
             showError("Zadaná adresa tvůrce není platná Ethereum adresa.");
             filterCreatorInput.style.border = "1px solid red"; // Zvýraznění chyby
             // Zobrazit všechny Fundraising projekty, pokud je filtr neplatný
         }
    } else {
        filterCreatorInput.style.border = ""; // Resetovat styl, pokud je filtr prázdný
    }


     // Řazení
    const sortBy = sortBySelect.value;
    if (sortBy === 'newest') {
        // ID jsou přidělována sekvenčně, takže stačí řadit podle ID sestupně
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
     displayFinishedProjects(); // Zobrazit i dokončené projekty
}

/** Zobrazí dokončené (úspěšné/neúspěšné) projekty */
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

     // Řazení dokončených (např. podle data dokončení - deadline)
     finishedProjects.sort((a, b) => b.deadline - a.deadline); // Nejnověji dokončené první


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


/** Zobrazí projekty, do kterých uživatel investoval */
async function loadAndDisplayMyInvestments() {
     if (!userAddress || !projectsCache) {
         clearMyInvestments();
         return;
     }
      loadingMyInvestmentsP.style.display = 'block';
      myInvestmentsListDiv.innerHTML = ''; // Clear previous

     // Projdeme všechny načtené projekty a zjistíme, zda má uživatel příspěvek
     // (Předpokládáme, že `myContribution` bylo načteno v `loadProjects`)
    const investedProjects = projectsCache.filter(p => parseFloat(p.myContribution) > 0);

     if (investedProjects.length === 0) {
        myInvestmentsListDiv.innerHTML = '<p>Zatím jste neinvestovali do žádného projektu.</p>';
     } else {
         investedProjects.sort((a, b) => b.id - a.id); // Např. nejnovější investice první
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


/** Zpracuje odeslání formuláře pro vytvoření projektu */
async function handleCreateProject(event) {
    event.preventDefault(); // Zabraňit výchozímu odeslání formuláře
    hideError();
    showStatus(createStatusP, 'Odesílání transakce...', true);

    if (!contract || !signer) {
        showError("Nejste připojeni k peněžence nebo kontrakt není inicializován.");
         showStatus(createStatusP, 'Chyba: Nejste připojeni.', false);
        return;
    }

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image-url').value; // Může být prázdné
    const targetEth = document.getElementById('target-eth').value;
    const durationDays = document.getElementById('duration-days').value;


    if (!title || !description || !targetEth || !durationDays) {
         showStatus(createStatusP, 'Chyba: Vyplňte všechna povinná pole.', false);
        return;
    }

    try {
        // Kontrakt očekává cílovou částku v ETH, převede si ji na Wei sám
        // Doba trvání je v dnech
        // const targetAmount = parseFloat(targetEth); // Není třeba převádět na Wei zde
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

        // Počkat na potvrzení transakce
        const receipt = await tx.wait();
        console.log("Transakce potvrzena:", receipt);
        showStatus(createStatusP, `Projekt "${title}" úspěšně vytvořen!`, true);

        // Reset formuláře
        createProjectForm.reset();

        // Znovu načíst a zobrazit projekty (nebo počkat na event)
        // await loadAndDisplayProjects(); // Můžeme počkat na event pro aktualizaci

    } catch (error) {
         console.error("Chyba při vytváření projektu:", error);
         // Zkusit získat srozumitelnější chybovou zprávu
         const reason = error.reason || error.message || JSON.stringify(error);
         showError(`Chyba při vytváření projektu: ${reason}`);
         showStatus(createStatusP, `Chyba: ${reason}`, false);
    }
}

/** Zpracuje kliknutí na tlačítko "Přispět" */
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
         const amountWei = ethers.utils.parseEther(amountEth); // Převod ETH na Wei
         console.log(`Přispívání ${amountEth} ETH (${amountWei} Wei) na projekt ${projectId}`);

          // Odeslání transakce s hodnotou (posíláme ETH)
         const tx = await contract.contribute(projectId, { value: amountWei });
          showStatus(statusElement, `Transakce odeslána (${tx.hash}). Čekání...`, true);
         console.log("Transakce příspěvku odeslána:", tx.hash);

         const receipt = await tx.wait();
         console.log("Transakce příspěvku potvrzena:", receipt);
         showStatus(statusElement, `Úspěšně přispěno ${amountEth} ETH!`, true);

         // Aktualizovat data projektu (nebo počkat na event)
         amountInput.value = ''; // Vyčistit input
         // await updateSingleProjectData(projectId); // Funkce pro aktualizaci jedné karty


     } catch (error) {
         console.error(`Chyba při přispívání na projekt ${projectId}:`, error);
         const reason = error.reason || error.message || JSON.stringify(error);
         showError(`Chyba při přispívání: ${reason}`);
          showStatus(statusElement, `Chyba: ${reason}`, false);
     }
}

/** Zpracuje kliknutí na tlačítko "Vybrat prostředky" */
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
         button.disabled = true; // Deaktivovat tlačítko po úspěšném výběru
          // Aktualizovat data projektu (nebo počkat na event)
         // await updateSingleProjectData(projectId);

     } catch (error) {
         console.error(`Chyba při výběru prostředků pro projekt ${projectId}:`, error);
          const reason = error.reason || error.message || JSON.stringify(error);
         showError(`Chyba při výběru prostředků: ${reason}`);
          showStatus(statusElement, `Chyba: ${reason}`, false);
     }
}

/** Zpracuje kliknutí na tlačítko "Požádat o vrácení" */
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
         button.disabled = true; // Deaktivovat tlačítko po úspěšném vrácení
         // Aktualizovat data projektu (nebo počkat na event)
          // await updateSingleProjectData(projectId);

     } catch (error) {
         console.error(`Chyba při žádosti o vrácení pro projekt ${projectId}:`, error);
          const reason = error.reason || error.message || JSON.stringify(error);
         showError(`Chyba při žádosti o vrácení: ${reason}`);
          showStatus(statusElement, `Chyba: ${reason}`, false);
     }
}


/** Aktualizuje data jednoho projektu a překreslí jeho kartu */
async function updateSingleProjectData(projectId) {
    console.log(`Aktualizuji data pro projekt ID: ${projectId}`);
     // Použít providera pro čtení, pokud není signer
    const readContract = contract || new ethers.Contract(contractAddress, contractAbi, provider);
     if (!readContract) return; // Nelze aktualizovat bez kontraktu

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
        // Najít a nahradit projekt v cache
        const index = projectsCache.findIndex(p => p.id === projectId);
        if (index !== -1) {
            projectsCache[index] = updatedProjectData;
        } else {
            // Pokud projekt v cache není (např. nově vytvořený), přidat ho
            projectsCache.push(updatedProjectData);
        }

        // Překreslit všechny relevantní sekce
        displayProjects(); // Překreslí probíhající a dokončené
         if (userAddress) {
            loadAndDisplayMyInvestments(); // Překreslí moje investice
         }

        console.log(`Projekt ${projectId} aktualizován v UI.`);

    } catch (error) {
        console.error(`Chyba při aktualizaci dat projektu ${projectId}:`, error);
        // Nezobrazujeme chybu uživateli, jedná se o aktualizaci na pozadí
    }
}


/** Naslouchání eventům z kontraktu */
function listenToEvents() {
    if (!contract) {
         console.log("Kontrakt není inicializován pro naslouchání eventům.");
        return;
    }
    console.log("Nastavuji naslouchání eventům kontraktu...");

    // Odstranit staré listenery, pokud existují (důležité při změně účtu/kontraktu)
    contract.removeAllListeners();

    contract.on("ProjectCreated", (projectIdBN, creator, title, targetAmountBN, deadlineBN, event) => {
        const projectId = projectIdBN.toNumber();
        console.log(`EVENT: ProjectCreated - ID: ${projectId}, Creator: ${creator}, Title: ${title}`);
        showStatus(createStatusP, `Nový projekt "${title}" (ID: ${projectId}) byl zaregistrován na blockchainu!`, true)
        // Znovu načíst vše nebo jen přidat/aktualizovat tento projekt
        updateSingleProjectData(projectId); // Efektivnější
         // loadAndDisplayProjects(); // Jednodušší, ale méně efektivní
    });

    contract.on("ContributionMade", (projectIdBN, contributor, amountBN, event) => {
         const projectId = projectIdBN.toNumber();
         const amount = ethers.utils.formatEther(amountBN);
         console.log(`EVENT: ContributionMade - ID: ${projectId}, Contributor: ${contributor}, Amount: ${amount} ETH`);
         // Najít status element pro daný projekt a zobrazit info (pokud je to příspěvek aktuálního uživatele)
         const statusElement = document.getElementById(`action-status-${projectId}`);
          if (statusElement && contributor.toLowerCase() === userAddress?.toLowerCase()) {
             showStatus(statusElement, `Váš příspěvek ${amount} ETH byl zaznamenán.`, true);
          }
         // Aktualizovat data projektu
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
          // Aktualizovat data projektu
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
           // Aktualizovat data projektu
           updateSingleProjectData(projectId);
      });

     contract.on("ProjectStateChanged", (projectIdBN, newState, event) => {
         const projectId = projectIdBN.toNumber();
         const stateName = ["Fundraising", "Expired", "Successful"][newState];
         console.log(`EVENT: ProjectStateChanged - ID: ${projectId}, New State: ${stateName}`);
         // Aktualizovat data projektu
         updateSingleProjectData(projectId);
     });

     console.log("Naslouchání eventům aktivní.");
}

/** Funkce pro kombinované načtení a zobrazení */
async function loadAndDisplayProjects() {
     loadingProjectsP.style.display = 'block';
     loadingProjectsP.textContent = 'Načítání projektů...';
     loadingFinishedProjectsP.style.display = 'block';
     loadingFinishedProjectsP.textContent = 'Načítání dokončených projektů...';

     await loadProjects(); // Načte a uloží do projectsCache
     displayProjects(); // Zobrazí probíhající a zavolá displayFinishedProjects
}


// --- Spuštění aplikace ---
document.addEventListener('DOMContentLoaded', init);
