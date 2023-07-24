'use client'
import Logo from './Logo'
import Link from 'next/link'
import {
  Box, Flex, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import ButtonType from './Button'
import { useWeb3Modal } from '@web3modal/react'
import { BiMenu } from 'react-icons/bi'
import { getAccount } from '@wagmi/core'


const Navbar = () => {
  const { open, close } = useWeb3Modal()
  const account = getAccount()

  return (
    <>

      <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
        <Flex className=' items-center justify-between text-md md:text-lg'>
          <Logo />
          <Flex className=' items-center gap-4 '>
            <Menu>
              <MenuButton>
                <BiMenu size={24} />
              </MenuButton>
              <MenuList className=' text-gray-600'>
                <MenuItem>
                  {account.isConnected && <Link href='/profile'>
                    Profile
                  </Link>}
                </MenuItem>
                <MenuItem>
                  <Link href='/about'>
                    About
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <ButtonType className=' text-md font-normal' bgColor='bg-purple-700' label='Connect Wallet' border='purple' color='white' bgModified='purple.500' onClick={async () => {
              open()
            }} />
          </Flex>
        </Flex>
      </Box>


    </>
  )
}

export default Navbar
