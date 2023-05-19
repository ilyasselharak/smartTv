import { PackagesContextProvider } from "@/components/PackagesContext";
import "@/styles/globals.css";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from "react-cookie-consent";
import TrackingCode from "@/components/TrackingCode";
export default function App({ Component, pageProps }) {
  return (
    <PackagesContextProvider>
      <TrackingCode/>
      <Component {...pageProps} />
      <Analytics />
      <CookieConsent
        debug={true}
        style={{ background: "rgb(255 255 255)",boxShadow:"0px -3px 23px 1px black",border:"1px solid black",color:"black", opacity:"0.9"}}
        buttonStyle={{ borderRadius: "10px" }}
        buttonText="Close"
      >
        <div className="text-center font-medium">
          This Website Uses Cookies See Our{" "}
          <Link href="/privacy-policy" className="text-blue-700 text-xl">Privacy Policy</Link> for More
        </div>
      </CookieConsent>
    </PackagesContextProvider>
  );
}
