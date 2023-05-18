import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";


export default function Success() {
  useEffect(() => {
    localStorage.clear()
  }, [])
  
  return (
    <>
    <Head>
        <title>IPtvConfig | Success</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta
          content="For €14 a Month | 151.000 Live & Movies | 2500 Full Series through one IPTV Subscription. The Amazing TV is The Best IPTV Service, well known now as a great reliable IPTV Provider. It is in fa..."
          name="description"
        />
        <meta content="IPTV Provider | Success" name="title" />
        <meta
          content="best iptv provider for USA, best iptv deal, secure payment, iptv reseller, american channels, asian channels list, european channels list, how to install iptv, channel list, arabic channels list, iptv subscription, holidays offer, better than netflix, iptv smarters, iptv box, iptv player,cobra,king 365,ott,m3u,mag,smart iptv,test,messi iptv price, iptv box, best iptv provider, best iptv alternative, quality, premium iptv subscription, 12 months premium iptv subscription, best iptv provider for 2023, full channel list, iptv on firestick 4k, iptv reddit, iptv smarters pro"
          name="keywords"
        />
      </Head>
    <Header/>
    <div className="mt-48 "></div>
    <div className="text-center ">Thanks you for choose us for provide you the best IPTV Server we will Contact you the next 30 minutes or</div>
    <div className="text-center "><Link href={"/contactus"} className="hover:text-blue-700 text-2xl text-red-700">Contact us</Link></div>
    </>
  )
}
