import React, { useEffect, useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";

export default function ProjectDetail({ id, provider }) {
  const [project, setProject] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const contract = getContract(provider);
      const p = await contract.getProject(id);
      setProject(p);
    };
    fetch();
  }, [id]);

  const fund = async () => {
    const signer = provider.getSigner();
    const contract = getContract(signer);
    await contract.fundProject(id, { value: ethers.parseEther(amount) });
  };

  const refund = async () => {
    const signer = provider.getSigner();
    const contract = getContract(signer);
    await contract.refund(id);
  };

  const withdraw = async () => {
    const signer = provider.getSigner();
    const contract = getContract(signer);
    await contract.withdraw(id);
  };

  if (!project) return <div>Načítání...</div>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Vybráno: {ethers.formatEther(project.totalFunds)} ETH</p>
      <p>Cíl: {ethers.formatEther(project.goal)} ETH</p>
      <p>Deadline: {new Date(Number(project.deadline) * 1000).toLocaleString()}</p>
      <input placeholder="částka v ETH" onChange={e => setAmount(e.target.value)} />
      <button onClick={fund}>Investovat</button>
      <button onClick={refund}>Refund</button>
      <button onClick={withdraw}>Vybrat</button>
    </div>
  );
}