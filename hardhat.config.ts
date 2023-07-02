import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-gas-reporter";
import "solidity-coverage"
import "@typechain/hardhat"
/** @type import('hardhat/config').HardhatUserConfig */
export default {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.g.alchemy.com/v2/EHgbTA9GO6poarx3H57zmXRX9pNP-MkT",
      accounts: [
        "514cc1845e0ace66faeb46c77bfc261243a3801592768b2528baaf57fb8b6ecd",
      ],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: "EM4PYFS3PQBUTZGWQ8RTQTHN9431UKNVNJ",
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    noColors: true,
    coinmarketcap: "6ac16a93-53a0-479c-87ae-4dcf975fc9be",
    token: "BNB"
  },
};
