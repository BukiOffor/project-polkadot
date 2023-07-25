'use client'
import { Button } from '@chakra-ui/react'

interface ButtonTypeProps {
  onClick?: () => void
  border?: string
  bgColor?: string
  label: string
  bgModified?: string
  className?: string
  color?: string
  type?: HTMLButtonElement['type']
}


const ButtonType = ({ onClick, border, bgColor, type, label, bgModified, color, className }: ButtonTypeProps) => {
  return (
    <Button type={type} border={`1px solid ${border}`} color={color} _focus={{
      bg: bgModified
    }} _hover={{
      bg: bgModified
    }} onClick={onClick} className={`${bgColor} hover:${bgModified} transition-all duration-150 border-${border} ${className}`}>
      {label}
    </Button>
  )
}

export default ButtonType