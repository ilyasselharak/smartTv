import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { PackagesContext } from "@/components/PackagesContext";
import { useContext, useEffect, useState } from "react";
import { initMongoose } from "@/lib/mongoose";
import { findAllPackages } from "./api/packages";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Image from "next/image";
import Pay from "@/components/Pay";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function CheckoutPage({ packages }) {
  const { selectedPackages, setSelectedPackages } = useContext(PackagesContext);

  const [packagesInfos, setPackagesInfos] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pay, setPay] = useState(false);

  useEffect(() => {
    const uniqIds = [...new Set(selectedPackages)];
    if (!uniqIds.length) {
      setPackagesInfos([]);
    } else {
      console.log();
      fetch("/api/packages?ids=" + uniqIds.join(","))
        .then((response) => response.json())
        .then((json) => setPackagesInfos(json))
        .catch((err) => console.log(err));
    }
  }, [selectedPackages]);

  function moreOfThisPackage(id) {
    setSelectedPackages((prev) => [...prev, id]);
  }
  function lessOfThisPackage(id) {
    const pos = selectedPackages.indexOf(id);
    if (pos !== -1) {
      setSelectedPackages((prev) => {
        return prev.filter((value, index) => index !== pos);
      });
    }

    if (pos == 0) {
      localStorage.setItem("price", 0);
    }
  }
  let subtotal = 0;
  if (selectedPackages?.length) {
    for (let id of selectedPackages) {
      const price = packagesInfos.find((p) => p._id === id)?.Price || 0;
      subtotal += price;
      localStorage.setItem("price", subtotal.toFixed(2));
    }
  }
  const total = subtotal.toFixed(2);
  return (
    <>
      <Head>
        <title>IPtvConfig | Cart</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta
          content="For €14 a Month | 151.000 Live & Movies | 2500 Full Series through one IPTV Subscription. The Amazing TV is The Best IPTV Service, well known now as a great reliable IPTV Provider. It is in fa..."
          name="description"
        />
        <meta content="IPTV Provider | Cart" name="title" />
        <meta
          content="best iptv provider for USA, best iptv deal, secure payment, iptv reseller, american channels, asian channels list, european channels list, how to install iptv, channel list, arabic channels list, iptv subscription, holidays offer, better than netflix, iptv smarters, iptv box, iptv player,cobra,king 365,ott,m3u,mag,smart iptv,test,messi iptv price, iptv box, best iptv provider, best iptv alternative, quality, premium iptv subscription, 12 months premium iptv subscription, best iptv provider for 2023, full channel list, iptv on firestick 4k, iptv reddit, iptv smarters pro"
          name="keywords"
        />
      </Head>
      <div>
        <div
          className={`bg-white h-screen z-[999] w-[80%] left-[10%] shadow-shad overflow-scroll fixed z-[1] rounded-xl ${
            pay ? "" : "hidden"
          }`}
        >
          <Pay setPay={setPay} pay={pay} />
        </div>
      </div>
      <Header />
      <div className="mt-24 text-6xl text-center text-red-700 mb-8">Cart</div>
      <div className="text-center text-xl mb-4">
        We are trying to add this payment methods please pay with PayPal
      </div>
      <Swiper
        style={{ "z-index": "-2" }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={4}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src="/visa.png" alt="visa" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/ideal.png" alt="ideal" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/mastercard.png"
            alt="masterCart"
            width={50}
            height={50}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/sofort.png" alt="sofort" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/gpay.png" alt="google pay" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/apay.png" alt="apple pay" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/giropay.png" alt="giro pay" width={50} height={50} />
        </SwiperSlide>
      </Swiper>
      <div className="  my-0 mx-auto mt-4">
        <div className="p-4 grid sm:grid-cols-2 grid-cols-1">
          <div>
            <div className="text-center text-xl mb-4">
              Choose package from here
            </div>
            <div className="flex flex-wrap gap-7 justify-center w-[80%]  mt-0 mb-5 mx-auto">
              {packages?.map((item) => {
                return (
                  <div key={item._id}>
                    <button
                      className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-2 rounded-md hover:shadow-indigo-500/40"
                      onClick={() => {
                        setSelectedPackages((prev) => [...prev, item._id]);
                      }}
                    >
                      {item.name}{" "}
                    </button>
                  </div>
                );
              })}
            </div>
            {!packagesInfos.length && (
              <div className="mt-6 text-center">Choose Your Package</div>
            )}
            <div className="flex gap-x-5 flex-wrap">
              {packagesInfos.length
                ? packagesInfos.map((packageInfo) => {
                    return (
                      <div
                        className="flex mb-5 items-center"
                        key={packageInfo._id}
                      >
                        <div className="pl-4 items-center">
                          <h3 className="font-bold text-lg">
                            {packageInfo.name}
                          </h3>
                          <div className="flex mt-1 gap-2">
                            <div className="grow font-bold">
                              €{packageInfo.Price}
                            </div>
                            <div>
                              <button
                                onClick={() =>
                                  lessOfThisPackage(packageInfo._id)
                                }
                                className="border border-emerald-500 px-2 rounded-lg text-emerald-500"
                              >
                                -
                              </button>
                              <span className="px-2">
                                {
                                  selectedPackages.filter(
                                    (id) => id === packageInfo._id
                                  ).length
                                }
                              </span>
                              <button
                                onClick={() =>
                                  moreOfThisPackage(packageInfo._id)
                                }
                                className="bg-emerald-500 px-2 rounded-lg text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="border border-1 border-black p-5 w-[80%] sm:[50%] mx-auto my-7">
              <p>
                Important By purchasing our product you are accepting
                automatically our{" "}
                <button
                  className="text-blue-700 hover:underline"
                  onClick={() => setPay(!pay)}
                >
                  Refund Policy
                </button>
              </p>
            </div>
          </div>
          <div>
            <form id="payment-form" action="/api/paypalCheck" method="POST">
              <div className="mt-8 hidden">
                <input
                  name="address"
                  value={selectedPackages}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
                  type="text"
                  placeholder="Street Address, Number"
                />
                <input
                  name="city"
                  value={total}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
                  type="text"
                  placeholder="City, Postal Code"
                />
              </div>
              <div className="mb-3">Please Fill Fields (*):</div>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
                type="text"
                placeholder="Your Name (*)"
              />
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
                type="email"
                placeholder="Email Address (*)"
              />
              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2"
                type="tel"
                placeholder="Tel Whatsapp : +..-...-...-   (*)"
              />
              <div>
                You will pay:{" "}
                <span className="text-green-700">{total} EUR</span>{" "}
                {total == 0 ? (
                  <span className="text-red-700">choose a package</span>
                ) : (
                  ""
                )}
              </div>
              {selectedPackages.length !== 0 ? (
                <div className="text-center mt-6">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AZxXLsldfIP2YTwNNJmWa2H-bjmObu4miwr8di5xyOd0kN3ewMvEyFZ7oZTxL1i9W4kzn08NpM1d5_ja",
                      currency: "EUR",
                    }}
                  >
                    <PayPalButtons
                      style={{
                        color: "silver",
                        layout: "vertical",
                        shape: "pill",
                      }}
                      onApprove={(data, action) => {
                        document.querySelector("#payment-form").submit();
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: localStorage.getItem("price"),
                              },
                            },
                          ],
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              ) : (
                ""
              )}
            </form>
            <div className="text-center text-red-700 mt-5">
              {total == 0 ? (
                ""
              ) : (
                <div>
                  If you got any problems with payment we are online
                  <Link
                    className="hover:text-red-600 text-red-900 hover:text-xl"
                    href="/contactus"
                  >
                    {" "}
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mb-4 text-green-700">
          After you made payment we will contact you withing 30 min to help you
          active your IPTV
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
