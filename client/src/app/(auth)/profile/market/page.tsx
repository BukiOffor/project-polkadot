'use client';
import marketImg from '../../../../../public/markImg.svg';

import ProfileCard from '@/components/ProfileCard';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { BiChevronRight } from 'react-icons/bi';

const MarketPage = () => {
  const handleRoute = () => {
    router.push('/profile/market/marketcontent')
  }
  const router = useRouter()
  return (
    <>
      <Box>
        <Heading textAlign='center' mt={6} as='h4' size='md' mb={20}>Explore market place</Heading>
        <SimpleGrid minChildWidth='300px' spacing={10}>
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard link hover onClick={handleRoute} image={marketImg} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default MarketPage