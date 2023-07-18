'use client'
import { Box, Button, Grid, Heading, Text, Flex } from '@chakra-ui/react'
import Logo from './Logo'

const Header = () => {
  return (
    <>
      <Box className='bgHeader min-h-screen w-full border-b-8 border-slate-500'>
        <Flex className=' w-4/5 mx-auto py-4 items-center justify-between'>
          <Logo />
          <Button className='btn'>Sign In</Button>
        </Flex>
        <Grid className='w-4/5 mx-auto min-h-[70vh] place-items-center'>
          <Box className='text-zinc-50 text-center space-y-6'>
            <Heading as='h1' className='font-bold lg:w-[80%] mx-auto' fontSize={{
              base: '4xl',
              md: '5xl',
              lg: '6xl'
            }}>Discover local events that spark your passion</Heading>
            <Text className=' lg:w-[65%] mx-auto' fontSize={{
              base: 'sm',
              md: 'md',
              lg: 'lg'
            }}>Whether you’re looking for live music, art exhibits, food festivals, or sporting events, we’ve got you covered with our easy to use platform. You ca browse events by date, category, and location, and even purchase tickets right from our website.
              So why wait? Join us and start exploring today!</Text>
            <Button className='btn'>Connect Wallet</Button>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default Header