'use client'

import { MoralisProvider } from "react-moralis";


interface ProviderProps {
  children: React.ReactNode
}

export function MoralisProviders({ children }: ProviderProps) {
  return (
     <MoralisProvider initializeOnMount={false}>
        {children}
    </MoralisProvider>
  )
}