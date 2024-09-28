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
      address: '0x4200000000000000000000000000000000000006'
    },
    ensUniversalResolver: {
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      blockCreated: 16773775
    },
    multicall3: {
      address: '0x0000000000000000000000000000000000000000',
      blockCreated: 14353601
    }
  }
})
