'use client'

import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'

interface HeadingsProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

const Headings = ({ title, description, children, className }: HeadingsProps) => {
  return (
    <>
      <Box className={className}>
        <Grid className={` mx-auto w-[95%] md:w-[80%] lg:w-[60%] place-items-center text-center`}>
          <Center>
            <Flex className=' flex-col gap-4'>
              <Heading as='h2' size={{
                base: 'lg',
                md: 'xl',
                lg: '2xl',
              }}>
                {title}
              </Heading>
              <Text size={{
                base: 'sm',
                md: 'md',
                lg: 'lg',
              }}>
                {description}
              </Text>
              <Flex className=' items-center justify-center gap-8'>
                {children && children}
              </Flex>
            </Flex>
          </Center>
        </Grid>
      </Box>
    </>


  )
}

export default Headings