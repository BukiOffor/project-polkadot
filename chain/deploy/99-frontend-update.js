const { frontEndContractsFile, frontEndAbiFile } = require("../helper-hh-config")
const fs = require("fs")
const { network } = require("hardhat")

let UPDATE_FRONT_END = true


module.exports = async () => {
    if (UPDATE_FRONT_END) {
        console.log("Writing to front end...")
        await updateContractAddresses()
        await updateAbi()
        console.log("Front end written!")
    }
}

async function updateAbi() {
    const access = await ethers.getContract("Access")
    fs.writeFileSync(frontEndAbiFile, access.interface.format(ethers.utils.FormatTypes.json))//this access.interface enables us to get the abi
}

async function updateContractAddresses() {
    const access = await ethers.getContract("Access")
    const contractAddresses = JSON.parse(fs.readFileSync(frontEndContractsFile, "utf8"))
    if (network.config.chainId.toString() in contractAddresses) {
        //incase the contract address of the network has changed
        if (!contractAddresses[network.config.chainId.toString()].includes(access.address)) {
            contractAddresses[network.config.chainId.toString()].push(access.address)
        }
    } else {
        contractAddresses[network.config.chainId.toString()] = [access.address]
    }
    fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses))
}
module.exports.tags = ["all", "frontend"]