'use client'

import { Card, CardBody, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

interface GridAsideProps {
  title: string
  description: string
  imgSrc: StaticImageData
  className?: string
}


const GridAside = ({ title, description, imgSrc, className }: GridAsideProps) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Grid className={`${className} place-items-center gap-4 text-center`}>
          <Image src={imgSrc} alt={title} height={50} width={50} />
          <Heading as='h3' size='md'>{title}</Heading>
          <Text>{description}</Text>
        </Grid>
      </CardBody>
    </Card>
  )
}

export default GridAside