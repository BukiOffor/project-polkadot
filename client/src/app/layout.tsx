import { Providers } from '@/providers/chakraprovider'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import WalletConnect from '@/providers/walletconnect'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'polkadot',
  description: 'A decentralized streaming platform built on the Polkadot network.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WalletConnect/>
        <Providers>
        <Navbar />
        {children}
        <Footer />
          </Providers>
      </body>
    </html>
  )
}
