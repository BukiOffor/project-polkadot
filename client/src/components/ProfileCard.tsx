'use client';

import { Badge, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import { getAccount, getWalletClient,getNetwork } from '@wagmi/core'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { contractAddresses, abi } from "../../constants"
import{ethers} from "ethers"


//import { gateway } from "../utils/payment"


interface ProfileCardProps {
  image: StaticImageData,
  title: string,
  description: string,
  wallet?: string
  walletAddress?: string
  badge?: string
  price?: string
  icon?: IconType
}
const ProfileCard = ({ image, title, description, wallet, walletAddress, badge, price, icon: Icon }: ProfileCardProps) => {
  const account = getAccount()
  
  /*{ts-ignore}**/

  async function gateway() {
    
    const { chain, chains } = getNetwork()
    const walletClient = await getWalletClient()
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const config = await prepareWriteContract({
      //@ts-ignore
      address: contractAddresses[chain?.id][0], 
      abi: abi,
      functionName: 'pay',
      args: [0, "0xf9808e0a01C513720e7878cF4Ca719ec53310fD8", '0'],
      value: BigInt(100000),
    })        
    const { hash } = await writeContract(config)
    const data =  await waitForTransaction({
      confirmations: 1,
      hash,
    })
    if (data.status == 'success') {
      // CALL ANN'S API HERE
      console.log(data);
    }
  }

  return (
    <>
      <Card mb={8}>
        <CardBody >
          <Box position='relative' h='16rem' >
            <Image src={image} alt={title} fill objectFit='cover' />
          </Box>
          <Flex pt={4} flexDir='column' w='full' gap={2}>
            {badge && <Badge className=' w-fit py-1 px-2'>{badge}</Badge>}
            <Text as='strong'>{title}</Text>
            <Flex className=' items-center justify-between flex-wrap' >
              <Text>{wallet}</Text>
              <Text textAlign='end' as='strong'>{walletAddress}</Text>
            </Flex>
            <Text>{description}</Text>
            <Flex className=' items-center gap-1 text-purple-700 text-md cursor-pointer w-fit' onClick={async () => {
              account.isConnected ?
                await gateway()
                :alert("Please Connect your Wallet")
            }} >
              <Text>{price}</Text>
              {Icon && <Icon size={24} />}
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}

export default ProfileCard