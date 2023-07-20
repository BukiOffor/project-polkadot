'use client'

import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import classNames from 'classnames'

interface HeadingsProps {
  title?: string
  description?: string
  border?: boolean
  children?: React.ReactNode
  className?: string
}

const Headings = ({ title, description, border, children, className }: HeadingsProps) => {
  return (
    <>
      <Box className={className}>
        <Grid className={classNames('mx-auto w-[95%] md:w-[80%] lg:w-[60%] place-items-center text-center', {
          'border border-white py-10 px-2 lg:w-[80%] xl:w-[80%] xl:px-40': border
        })}>
          <Center>
            <Flex className={classNames('flex-col gap-4')}>
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