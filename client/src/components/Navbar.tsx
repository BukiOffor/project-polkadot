'use client'
import Logo from './Logo'
import Link from 'next/link'
import { Box, Flex, Button } from '@chakra-ui/react'
import ButtonType from './Button'
import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { WagmiConfig, mainnet } from 'wagmi'
import { arbitrum, polygon } from 'viem/dist/types/chains'


const chains = [arbitrum, mainnet, polygon]
const projectId = ""

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Navbar = () => {


  return (
    <>
      {/* @ts-ignore */}
      <WagmiConfig config={wagmiConfig}>

        <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
          <Flex className=' items-center justify-between text-md md:text-lg'>
            <Logo />
            <Flex gap={8} alignItems='center'>
              <Button colorScheme='blue'>Add More</Button>
              <Link href='/about'>
                About
              </Link>
              <ButtonType bgColor='bg-purple-700' label='Connect Wallet' border='purple' color='white' bgModified='purple.500' onClick={async () => {
                console.log("clicked")
                open()
              }} />
            </Flex>
          </Flex>
        </Box>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

    </>
  )
}

export default Navbar
