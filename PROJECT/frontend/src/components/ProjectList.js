import React, { useEffect, useState } from "react";
import { getContract } from "../utils/contract";

export default function ProjectList({ provider, onSelect }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!provider) return; // Add a guard for provider
      try {
        // Use provider directly for read-only calls
        const contract = getContract(provider); 
        
        const countBigInt = await contract.projectCount();
        const count = Number(countBigInt); // projectCount returns BigInt, convert to Number for loop
        
        const all = [];
        for (let i = 0; i < count; i++) {
          const p = await contract.getProject(i);
          all.push({ id: i, ...p });
        }
        setProjects(all);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        // Display an error to the user or handle it appropriately
      }
    };
    fetchProjects();
  }, [provider]); // Dependency array includes provider

  return (
    <div>
      {projects.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <button onClick={() => onSelect(p.id)}>Detail</button>
        </div>
      ))}
    </div>
  );
}


/*
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../utils/contract";

export default function ProjectList({ provider, onSelect }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // Ensure we're using a Signer for contract interaction
      const signer = provider.getSigner();
      const contract = getContract(signer); // Pass the signer instead of just provider
      
      const count = await contract.projectCount();
      const all = [];
      for (let i = 0; i < count; i++) {
        const p = await contract.getProject(i);
        all.push({ id: i, ...p });
      }
      setProjects(all);
    };
    fetchProjects();
  }, [provider]);

  return (
    <div>
      {projects.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <button onClick={() => onSelect(p.id)}>Detail</button>
        </div>
      ))}
    </div>
  );
}
*/