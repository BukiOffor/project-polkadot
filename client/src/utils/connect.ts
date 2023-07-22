import { ethers } from "ethers"
import { InjectedWallet } from "@thirdweb-dev/wallets";
  export const connectWallet= async()=> {
    const provider = new ethers.BrowserProvider(window.ethereum, "any");
    const wallet = new InjectedWallet();
    wallet.connect();
    const signer = await provider.getSigner()
    // address to update to 
    const address = await signer.getAddress()
    console.log(address);
  }