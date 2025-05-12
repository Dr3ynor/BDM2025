import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [provider, setProvider] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.BrowserProvider(window.ethereum));
    } else {
      alert("Nainstalujte si MetaMask");
    }
  }, []);

  return (
    <div>
      <h1>Ethereum Crowdfunding</h1>
      {provider && <ProjectForm provider={provider} />}
      {provider && !selectedProject && <ProjectList provider={provider} onSelect={setSelectedProject} />}
      {provider && selectedProject !== null && <ProjectDetail id={selectedProject} provider={provider} />}
    </div>
  );
}

export default App;