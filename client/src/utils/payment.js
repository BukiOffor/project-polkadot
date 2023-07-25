// //import { useContractWrite, usePrepareContractWrite } from 'wagmi'
// import { contractAddresses, abi } from "../../constants"
// import { getNetwork } from '@wagmi/core'
// //import { getChainId } from 'viem/public'
// import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
// import { ethers } from "ethers";
// //import { getChainId } from 'viem/dist/types/actions/public/getChainId';
// import { useNotification } from 'use-toast-notification'


// const notification = useNotification()


// export async function gateway() {
//     //const { chain, chains } = getNetwork()
//     //const walletClient = await getWalletClient()
//     //const provider = new ethers.providers.Web3Provider(window.ethereum)
//     //const price = await priceFeed()

//     const config = await prepareWriteContract({
//       //@ts-ignore
//       address: '0x771ABC39aA6dDa99D3b3cBb8ea63B19b7472f68c', //contractAddresses[chain?.id][0] 
//       abi: abi,
//       functionName: 'pay',
//       args: [0, "0xf9808e0a01C513720e7878cF4Ca719ec53310fD8", BigInt(0.2 * 1e18)],
//       value: BigInt(ethers.utils.parseEther("0.2").toString()),
//     })        
//     const { hash } = await writeContract(config)
//     notification.show({
//       message: 'Wait while your transaction is being processed',
//       title: 'Transacrion Status',
//       variant: 'info'
//     })   
//     const data =  await waitForTransaction({
//       confirmations: 1,
//       hash,
//     })
//     if (data.status == 'success') {
//       // CALL ANN'S API HERE
//       console.log(data);
//       notification.show({
//         message: 'Your purchase was succesfull',
//         title: 'Transaction Status',
//         variant: 'success'
//       })   
//     } else {
//       notification.show({
//         message: 'Your purchase could not be processed', 
//         title: 'Transaction Status',
//         variant: 'error'
//     })
//     }
//   }