'use client';
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, SimpleGrid, Textarea, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { BiDollar } from 'react-icons/bi'
import ButtonType from './Button';
const FormCapture = () => {
  return (
    <>

      <Box color='white' p={6} borderRadius='md' >
        <Formik initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
          onSubmit={(values) => (
            alert(JSON.stringify(values, null, 2))
          )}>
          {({ handleSubmit, errors, touched }) => (
            <Form className=' text-gray-800' onSubmit={handleSubmit}>
              <SimpleGrid minChildWidth='300px' spacing={10}>
                <Flex className=' items-center justify-center flex-col gap-2' >
                  <Input className=' w-[7.8rem] outline-none border-none' id='file-input' name='file-input' type='file' />
                  <FormLabel color='gray.500' fontSize='sm' textAlign='center' htmlFor='file'>Click to upload an image or drag here</FormLabel>
                </Flex>
                <VStack bg='gray.50' spacing={4}>
                  <FormControl >
                    <Field as={Input} name='contentName' id='contentName' type='text' variant='filled' placeholder='Content Name' />
                  </FormControl >
                  <FormControl>
                    <FormLabel htmlFor='category'>
                      <Field as={Select}
                        aria-label="State" name='category' id='category' variant='filled' placeholder='Category'  >
                        <option value='option1'>Video</option>
                        <option value='option2'>Audio</option>
                        <option value='option3'>PDF</option>
                        <option value='option3'>Docs</option>
                      </Field>
                    </FormLabel>
                  </FormControl>
                  <FormControl>
                    <Field as={Textarea} name='description' id='description' type='text' variant='filled' placeholder='Description' size='md'
                      resize='none' />
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <BiDollar size={24} className=' bg-purple-700 text-white' />
                      </InputLeftElement>
                      <Input
                        variant='filled' type='number' placeholder='Pricing' />
                    </InputGroup>
                  </FormControl>
                </VStack>
                <ButtonType
                  type='submit' label='Publish' bgColor='bg-purple-700' color='white' bgModified='purple.500' />
              </SimpleGrid>
            </Form>

          )}
        </Formik>
      </Box>
    </>
  )
}

export default FormCapture