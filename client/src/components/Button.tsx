'use client'
import { Button } from '@chakra-ui/react'
import classNames from 'classnames'

interface ButtonTypeProps {
  onClick?: () => void
  border?: string
  bgColor?: string
  label: string
  bgModified?: string
  className?: string
  color?: string
}


const ButtonType = ({ onClick, border, bgColor, label, bgModified, color, className }: ButtonTypeProps) => {
  return (
    <Button border={`1px solid ${border}`} color={color} _focus={{
      bg: bgModified
    }} _hover={{
      bg: bgModified
    }} onClick={onClick} className={classNames(`${bgColor} hover:${bgModified} transition-all duration-150 border-${border} ${className}`)}>
      {label}
    </Button>
  )
}

export default ButtonType