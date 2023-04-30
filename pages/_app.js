import { PackagesContextProvider } from '@/components/PackagesContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <PackagesContextProvider>
      <Component {...pageProps} />
    </PackagesContextProvider>
  );
 
}
