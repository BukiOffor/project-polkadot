'use client';

import { Badge, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { getAccount, getWalletClient, getNetwork } from '@wagmi/core'
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { contractAddresses, abi } from "../../constants"
import { ethers } from "ethers"
import { useNotification } from 'use-toast-notification'
//import priceFeed from "../utils/price"

interface ProfileCardProps {
  image: StaticImageData,
  title: string,
  description: string,
  wallet?: string
  walletAddress?: string
  badge?: string
  price?: string
  icon?: IconType
  hover?: boolean
  onClick?: () => void
  link?: boolean
}




const ProfileCard = ({ image, title, description, wallet, walletAddress, badge, price, icon: Icon, hover, onClick,link }: ProfileCardProps) => {
  const account = getAccount()
  const notification = useNotification()


async function gateway() {

    const config = await prepareWriteContract({
      //@ts-ignore
      address: '0x771ABC39aA6dDa99D3b3cBb8ea63B19b7472f68c', //contractAddresses[chain?.id][0] 
      abi: abi,
      functionName: 'pay',
      args: [0, "0xf9808e0a01C513720e7878cF4Ca719ec53310fD8", BigInt(0.2 * 1e18)],
      value: BigInt(ethers.utils.parseEther("0.2").toString()),
    })        
    const { hash } = await writeContract(config)
    notification.show({
      message: 'Wait while your transaction is being processed',
      title: 'Transaction Status',
      variant: 'info'
    })   
    const data =  await waitForTransaction({
      confirmations: 1,
      hash,
    })
    if (data.status == 'success') {
      // CALL ANN'S API HERE
      console.log(data);
      notification.show({
        message: 'Your purchase was succesfull',
        title: 'Transaction Status',
        variant: 'success'
      })   
    } else {
      notification.show({
        message: 'Your purchase could not be processed', 
        title: 'Transaction Status',
        variant: 'error'
    })
    }
  }
  return (
    <>
      <Card _hover={{
        bg: hover ? 'gray.50' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'all .2s ease-in-out'
      }} mb={8} overflow='hidden'>
        <Box position='relative' h='16rem' >
          <Image src={image} alt={title} fill objectFit='cover' />
        </Box>
        <CardBody >
          <Flex pt={4} flexDir='column' w='full' gap={2}>
            {badge && <Badge className=' w-fit py-1 px-2'>{badge}</Badge>}
            <Text color={ link ? 'blue.500' : ''} _hover={{
              textDecoration: hover ? 'underline' : 'none',
              cursor: hover ? 'pointer' : 'default',
              transition: 'all .2s ease-in-out'
            }} onClick={onClick}
              as='strong'>{title}</Text>
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

