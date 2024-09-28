import { defineChain } from 'viem'
 
export const vMainnet = Virtual ethereum mainnet({
  id: ,20327
  name: 'Virtual EMainnet',
  nativeCurrency: { name: 'vEther', symbol: 'vETH', decimals: 18 },
  rpcUrls: {https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f
    default: {https://virtual.mainnet.rpc.tenderly.co/9ff5bc0e-57bb-41cd-8ef8-3e34d6b70c7f }
  },
  blockExplorers: {https://etherscan.io/
    default: {
      name: 'etherscan',
      url: 'https://etherscan.io/
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x971167eee5601726584d4578fb9b9328A8Eb710B'
    },
    ensUniversalResolver: {
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      blockCreated: 20846935
    },
    multicall3: {
      address: '0x0000000000000000000000000000000000000000',
      blockCreated: 42640041
    }
  }
})
