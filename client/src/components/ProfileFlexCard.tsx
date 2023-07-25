'use client'

import { Card, CardBody, Text, Badge, Flex, Box } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import { BiDollar } from 'react-icons/bi'
import Image from 'next/image'
import { getAccount } from '@wagmi/core'
import { contractAddresses, abi } from "../../constants"
import { prepareWriteContract, writeContract, waitForTransaction } from '@wagmi/core'
import { ethers } from "ethers";
import { useNotification } from 'use-toast-notification'
interface ProfileFlexCardProps {
  image: StaticImageData
  badge: string
  title: string
  description: string
  price: string
  icon: IconType
}

const ProfileFlexCard = ({ image, badge, title, description, price, icon: Icon }: ProfileFlexCardProps) => {
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
      title: 'Transacrion Status',
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
      <Card
        overflow='hidden'
        variant='outline'
        direction={{ base: 'column', xl: 'row' }}
      >
        <Box position='relative' h='16rem' flexGrow={{
          base: 0,
          xl: 1
        }} >
          <Image src={image} alt={title} fill objectFit='cover' />
        </Box>

        <CardBody >
          <Flex pt={4} flexDir='column' w='full' gap={2}>
            <Badge className=' w-fit py-1 px-2'>{badge}</Badge>
            <Text as='strong'>{title}</Text>
            <Text>{description}</Text>
            <Flex className=' items-center pt-5 text-purple-700 text-md cursor-pointer w-fit' onClick={async () => {
              account.isConnected ?
                await gateway() :
                alert("Please Connect Wallet")
            }}>
              <BiDollar size={18} />
              <Text>{price}</Text>
              <Icon size={24} />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  )
}

export default ProfileFlexCard