const { ethers, network } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hh-config")
const {verify} = require("../scripts/verify")


module.exports.default = async ({deployments}) => {
    const {deploy,log} = deployments
    const accounts = await ethers.getSigners()
    const deployer = accounts[0].address
    const priceFeed = networkConfig[network.config.chainId]['price']
    
    log("_____contract deploying________")
    const access = await deploy("Access", {
        from: deployer,
        args: [priceFeed],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log("_____contract deployed________")
  

    if(!developmentChains.includes(network.name)) {
        log(`***********verifying ${access.address}**********`)
        await verify(access.address,[priceFeed])
    }
}

module.exports.tags = ["Access"]