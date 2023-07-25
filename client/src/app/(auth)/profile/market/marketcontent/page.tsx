'use client';
import ProfileFlexCard from '@/components/ProfileFlexCard'
import img1 from '../../../../../../public/markImg.svg'
import img2 from '../../../../../../public/content1.svg'
import img3 from '../../../../../../public/content2.svg'
import img4 from '../../../../../../public/content3.svg'
import { BiChevronRight } from 'react-icons/bi';
import ProfileCard from '@/components/ProfileCard';
import { Heading, SimpleGrid, Box } from '@chakra-ui/react';

const MarketContent = () => {
  return (
    <>
      <ProfileFlexCard
        image={img1}
        title='Understanding React for beginners'
        description=' Welcome to the world of unlimited streaming, React is a JavaScript library for building user interfaces.  '
        price='100'
        icon={BiChevronRight}
        badge='ARTICLE'
      />
      <Box mt='6rem'>
        <Heading textAlign='center' as='h4' size='md' mb={10}>View Other contents by this creator below</Heading>
        <SimpleGrid minChildWidth='300px' spacing={10}>
          <ProfileCard image={img2} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard image={img3} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
          <ProfileCard image={img4} badge='Article' price='$ 100' icon={BiChevronRight} title='Understanding React for beginners' description='Welcome to the world of unlimited streaming' />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default MarketContent