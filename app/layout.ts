'use client';
 
import './globals.css';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { tenderlyChains } from '@/tenderly.config';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';
 
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: 'ENVIRONMENT_ID',
        walletConnectors: [EthereumWalletConnectors],
        evmNetworks: process.env.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED ? tenderlyChains : [
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,],
      }}
    >
      <DynamicWagmiConnector>
        <body>
        <DynamicWidget />
        {children}
        </body>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
    </html>
 
  );
}
