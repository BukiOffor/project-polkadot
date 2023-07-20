'use client'

import { Input } from '@chakra-ui/react'

interface InputProps {
  type: string
  id: string
  placeholder: string
  nameType: string
}

const InputType = ({ type, id, placeholder, nameType }: InputProps) => {
  return (
    <>
      <Input variant='filled' className=' focus:border-none focus:outline focus:outline-white focus:outline-1 bg-white' type={type} id={id} name={nameType} placeholder={placeholder} required />
    </>
  )
}

export default InputType