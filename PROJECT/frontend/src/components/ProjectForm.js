import React, { useState } from "react";
import { getContract } from "../utils/contract";
import { ethers } from "ethers";

export default function ProjectForm({ provider }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCreate = async () => {
    const signer = provider.getSigner();
    const contract = getContract(signer);
    await contract.createProject(name, desc, imageUrl, ethers.parseEther(goal), Math.floor(new Date(deadline).getTime() / 1000));
  };

  return (
    <div>
      <input placeholder="Název" onChange={e => setName(e.target.value)} />
      <input placeholder="Popis" onChange={e => setDesc(e.target.value)} />
      <input placeholder="Obrázek URL" onChange={e => setImageUrl(e.target.value)} />
      <input placeholder="Cílová částka v ETH" onChange={e => setGoal(e.target.value)} />
      <input type="datetime-local" onChange={e => setDeadline(e.target.value)} />
      <button onClick={handleCreate}>Vytvořit projekt</button>
    </div>
  );
}