import { PackagesContextProvider } from '@/components/PackagesContext'
import '@/styles/globals.css'
import CookieConsent from 'react-cookie-consent';
export default function App({ Component, pageProps }) {
  return (
    <PackagesContextProvider>
      <Component {...pageProps} />
      <CookieConsent debug={true} style={{background:"rgb(220 38 38)"}} buttonStyle={{borderRadius:"10px"}} buttonText="That Fine!"><div className='text-center'>this website uses cookies See our privacy policy for more</div></CookieConsent>
    </PackagesContextProvider>
  );
 
}
