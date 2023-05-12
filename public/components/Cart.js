import StripeCheckout from 'react-stripe-checkout'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useSession} from "next-auth/react";
const Cart = () => {
    const {data: session} = useSession()
  return (
    <>
    <div className="ml-4 mt-2">
            <div className="flex items-center justify-between w-[80%] mx-auto">
              <div className="flex items-center gap-2">
                <img src={session.user.image} width={60} className="rounded-full" alt={session.user.name}/>
                <span>{session.user.name}</span>
                <button onClick={()=>signOut()}>signOut</button>
              </div>
              <div className="text-blue-700">
                <button onClick={fun}>Select another package</button>
              </div>
            </div>
            <div className="grid grid-cols-2">
            <div>
               <div className="flex flex-col gap-2 mt-2 w-full">
                 <h1>Customer information</h1>
                 <input type="email" value={session.user.email}/>
                  <h2>Billing details</h2>
                  <div className="flex flex-col gap-3">
                     <div>
                       <input value={session.user.name} type="text"/>
                      </div>
                      <select className="border border-black rounded-md p-2 ml-2">
                        {
                          dat?.map(i=>{
                               return <option value={i.name} key={i.name}>{i.name}</option> 
                           })
                       }
                     </select>
                    <div>
                      <input placeholder="ADDRESS"  type="text"/>
                   </div>
                   <div>
                      <input placeholder="COUNTRY"  type="text"/>
                     </div>
                    <div>
                       <input placeholder="Tel:+---_---_--"  type="tel"/>
                     </div>
                  </div>
              </div>
            </div>
            <div className="m-auto flex flex-col gap-4">
               <div className="flex gap-4 items-center">
                  <label>Credit Card:</label>
                  <StripeCheckout
                    stripeKey='pk_test_51My7qwBPMltpexmsXF53SsaOf3jnvJhHRwaqqfPbY2hU0NmAw1rg3OefRoRevGMBGCEYxdvrqyn46fFAntv7aSkV00FBjHG8Ah'
                     amount={localStorage.getItem("price")}
                     label='pay'
                     email={session.user.email}
                    description={`your payment will be ${localStorage.getItem("price")}`}/>
               </div>
               <div className="flex gap-4 items-center">
            <PayPalScriptProvider>
              <PayPalButtons style={{
                color: "silver",
                layout: "horizontal",
                shape:"pill"
              }}
              createOrder={(data,actions)=>{
                return actions.order.create({
                  purchase_units: [
                    {
                      amount:{
                        value:localStorage.getItem("price")
                    },
                  }
                  ]
                })
              }}
              ></PayPalButtons>
            </PayPalScriptProvider>
               </div>
            </div>
            </div>
            </div>
            
    </>
  )
}

export default Cart