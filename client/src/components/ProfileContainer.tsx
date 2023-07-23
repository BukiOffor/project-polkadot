'use client'

import { Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react'
import ButtonType from './Button'
import Headings from './Headings'

const ProfileContainer = () => {
  return (
    <>
      {/* Side Navbar */}
      <Grid minH='100vh' gridTemplateColumns='repeat(12,1fr)'>
        <GridItem className=' bg-slate-200 pt-28 flex justify-between gap-6 items-center md:flex-col md:px-10 pb-10 md:justify-start text-center px-4' colSpan={{
          base: 12,
          md: 4,
          xl: 3,
        }}>
          <Text as='strong'>My profile</Text>
          <ButtonType label='Upload a new content' color='purple' bgColor='bg-transparent' border='purple' />
        </GridItem>
        {/* Main Content */}
        <GridItem className=' pt-1 pb-10 md:pt-28' colSpan={{
          base: 12,
          md: 8,
          xl: 9,
        }} >
          <Flex justifyContent='flex-end' className='px-4'>
            <ButtonType className=' ' label='Publish' color='white' bgColor='bg-blue-500' bgModified='blue.500' />
          </Flex>
          <Headings>
            <Flex flexWrap='wrap'>
              <Input type='file' />
              <Text>Click here to upload or drag here</Text>
            </Flex>
          </Headings>
        </GridItem>
      </Grid>
    </>
  )
}

export default ProfileContainer