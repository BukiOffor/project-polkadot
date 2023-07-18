'use client'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

interface GridPageProps {
  gridImg: StaticImageData
  heading: string
  title: string
  gridOrder?: boolean
}

const GridLayout = ({ gridImg, heading, title, gridOrder }: GridPageProps) => {
  return (
    <>
      <Box as='section' className='bg-black text-zinc-50'>
        <Box className='w-4/5 mx-auto py-20'>
          <Grid gridTemplateColumns={{
            base: '1fr',
            md: '1fr 1fr'
          }} gap={10}>
            <GridItem className='relative h-80 w-auto'>
              <Image src={gridImg} alt={heading} fill priority />
            </GridItem>
            <GridItem order={gridOrder ? -1 : ""}>
              <Flex className=' flex-col gap-4'>
                <Heading>{heading}</Heading>
                <Text>{title}</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default GridLayout