import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { initMongoose } from "@/lib/mongoose";
import { findAllPackages } from "./api/packages";
import Head from "next/head";

export default function ContactUs({ packages }) {
  return (
    <>
      <Head>
        <title>IPtvConfig | Contact</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta
          content="For €14 a Month | 151.000 Live & Movies | 2500 Full Series through one IPTV Subscription. The Amazing TV is The Best IPTV Service, well known now as a great reliable IPTV Provider. It is in fa..."
          name="description"
        />
        <meta content="IPTV Provider | Contact" name="title" />
        <meta
          content="best iptv provider for USA, best iptv deal, secure payment, iptv reseller, american channels, asian channels list, european channels list, how to install iptv, channel list, arabic channels list, iptv subscription, holidays offer, better than netflix, iptv smarters, iptv box, iptv player,cobra,king 365,ott,m3u,mag,smart iptv,test,messi iptv price, iptv box, best iptv provider, best iptv alternative, quality, premium iptv subscription, 12 months premium iptv subscription, best iptv provider for 2023, full channel list, iptv on firestick 4k, iptv reddit, iptv smarters pro"
          name="keywords"
        />
      </Head>
      <Header />
      <div className="mt-32 "></div>
      <div className="flex h-[700px] justify-center items-center flex-col sm:flex-row ml-5 mb-3">
        <form
          method="POST"
          action="/api/contact"
          className="flex w-[50%] flex-col gap-4"
        >
          <div>
            <label for="name">Your Name: </label>
            <input
              className="border-1 w-full border-black border p-1 rounded-sm"
              id="name"
              name="name"
              type="text"
              placeholder="Your full Name"
            />
          </div>
          <div>
            <label for="email">Your Email: </label>
            <input
              className="border-1 w-full border-black border p-1 rounded-sm"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          Message:
          <div>
            <textarea
              name="message"
              id="message"
              className="border-1 w-full border-black border p-1 rounded-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-2 rounded-md hover:shadow-indigo-500/40"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col gap-4 w-[50%]  p-8">
          <div>Email: support@tv-smart.store</div>
          <div>Call or Whatsapp:</div>
          <div>Netherlands: +31610049923 </div>
          <div>Morocco: +212643528283</div>
          <div>Ukraine: +380683753818</div>
          <address>Assendorperstraat 29 , zwolle Netherlands</address>
        </div>
      </div>

      <Footer data={packages} />
    </>
  );
}
export async function getServerSideProps() {
  await initMongoose();
  const packages = await findAllPackages();
  return {
    props: {
      packages: JSON.parse(JSON.stringify(packages)),
    },
  };
}
