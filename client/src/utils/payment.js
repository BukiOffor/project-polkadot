// import { useContractWrite, usePrepareContractWrite } from 'wagmi'
// import { contractAddresses, abi } from "../constants"
// import { getNetwork } from '@wagmi/core'
// import { getChainId } from 'viem/public'

// import { ethers } from "ethers";
// //import { getChainId } from 'viem/dist/types/actions/public/getChainId';


// export const gateway = (address, amount) => {
//   const { chain, chains } = getNetwork()
//   const chainId = chain?.id
//     const { config } = usePrepareContractWrite({
//         address: contractAddresses[getChainId][0], //chain?.id
//         abi: abi,
//         functionName: 'pay',
        
//     })
//   const { data, isLoading, isSuccess, write } = useContractWrite(config)
//   return(data,isLoading,isLoading,write)
// }