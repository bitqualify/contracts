require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    // rskMainnet: {
    //   url: "https://rpc.mainnet.rootstock.io/{YOUR_APIKEY}",
    //   chainId: 30,
    //   gasPrice: 60000000,
    //   accounts: [process.env.ROOTSTOCK_MAINNET_PRIVATE_KEY]
    // },
    rskTestnet: {
      url: "https://rpc.testnet.rootstock.io/Erm4kmh9ayLkPM4gAFZcgvpvEDBqEH-T",
      chainId: 31,
      gasPrice: 60000000,
      accounts: ["5135d064db6e3072e28b6240b551dfb02e0590c38cf1c1e50d9ae9dd6935aef7"]
    }
  }
};