'use client';
import ProfileCard from '@/components/ProfileCard'
import cardImg from '../../../../public/profimg.svg'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
      <Box borderTop='3px solid gray'>
        <Heading mt={6} as='h4' size='md' pb={6}>Contents Created</Heading>
        <SimpleGrid minChildWidth='250px' spacing={10}>
          <ProfileCard image={cardImg} title='Polkadot' description='Welcome to the world of unlimited streaming' />
          <ProfileCard image={cardImg} title='Polkadot' description='Welcome to the world of unlimited streaming' />
        </SimpleGrid>
      </Box>
      <Box borderTop='3px solid gray'>
        <Heading mt={6} as='h4' size='md' mb={6}>Purchased Contents</Heading>
        <SimpleGrid minChildWidth='250px' spacing={10}>
          <ProfileCard image={cardImg} title='Polkadot' description='Welcome to the world of unlimited streaming' wallet={`Creator Address:`} walletAddress='127755ghjhsdhjhgsdjhjds' />
          <ProfileCard image={cardImg} title='Polkadot' description='Welcome to the world of unlimited streaming' wallet={`Creator Address:`} walletAddress='127755ghjhsdhjhgsdjhjds' />

        </SimpleGrid>
      </Box>
    </>
  )
}

export default Profile