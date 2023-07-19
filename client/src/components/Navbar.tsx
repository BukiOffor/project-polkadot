'use client'
import {
  Box, Flex, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Logo from './Logo'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
        <Flex className=' items-center justify-between text-md md:text-lg'>
          <Logo />
          <Flex gap={8} alignItems='center'>
            <Link href='/about'>
              About
            </Link>
            <Menu>
              <MenuButton>
                Discover <ChevronDownIcon />
              </MenuButton>
              <MenuList className='text-white bg-black'>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar