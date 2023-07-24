'use client'
import { Flex, FormLabel, Input } from '@chakra-ui/react'

const FileUpload = () => {
  return (
    <>
      <Flex className=' items-center justify-center flex-col gap-2' >
        <Input className=' w-[7.8rem] outline-none border-none' id='file-input' name='file-input' type='file' />
        <FormLabel color='gray.500' fontSize='sm' textAlign='center' htmlFor='file'>Click to upload an image or drag here</FormLabel>
      </Flex>
    </>
  )
}

export default FileUpload