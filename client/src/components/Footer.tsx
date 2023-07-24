'use client'
import { Box, Flex, Grid, Text, Link, VStack } from '@chakra-ui/react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedinSquare } from 'react-icons/bi'
import ButtonType from './Button'
import FooterItem from './FooterItem'
import InputType from './Input'
import Logo from './Logo'

const Footer = () => {
  return (
    <>
      <Box className=' bg-black pt-20 pb-8 text-white'>
        <Grid gap={5} rowGap={12} gridTemplateColumns={{
          base: '1fr',
          md: '2fr 1fr',
          lg: '2fr 1fr 1fr',
          xl: '3fr 1fr 1fr 1fr'
        }} className=' mx-auto border-b pb-28 border-white justify-between w-[90%] md:w-[85%] lg:w-[80%]'>
          <VStack spacing={4} alignItems='flex-start'>
            <Logo />
            <Text>
              Join our newsletter to stay up to date on features and releases
            </Text>
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

export default Footer