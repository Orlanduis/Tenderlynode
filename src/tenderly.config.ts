import { defineChain } from 'viem'
 
export const vMainnet = defineChain({
  id: ,20327
  name: 'Virtual EMainnet',
  nativeCurrency: { name: 'vEther', symbol: 'vETH', decimals: 18 },
  rpcUrls: {
    default: {https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f }
  },
  blockExplorers: {
    default: {
      name: 'etherscan',
      url: 'https://etherscan.io/'
     name:'etherplorer'
       url: 'https://etherplorer.io/'
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
    },
    ensUniversalResolver: {
      address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
      blockCreated: 16773775
    },
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 14353601
    }
  }
})
