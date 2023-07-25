'use client'

import { Card, CardBody, Text, Badge, Flex, Box } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'
import { BiDollar } from 'react-icons/bi'
import Image from 'next/image'

interface ProfileFlexCardProps {
  image: StaticImageData
  badge: string
  title: string
  description: string
  price: string
  icon: IconType
}

const ProfileFlexCard = ({ image, badge, title, description, price, icon: Icon }: ProfileFlexCardProps) => {
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
            <Flex className=' items-center pt-5 text-purple-700 text-md cursor-pointer w-fit' >
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