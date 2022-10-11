import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store/store";
import { setIsConnected } from '../store/auth';
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header';
import {Provider} from 'react-redux';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
} from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.hardhat, chain.mainnet],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

function MyApp({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
          <ChakraProvider>
            <Header />
            <Component {...props} />
          </ChakraProvider>
      </WagmiConfig>
    </Provider>
  )
}

export default MyApp;
