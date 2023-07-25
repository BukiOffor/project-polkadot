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
}




const ProfileCard = ({ image, title, description, wallet, walletAddress, badge, price, icon: Icon, hover, onClick }: ProfileCardProps) => {

  return (
    <>
      <Card onClick={onClick} _hover={{
        bg: hover ? 'gray.50' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        cursor: hover ? 'pointer' : 'default',
        transition: 'all .2s ease-in-out'
      }} mb={8} overflow='hidden'>
        <Box position='relative' h='16rem' >
          <Image src={image} alt={title} fill objectFit='cover' />
        </Box>
        <CardBody >
          <Flex pt={4} flexDir='column' w='full' gap={2}>
            {badge && <Badge className=' w-fit py-1 px-2'>{badge}</Badge>}
            <Text as='strong'>{title}</Text>
            <Flex className=' items-center justify-between flex-wrap' >
              <Text>{wallet}</Text>
              <Text textAlign='end' as='strong'>{walletAddress}</Text>
            </Flex>
            <Text>{description}</Text>
            <Flex className=' items-center gap-1 text-purple-700 text-md cursor-pointer w-fit'>
              {/* onClick={async () => {
                account.isConnected ?
                  await gateway()
                  : alert("Please Connect your Wallet")
              }} */}
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