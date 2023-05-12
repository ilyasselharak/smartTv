import Header from "@/components/Header";
import { MdShoppingCartCheckout } from "react-icons/md";
import { PackagesContext } from "@/components/PackagesContext";
import { useContext, useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Pay from "@/components/Pay";
import Head from "next/head";
import axios from "axios";
export default function CheckoutPage() {

  const { selectedPackages, setSelectedPackages } = useContext(PackagesContext);
  const [packagesInfos, setPackagesInfos] = useState([]);
  const [name, setName] = useState("");
  const [pay, setPay] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");


  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

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
    if (selectedPackages.length == 1) {
      return;
    } else {
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
  
  const [loading, setLoading] = useState(false);
  const coinbase = async () => {
    setLoading(true);
    try {
      const data = await axios.post("/api/init", {
        id: selectedPackages[0]._id,
        price: total,
        name: name,
      });
      setLoading(false);
      window.open(data.data.hosted_url, "_blank");
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  const displayed = () => {
    switch (selectedOption) {
      case "paypal":
        return (
          <div className="text-center mt-6">
            <PayPalScriptProvider
              options={{
                "client-id":"AfhkCQXJACV0EzlNmb2kDGuapZhcT-8QrtovwilMr9SnNq-I5_xMJBtw3qbN9gBvcduSy9s-UXGsO1EY",
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
        );
      case "Bank":
        return (
          <div className="flex justify-center text-2xl mt-6">
            <div>
              <div>
                <span className=" font-bold">Currency:</span> EUR
              </div>
              <div>
                <span className="font-bold">IBAN:</span> LT:10 3250 0289 0285
                6313
              </div>
              <div>
                <span className="font-bold">BIC:</span> REVOLT21
              </div>
            </div>
          </div>
        );
      case "crypto":
        return (
          <>
            <div className=" mt-6">
              <button
                type="button"
                className="text-2xl flex text-black gap-1 items-center mx-auto p-4 bg-white shadow-shad rounded-3xl font-[500]"
                onClick={coinbase}
                disabled={loading}
              >
                <MdShoppingCartCheckout />
                Check
              </button>
            </div>
          </>
        );
      
    }
  };
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
      
      <div className="text-center text-6xl font-bold mt-6">CHECKOUT</div>
      <div className="w-[80%] mx-auto border-[2px] border-gray-400 rounded-xl p-5 mt-8 shadow-shad bg-My text-white">
        <div className="font-bold">Billing Details</div>
        <form className="mt-5" id="payment-form" method="POST" action="/api/paypalCheck">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col sm:w-[50%] ">
              <label htmlFor="name">Full Name:</label>
              <input
                className="text-black mt-1 p-2"
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col sm:w-[50%]">
              <label htmlFor="phone">Number Phone:</label>
              <input
                className="text-black mt-1 p-2"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+49-.."
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="email">Email:</label>
            <input className="p-2 mt-1 text-black" type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col mt-6 sm:flex-row gap-4">
            
            <div className="w-[50%] flex gap-2">
              <input
                type="checkbox"
                checked={selectedOption === "Bank"}
                onChange={() => handleCheckboxChange("Bank")}
                name="bank"
                id="Bank"
              />
              <label htmlFor="Bank">Bank Transfer:</label>
            </div>
            <div className="w-[50%] flex gap-2">
              <input
                type="checkbox"
                checked={selectedOption === "paypal"}
                onChange={() => handleCheckboxChange("paypal")}
                name="paypal"
                id="PayPal"
              />
              <label htmlFor="PayPal">PayPal:</label>
            </div>
            <div className="w-[50%] flex gap-2">
              <input
                type="checkbox"
                checked={selectedOption === "crypto"}
                onChange={() => handleCheckboxChange("crypto")}
                name="crypto"
                id="crypto"
              />
              <label htmlFor="crypto">Crypto Currency:</label>
            </div>
          </div>
          <div className="flex items-end">
            <div className="w-[50%]">
              <div className="text-2xl font-bold mt-8">Your Order</div>
              {packagesInfos.length
                ? packagesInfos.map((packageInfo) => {
                    return (
                      <div
                        className="flex mb-5 items-center mt-4"
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
                                type="button"
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
                                type="button"
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
            <div className="font-bold text-2xl">Total: €{total}</div>
          </div>
          {selectedOption !== "" && displayed()}
        </form>
        <div className="border border-1 border-white p-5 w-[80%] sm:[50%] mx-auto my-7">
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
      </div><div className="mb-32"></div>
    </>
  );
}
