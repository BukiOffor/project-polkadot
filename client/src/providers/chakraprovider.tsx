'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import NotificationProvider, { useNotification } from 'use-toast-notification'


interface ProviderProps {
  children: React.ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <NotificationProvider config={{position: 'top-right',isCloseable: true,showTitle: true,showIcon: true,duration: 12,}}>
    <CacheProvider>
        <ChakraProvider>
        {children}
        </ChakraProvider>
      </CacheProvider>
      </NotificationProvider>
  )
}