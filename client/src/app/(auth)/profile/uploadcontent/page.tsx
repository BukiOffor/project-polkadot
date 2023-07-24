'use client';
import ButtonType from '@/components/Button'
import FileUpload from '@/components/FileUpload'
import FormCapture from '@/components/FormCapture'
import { GridItem, SimpleGrid } from '@chakra-ui/react'

const UploadContentPage = () => {
  return (
    <>
      <SimpleGrid minChildWidth='250px' spacing={10}>
        <GridItem>
          <FormCapture />
        </GridItem>
        <FileUpload />
        <ButtonType label='Publish' bgColor='bg-purple-700' color='white' bgModified='purple.500' />
      </SimpleGrid>
    </>
  )
}

export default UploadContentPage