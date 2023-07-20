import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { IconType } from 'react-icons'

interface FooterItemProps {
  icon?: IconType;
  title: string;
  link?: string
}


const FooterItem = ({ icon: Icon, title, link }: FooterItemProps) => {
  return (
    <>
      <Link href={`/${link}`}>
        <Flex className=' text-gray-300 text-sm items-center gap-2'>
          {Icon && (<Icon size={18} />)}
          <Text>{title}</Text>
        </Flex>
      </Link>
    </>
  )
}

export default FooterItem