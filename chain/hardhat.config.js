require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const privateKey = process.env.goerli_pk
const api_key = process.env.api_key
const coinmarketcap = process.env.coinmarketcap

module.exports = {
  solidity : {
    compilers: [
      {version : "0.8.17"},
      {version : "0.6.6"},
    ]
  },
  defaultNetwork: "hardhat",
  networks : {
    moonbeam: {
      url: '',//TODO
      chainId: 1287, // 0x507 in hex,
      accounts: [privateKey]
    },
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // 0x507 in hex,
      accounts: [privateKey]
    },
    dev: {
      url: 'http://127.0.0.1:9944',
      chainId: 1281, // (hex: 0x501),
      accounts: [privateKey]
    },
    
  },
  gasReporter : {
    enabled: true,
    outputFile : "gas_report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap : coinmarketcap,
  },
  etherscan : {
    apiKey : api_key,
  },
  namedAccounts : {
    deployer : {
        default:0
    },
    seller : {
      default : 1
    },
    buyer : {
      default: 2
    }
  }
};

