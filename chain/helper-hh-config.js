const networkConfig = {
    1284 : {
        name: "MoonBeam",
        ethUsdPrice: "0x4497B606be93e773bbA5eaCFCb2ac5E2214220Eb"
    },
    1287 : {
        name : "Moonbase Alpha",
        ethUsdPrice : "0x537879A0beA294c1ce04161Ae827919e92C23e92"
    }
}

const developmentChains = ["hardhat", "localhost","dev",]


module.exports = {
    developmentChains,
    networkConfig,  
}