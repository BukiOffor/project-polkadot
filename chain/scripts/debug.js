const { ethers } = require('hardhat')


async function main() {
    const creator = "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955";
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);

    const access = await ethers.getContractAt('Access', "0xE8F7d98bE6722d42F29b50500B0E318EF2be4fc8", wallet);

    const response = await access.pay("ABC", creator, 20, { value: 10000000000 })
    console.log(response)

}

main().catch((err)=> {
    console.log(err)
})