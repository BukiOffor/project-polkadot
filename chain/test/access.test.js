const { assert, expect } = require("chai");
const { ethers, deployments, getNamedAccounts, } = require("hardhat");
const {developmentChains} = require("../helper-hh-config")

developmentChains.includes(network.name)&&
    describe("Access", () => {
        let access,deployer,accounts,provider    
        beforeEach(async () => {
            await deployments.fixture()
            accounts = await ethers.getSigners()
            //deployer = (await getNamedAccounts()).deployer
            deployer = accounts[0]
            access = await ethers.getContract("Access", deployer)
            provider = access.provider
            })

        describe("constructor", () => {
            it("initialises properly", async () => {
                expect(await access.owner()).to.equal(await deployer.address);
            })
        })
        describe("Pay", () => {
            //price of 1GLMR == $0.240155
            it("reverts if msg.value is less than amount", async () => {
                const creator = accounts[1]
                await expect(access.pay("123-ABC",creator.address,20,{value:800n}
                )).to.be.revertedWithCustomError(access, "InsufficientAmount")
            })
            it("does not reverts if msg.value is greater than amount", async () => {
                const creator = accounts[1]
                expect(await access.pay("123-ABC", creator.address, 20, { value:89000000000000000000n})
                ).to.not.be.reverted
            })
            it("transfers amount succesfully", async () => {
                const creator = accounts[2];
                await access.connect(creator);
                const balance = await provider.getBalance(creator.address)
                const value = 90000000000000000000n
                await access.pay("123-ABC", creator.address, 20, { value: value })
                const newBalance = BigInt(balance)+value
                expect(await provider.getBalance(creator.address)).to.equal(newBalance)
            })
            it('emits events succesfully')
        })
    })