import { PackagesContextProvider } from "@/components/PackagesContext";
import "@/styles/globals.css";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
export default function App({ Component, pageProps }) {
  return (
    <PackagesContextProvider>
      <Component {...pageProps} />

      <CookieConsent
        debug={true}
        style={{ background: "rgb(220 38 38)", opacity:"0.9"}}
        buttonStyle={{ borderRadius: "10px" }}
        buttonText="That Fine!"
      >
        <div className="text-center font-medium">
          This Website Uses Cookies See Our{" "}
          <Link href="/privacy-policy" className="text-blue-700 text-xl">Privacy Policy</Link> for More
        </div>
      </CookieConsent>
    </PackagesContextProvider>
  );
}
