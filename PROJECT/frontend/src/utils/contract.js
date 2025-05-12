import { ethers } from "ethers";
import contractData from "./CrowdFunding.json";  // správný import// Deployed at: 0x947Ad442A93Cc5270aaC236De240e5CA3111565d
const CONTRACT_ADDRESS = "0x947Ad442A93Cc5270aaC236De240e5CA3111565d";

export function getContract(signerOrProvider) {
  return new ethers.Contract(
    CONTRACT_ADDRESS, 
    contractData.contracts["contracts/CrowdFunding.sol"].CrowdFunding.abi,  // přístup k ABI
    signerOrProvider
  );
}
