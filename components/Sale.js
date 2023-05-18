import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import {  useRouter } from "next/router";
import { PayPalButton } from "react-paypal-button-v2/dist";

const Product = ({ name, Price, _id }) => {
    const rout = useRouter();
  return (
    <div className="w-[261px] sm:w-[300px]">
      <div
        key={_id}
        className="bg-red-800 text-white shadow-shad text-center rounded-lg py-2 pb-4 "
      >
        <div className=" border-b-2 p-2 text-black border-red-200 bg-darkCyan">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className=" font-bold mt-3">Buy IPTV RESELLER</p>
        </div>

        <h1 className="py-2 border-b font-bold border-gray-500 w-[80%] m-auto text-4xl">
          
          {Price} €
        </h1>
        <div className="py-4 text-l flex flex-col gap-4 pb-6">
          <p>Control Panel</p>
          <p>18900 Live Channels</p>
          <p>All Country Channels</p>
          <p>No Credits Limit Time</p>
          <p>100 Gbps streaming speed</p>
          <p>Movies & TV Show included</p>
          <p>24/7 Technical Support</p>
          <p>Quality SD/HD/FHD/4K</p>
          <p>100% Stable Server</p>
          <p>Adult Channles</p>
          <p>Fast Delivery</p>
        </div>
        <div className="w-[80%] m-auto">
        
        {/* <PayPalScriptProvider 
              options={{
                "client-id":process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                currency: "EUR",
              }}
            >
              <PayPalButtons
                style={{
                    tagline:false,
                  color:"blue",
                  layout: "horizontal",
                  shape: "pill",
                }}
                onApprove={(data, action) => {
                    rout.push("/success")
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: Price,
                        },
                      },
                    ],
                  });
                }}
              />
            </PayPalScriptProvider> */}
             <PayPalButton
        amount={Price}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
            rout.push("/success")
        }}
        
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency:"EUR",
        
        }}
      />
            </div>
      </div>
    </div>
  );
};

export default Product;
