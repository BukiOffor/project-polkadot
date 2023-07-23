'use client';

import { Box, Card, CardBody, CardFooter, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

interface ProfileCardProps {
  image: StaticImageData,
  title: string,
  description: string,
  wallet?: string
  walletAddress?: string
}

const ProfileCard = ({ image, title, description, wallet, walletAddress }: ProfileCardProps) => {
  return (
    <>
      <Card mb={8}>
        <CardBody >
          <Box position='relative' h='12rem' >
            <Image src={image} alt={title} fill objectFit='cover' />
          </Box>
        </CardBody>
        <CardFooter>
          <Flex flexDir='column' w='full' gap={4}>
            <Text as='strong'>{title}</Text>
            <Flex className=' items-center justify-between flex-wrap' >
              <Text>{wallet}</Text>
              <Text textAlign='end' as='strong'>{walletAddress}</Text>
            </Flex>
            <Text>{description}</Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProfileCard