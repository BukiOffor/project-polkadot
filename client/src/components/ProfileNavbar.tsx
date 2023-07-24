'use client';

import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import ButtonType from './Button';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { getAccount, getNetwork, getWalletClient } from '@wagmi/core'

const navItems = [
  { name: 'My Profile', href: '/profile' },
  { name: 'Market Place', href: '/profile/market' }
]

const ProfileNavbar = () => {
  const pathname = usePathname()
  const account = getAccount()

  return (
    <Box className='pt-[6rem] pb-6 drop-shadow-2xl text-center'>
      <Flex flexDir='column' gap={4}>
        {account.isConnected && navItems.map((item, i) => (
          <Link key={i} className={classNames(`py-6  hover:bg-purple-700`, {
            'bg-purple-700 text-white font-semibold': pathname === item.href
          })} href={item.href}>
            {item.name}
          </Link>
        ))}
        <Link href='/profile/uploadcontent'>
          <ButtonType className={classNames(` `, {
            'bg-purple-700 text-white font-semibold': pathname === '/profile/uploadcontent'
          })} label='Upload a new content' bgColor='transparent' color='purple' border='purple' />
        </Link>
      </Flex>
    </Box>
  )
}

export default ProfileNavbar