import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { vMainnet } from '@/tenderly.config'
import { injected } from '@wagmi/core'
 
// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
 
if (!projectId) throw new Error('Project ID is not defined')
 
// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, vMainnet],
  connectors: [
    injected()
  ],
  ssr: true,
  transports: {
    [mainnet.id]: http('https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f'),
    [vMainnet.id]: http('https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f!)
    import { defineChain } from 'viem'

export const virtual_mainnet = defineChain({
  id: 20327,
  name: 'Virtual Mainnet',
  nativeCurrency: { name: 'VETH', symbol: 'VETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f'] }
  },
  blockExplorers: {
    default: {
      name: 'Tenderly Explorer',
      url: 'https://virtual.mainnet.rpc.tenderly.co/859ee835-1907-49ae-85e1-4db1c240c6b0'
    }
  },
 }                   
