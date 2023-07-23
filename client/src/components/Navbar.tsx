'use client'
import Logo from './Logo'
import Link from 'next/link'
import { Box, Flex } from '@chakra-ui/react'
import ButtonType from './Button'
import { useWeb3Modal } from '@web3modal/react'


const Navbar = () => {
  const { open, close } = useWeb3Modal()


  return (
    <>

      <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
        <Flex className=' items-center justify-between text-md md:text-lg'>
          <Logo />
          <Flex gap={8} alignItems='center'>
            <Link href='/about'>
              About
            </Link>
            <ButtonType bgColor='bg-purple-700' label='Connect Wallet' border='purple' color='white' bgModified='purple.500' onClick={async () => {
              open()
            }} />
          </Flex>
        </Flex>
      </Box>


    </>
  )
}

export default Navbar
