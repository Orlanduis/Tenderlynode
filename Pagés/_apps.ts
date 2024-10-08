import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { vMainnet } from '../tenderly-chains';
 
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
const config = getDefaultConfig({
  appName: 'vRainbowKit App',
  projectId: 'https://virtual.mainnet.rpc.tenderly.co/859ee835-1907-49ae-85e1-4db1c240c6b0,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED === 'true' ? [Mainnet] : [vMainnet]),
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
 
const client = new QueryClient();
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider
          initialChain={process.env.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED === 'true' ? vMainnet : config.chains[0]}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
 
export default MyApp;
