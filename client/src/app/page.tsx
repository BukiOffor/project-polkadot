'use client'
import ButtonType from '@/components/Button'
import GridAside from '@/components/GridAside'
import Headings from '@/components/Headings'
import img1 from '../../public/img1.svg'
import img2 from '../../public/img2.svg'
import img3 from '../../public/img3.svg'
import img4 from '../../public/img4.svg'
import img5 from '../../public/img5.svg'
import { Box, Flex, Grid, GridItem, VStack } from '@chakra-ui/react'
import CenterContent from '@/components/CenterContent'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'


const HomePage = () => {
  return (
    <>
      <Headings title='Empowering Creators and Revolutionizing Content Creation' description='Discover, Create, and Monetize Your Unique Content in a Secure Blockchain-Powered Viewing Platform' className='bg-black text-white pb-10 pt-[10rem] min-h-[60vh]'>

        <ButtonType color='white' className='mx-auto' label='Become a Creator' bgColor='bg-purple-700' bgModified='purple.500' />
      </Headings>

      <Headings className=' pt-20 pb-5' title='How ArtVantage works' description='ArtVantage empowers creators with the essential tools to effortlessly connect with their fans, foster vibrant communities, and earn an income.' />

      <CenterContent>
        <Grid gridTemplateColumns={{
          base: '1fr',
          md: ' 1fr',
          lg: '1fr',
          xl: '1fr 2fr 1fr'
        }} gap={10}>
          <GridItem>
            <VStack spacing={10}>
              <GridAside title='Create & Showcase' description='Set up your profile and upload your captivating content, including art, videos, books, and more.' imgSrc={img1} />
              <GridAside title='Engage and Expand' description='Build your fanbase by connecting with like-minded individuals.' imgSrc={img2} />
            </VStack>
          </GridItem>

          <GridItem position='relative' className=' max-w-4xl h-80 xl:w-auto xl:h-auto' >
            <Image src={img5} alt='img5' fill priority />
          </GridItem>

          <GridItem>
            <VStack spacing={10}>
              <GridAside title='Monetize & Earn' description='Enable seamless and secure transactions through blockchain-powered payment systems.' imgSrc={img3} />
              <GridAside title='Discover & Enjoy' description='Explore a diverse range of captivating content across various genres and mediums.' imgSrc={img4} />
            </VStack>
          </GridItem>
        </Grid>
        <Box className=' py-10'>
          <Flex className=' items-center gap-8 flex-wrap'>
            <ButtonType className='mx-auto' label='Become a Creator' border='purple' color='purple' />
            <Link href='/signup' className='text-[#8C35FF] mx-auto'>
              Read More <ChevronRightIcon />
            </Link>
          </Flex>
        </Box>
      </CenterContent>

    </>
  )
}

export default HomePage