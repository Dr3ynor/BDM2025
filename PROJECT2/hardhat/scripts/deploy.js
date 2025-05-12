async function main() {
  const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
  const contract = await Crowdfunding.deploy();

  await contract.waitForDeployment();

  const address = contract.target || contract.address;
  console.log("Crowdfunding nasazen na adrese:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
