require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.30",
      },
      {
        version: "0.8.28",
      },
      {
        version: "0.8.20",
      }
    ]
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
