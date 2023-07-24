'use client';
import { Box, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Select, Textarea, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import { BiDollar } from 'react-icons/bi'
const FormCapture = () => {
  return (
    <>

      <Box bg='gray.50' color='white' p={6} borderRadius='md' >
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
              <VStack spacing={4}>
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
                      <BiDollar size={24} className=' bg-emerald-400 text-white' />
                    </InputLeftElement>
                    <Input
                      variant='filled' type='number' placeholder='Pricing' />
                  </InputGroup>
                </FormControl>
              </VStack>
            </Form>

          )}
        </Formik>
      </Box>
    </>
  )
}

export default FormCapture