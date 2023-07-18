'use client'
import { Box, Button, Center, Heading, Text, Flex } from '@chakra-ui/react'
import Logo from './Logo'

const Header = () => {
  return (
    <>
      <Box className='bgHeader min-h-screen w-full border-b-8 border-slate-500'>
        <Flex className=' w-4/5 mx-auto py-4 items-center justify-between'>
          <Logo />
          <Button className='btn'>Sign In</Button>
        </Flex>
        <Center className='w-4/5 mx-auto mt-[10%]'>
          <Box className='text-zinc-50 text-center space-y-4'>
            <Heading as='h1' className='font-bold' fontSize={{
              base: '2xl',
              md: '4xl',
              lg: '6xl'
            }}>Stream your content to the world</Heading>
            <Text fontSize={{
              base: 'sm',
              md: 'md',
              lg: '2xl'
            }}>Watch anywhere. Cancel anytime.</Text>
            <Text fontSize={{
              base: 'sm',
              md: 'md',
              lg: '2xl'
            }}>Ready to watch?</Text>
            <Button className='btn'>Connect Wallet</Button>
          </Box>
        </Center>
      </Box>
    </>
  )
}

export default Header