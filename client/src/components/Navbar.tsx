'use client'
import Logo from './Logo'
import Link from 'next/link'
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import ButtonType from './Button'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal, useWeb3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

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

  const { open, close } = useWeb3Modal()

  async function connectWallet() {
  
       // <Web3Button/>
  }

  return (
    <>
    <WagmiConfig config={wagmiConfig}>

      <Box as='header' className=' bg-black text-white fixed z-10 w-full px-2 md:px-4 xl:px-8 py-4 drop-shadow-xl border-b border-b-white'>
        <Flex className=' items-center justify-between text-md md:text-lg'>
          <Logo />
          <Flex gap={8} alignItems='center'>
            <Link href='/about'>
              About
            </Link>
            <ButtonType bgColor='bg-purple-700' label='Connect Wallet' border='purple' color='white' bgModified='purple.500' onClick={async () => {
              console.log("clicked")
              open()
            }} />
            {/* <Menu>
              <MenuButton>
                Discover <ChevronDownIcon />
              </MenuButton>
              <MenuList className='text-white bg-black'>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>
        </Box>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

    </>
  )
}

export default Navbar