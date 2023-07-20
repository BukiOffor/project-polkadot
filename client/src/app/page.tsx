'use client'
import ButtonType from '@/components/Button'
import GridAside from '@/components/GridAside'
import Headings from '@/components/Headings'
import img1 from '../../public/img1.svg'
import img2 from '../../public/img2.svg'
import img3 from '../../public/img3.svg'
import img4 from '../../public/img4.svg'
import img5 from '../../public/img5.svg'
import gridImg1 from '../../public/create1.svg'
import gridImg2 from '../../public/create2.svg'
import gridImg3 from '../../public/create3.svg'
import gridImg4 from '../../public/create4.svg'
import { Box, Flex, Grid, Text, GridItem, Heading, VStack, SimpleGrid } from '@chakra-ui/react'
import CenterContent from '@/components/CenterContent'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import InputType from '@/components/Input'
import AccordMenu from '@/components/AccordMenu'
import FooterItem from '@/components/FooterItem'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter } from 'react-icons/bi'
import Logo from '@/components/Logo'


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

      <Headings className=' bg-[#00A856] text-white py-10' title='Search for your favorite creators' description='Start searching by entering their names, content, genre, etc.' border >
        <Flex className=' items-center gap-2 flex-wrap lg:flex-nowrap'>
          <InputType nameType='name' type='search' id='search' placeholder='Search your Favorite content' />
          <ButtonType className='mx-auto w-full lg:w-max' label='Search' border='white' color='white' bgColor='bg-[#00A856]' bgModified='green.500' />
        </Flex>
      </Headings>

      <CenterContent>
        <Grid gridTemplateColumns={{
          base: '1fr',
          md: ' repeat(4,1fr)',
          lg: 'repeat(4,1fr)',
          xl: 'repeat(4,1fr)'
        }} gap={4} placeItems='center' alignItems='start' >
          <GridItem colSpan={{
            base: 1,
            md: 2,
            lg: 2,
            xl: 2
          }}>
            <Heading fontSize={{
              base: '2xl',
              md: '3xl',
              lg: '4xl',
            }}
              as='h3'>Top creators just for you!</Heading>
          </GridItem>
          <GridItem colSpan={{
            base: 1,
            md: 2,
            lg: 2,
            xl: 2
          }}>
            <Text textAlign={{
              base: 'center',
              md: 'left',
              lg: 'left'

            }} fontSize={{
              base: 'sm',
              md: 'sm',
              lg: 'md',
              xl: 'md'
            }}>Hundreds of thousands of video creators, podcasters, writers, gamers, musicians, and more are achieving creative and financial freedom doing what they love on ArtVantage.</Text>
          </GridItem>
          <GridItem>
            <Image src={gridImg1} alt='gridImg1' height={412} width={304} />
          </GridItem>
          <GridItem>
            <Image src={gridImg2} alt='gridImg2' height={412} width={304} />
          </GridItem>
          <GridItem>
            <Image src={gridImg3} alt='gridImg3' height={412} width={304} />
          </GridItem>
          <GridItem>
            <Image src={gridImg4} alt='gridImg4' height={412} width={304} />
          </GridItem>
        </Grid>
      </CenterContent>

      <Box className=' bg-black text-white'>
        <CenterContent>
          <Heading py={8} pb={16} as='h3'>FAQs</Heading>
          <AccordMenu heading='How can I get started as a creator on ArtVantage?' content='You are just a few steps to achieving that' />
          <AccordMenu heading='How do I monetize my content on ArtVantage?' content='You are just a few steps to achieving that' />
          <AccordMenu heading='Is my content protected on ArtVantage' content='You are just a few steps to achieving that' />
          <AccordMenu heading='How can I connect with fans and build a community on ArtVantage?' content='You are just a few steps to achieving that' />
          <AccordMenu heading='Can I discover content that matches my interests on ArtVantage?' content='You are just a few steps to achieving that' />
          <Heading py={4} fontSize={{
            base: 'md',
            md: 'lg',
            lg: 'xl',
            xl: '2xl'
          }}>
            Still have a question?
          </Heading>
          <ButtonType bgColor='bg-white' border='purple' label='Contact Us' color='purple' />
        </CenterContent>
      </Box>
      <Headings className=' py-20' title='Power up your creativity' description='Power up Your Imagination and Ignite Inspiration' >
        <ButtonType className='mx-auto' label='Become a Creator' bgColor='bg-purple-700' bgModified='purple.500' color='white' />
      </Headings>

      <Box className=' bg-black pt-20 pb-8 text-white'>
        <Grid gap={5} rowGap={12} gridTemplateColumns={{
          base: '1fr',
          md: '2fr 1fr',
          lg: '2fr 1fr 1fr',
          xl: '3fr 1fr 1fr 1fr'
        }} className=' mx-auto border-b pb-28 border-white justify-between w-[90%] md:w-[85%] lg:w-[80%]'>
          <VStack spacing={4} alignItems='flex-start'>
            <Logo />
            <FooterItem title='Join our newsletter to stay up to date on features and releases' />
            <Flex className='items-center flex-wrap xl:flex-nowrap gap-2'>
              <InputType type='email' id='email' nameType='name' placeholder='Enter your email' />
              <ButtonType className='w-full md:w-fit px-12' bgColor='bg-black' label='Subscribe' border='white' color='white' bgModified='gray.700' />
            </Flex>
            <Text className=' text-sm'>By subscribing you agree to with our <Link className=' underline transition-all duration-150 hover:no-underline text-gray-400' href={`/privacy`}>Privacy Policy</Link>  and provide consent to receive updates from our company.</Text>
          </VStack>
          <VStack spacing={4} alignItems='flex-start'>
            <Text as='strong' fontSize='xl'>Discover</Text>
            <FooterItem title='Groups' />
            <FooterItem title='Calendar' />
            <FooterItem title='Topics' />
            <FooterItem title='Cities' />
            <FooterItem title='Local guides' />
          </VStack>
          <VStack spacing={4} alignItems='flex-start'>
            <Text as='strong' fontSize='xl'>ArtVantage</Text>
            <FooterItem title='About' />
            <FooterItem title='Blog' />
            <FooterItem title='ArtVantage pro' />
            <FooterItem title='Careers' />
            <FooterItem title='Podcast' />
          </VStack>
          <VStack spacing={4} alignItems='flex-start'>
            <Text as='strong' fontSize='xl'>Follow Us</Text>
            <FooterItem title='Facebook' icon={BiLogoFacebook} />
            <FooterItem title='Instagram' icon={BiLogoInstagram} />
            <FooterItem title='Twitter' icon={BiLogoTwitter} />
            <FooterItem title='LinkedIn' icon={BiLogoLinkedinSquare} />
          </VStack>
        </Grid>
      </Box>

      <Box className=' text-sm bg-black pb-20 text-white'>
        <Flex className=' flex-col lg:flex-row mx-auto items-center justify-center gap-2 lg:justify-between w-[90%] md:w-[85%] lg:w-[80%]'>

          <Text>© {new Date().getFullYear()} ArtVantage. All rights reserved.</Text>
          <Flex className=' items-center flex-wrap sm:flex-nowrap justify-center gap-4'>
            <Link className=' underline transition-all duration-150 hover:no-underline text-gray-400' href={`/privacy`}>Privacy Policy</Link>
            <Link className=' underline transition-all duration-150 hover:no-underline text-gray-400' href={`/terms`}>Terms of service</Link>
            <Link className=' underline transition-all duration-150 hover:no-underline text-gray-400' href={`/cookies`}>Cookies Settings</Link>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default HomePage