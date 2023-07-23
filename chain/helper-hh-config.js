const networkConfig = {
    1284 : {
        name: "MoonBeam",
        price: "0x4497B606be93e773bbA5eaCFCb2ac5E2214220Eb"
    },
    1287 : {
        name : "Moonbase Alpha",
        price : "0x537879A0beA294c1ce04161Ae827919e92C23e92"
    },
    31337: {
        name: "hardhat",
        price : "0x537879A0beA294c1ce04161Ae827919e92C23e92",
    },
    1281 : {
        name : "dev",
        price : "0x4497B606be93e773bbA5eaCFCb2ac5E2214220Eb"
    },
}

const developmentChains = ["hardhat", "localhost", "dev",]
const frontEndContractsFile = "../client/constants/contractAddresses.json"
const frontEndAbiFile = "../client/constants/abi.json"


module.exports = {
    developmentChains,
    networkConfig, 
    frontEndContractsFile,
    frontEndAbiFile
}