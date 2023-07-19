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
      <Input variant='filled' className=' bg-white' type={type} id={id} name={nameType} placeholder={placeholder} required />
    </>
  )
}

export default InputType