'use client';

import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import ButtonType from './Button';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'My Profile', href: '/profile' },
  { name: 'Market Place', href: '/profile/market' }
]

const ProfileNavbar = () => {
  const pathname = usePathname()
  return (
    <Box className='pt-[6rem] pb-6 drop-shadow-2xl text-center'>
      <Flex flexDir='column' gap={4}>
        {navItems.map((item, i) => (
          <Link key={i} className={classNames(`py-6  hover:bg-purple-700`, {
            'bg-purple-700 text-white font-semibold': pathname === item.href
          })} href={item.href}>
            {item.name}
          </Link>
        ))}
        <Link className='' href='/profile/uploadcontent'>
          <ButtonType label='Upload a new content' bgColor='transparent' color='purple' border='purple' />
        </Link>
      </Flex>
    </Box>
  )
}

export default ProfileNavbar