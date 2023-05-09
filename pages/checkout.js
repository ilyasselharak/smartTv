import Footer from "@/components/Footer"
import Header from "@/components/Header"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay, Pagination, Navigation } from "swiper";
import { PackagesContext } from "@/components/PackagesContext";
import { useContext, useEffect, useState } from "react";
import { initMongoose } from '@/lib/mongoose';
import { findAllPackages } from './api/packages';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalButton } from "react-paypal-button-v2";
import Image from "next/image";
import Pay from "@/components/Pay";
import Head from "next/head";

export default function CheckoutPage({packages}) {



    const {selectedPackages,setSelectedPackages} = useContext(PackagesContext);
    
    const [packagesInfos,setPackagesInfos]=useState([]);
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [pay,setPay] = useState(false)

    useEffect(() => {
        const uniqIds = [...new Set(selectedPackages)];
        if(!uniqIds.length){
            setPackagesInfos([])
        }else{
            console.log()
        fetch('/api/packages?ids='+uniqIds.join(','))
          .then(response => response.json())
          .then(json => setPackagesInfos(json))
          .catch(err=>console.log(err))
        }
      }, [selectedPackages]);
    
      function moreOfThisPackage(id) {
        setSelectedPackages(prev => [...prev,id]);
      }
      function lessOfThisPackage(id) {
        const pos = selectedPackages.indexOf(id);
        if (pos !== -1) {
          setSelectedPackages( prev => {
            return prev.filter((value,index) => index !== pos);
          });
        }
       
        if(pos==0){
          localStorage.setItem('price',0)
        }
      }
  let subtotal = 0;
  if (selectedPackages?.length) {
    for (let id of selectedPackages) {
      const price = packagesInfos.find(p => p._id === id)?.Price || 0;
      subtotal += price;
      localStorage.setItem("price",subtotal.toFixed(2))
    }
  }
  const total = subtotal.toFixed(2)
  return (
    <>
    <Head>
      <title>IPtvConfig | Cart</title>
      <link rel='icon' type="image/x-icon" href="/logo.png"/>
      <meta content='For €14 a Month | 151.000 Live & Movies | 2500 Full Series through one IPTV Subscription. The Amazing TV is The Best IPTV Service, well known now as a great reliable IPTV Provider. It is in fa...' name='description'/>
      <meta content='IPTV Provider | Cart' name='title'/>
      <meta content="best iptv provider for USA, best iptv deal, secure payment, iptv reseller, american channels, asian channels list, european channels list, how to install iptv, channel list, arabic channels list, iptv subscription, holidays offer, better than netflix, iptv smarters, iptv box, iptv player,cobra,king 365,ott,m3u,mag,smart iptv,test,messi iptv price, iptv box, best iptv provider, best iptv alternative, quality, premium iptv subscription, 12 months premium iptv subscription, best iptv provider for 2023, full channel list, iptv on firestick 4k, iptv reddit, iptv smarters pro" name="keywords"/>
    </Head>
    <div>
     <div className={`bg-white h-screen w-[80%] left-[10%] shadow-shad overflow-scroll fixed z-[1] rounded-xl ${pay ? "" : "hidden"}`}><Pay setPay={setPay} pay={pay}/></div>
    </div>
    <Header/>
    <div className="mt-32 "></div>
<div className="  my-0 mx-auto">

      
              <div className="p-4 grid sm:grid-cols-2 grid-cols-1">
                <div>
                  <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-6 w-[80%] my-0 mx-auto">

                {
      packages?.map(item=>{
        return (
          <div key={item._id}>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-2 rounded-md hover:shadow-indigo-500/40" onClick={()=>{setSelectedPackages(prev=>[...prev,item._id])}}>{item.name} </button>
          </div>

        
        )})}
               </div>   
              {!packagesInfos.length && (
        <div className="mt-6 text-center">Choose Your Package</div>
      )}<div className="flex gap-x-5 flex-wrap">
      {
        packagesInfos.length ? packagesInfos.map(packageInfo=>{
            
            return (
                <div className="flex mb-5 items-center" key={packageInfo._id}>
                  
                  <div className="pl-4 items-center">
                    <h3 className="font-bold text-lg">{packageInfo.name}</h3>
                    <div className="flex mt-1 gap-2">
                      <div className="grow font-bold">€{packageInfo.Price}</div>
                      <div>
                        <button onClick={() => lessOfThisPackage(packageInfo._id)} className="border border-emerald-500 px-2 rounded-lg text-emerald-500">-</button>
                        <span className="px-2">
                          {selectedPackages.filter(id => id === packageInfo._id).length}
                        </span>
                        <button onClick={() => moreOfThisPackage(packageInfo._id)} className="bg-emerald-500 px-2 rounded-lg text-white">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}):""}
              </div>
              <div className="border border-1 border-black p-5 w-[80%] sm:[50%] mx-auto mt-7">
                <p>Important By purchasing our product you are accepting automatically our <button className="text-blue-700 hover:underline" onClick={()=>setPay(!pay)}>Refund Policy</button></p>
              </div>
              </div>
              <div>
              {/* <form action="/api/checkout" method="POST">
        <div className="mt-8">
        <input name="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your Name (*)"/>
          <input name="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email Address (*)"/>
          <input name="address" value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address, number"/>
          <input name="city" value={city} onChange={e => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City, postal code"/>
          <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="tel" placeholder="Tel Whatsapp : +..-...-...-   (*)"/>
          
        </div>
        <div className="mt-8">
         
          <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
            <h3 className="grow font-bold text-gray-400">Total:</h3>
            <h3 className="font-bold">€{total}</h3>
          </div>
        </div>
        <input type="hidden" name="packages" value={selectedPackages.join(',')}/>
        {(name!=="" & email.includes("@") & phone!=="")?' ':'Enter the required info (*)'}
        <Swiper style={{"z-index": "0"}}
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
      <Image src="/visa.png" alt="visa" width={50} height={50}/>
       
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/ideal.png" alt="ideal" width={50} height={50}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/mastercard.png" alt="masterCart" width={50} height={50}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/sofort.png" alt="sofort" width={50} height={50}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/gpay.png" alt="google pay" width={50} height={50}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/apay.png" alt="apple pay" width={50} height={50}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/giropay.png" alt="giro pay" width={50} height={50}/>
      
      </SwiperSlide>
    </Swiper>
         {(total!=0 & email.includes("@") & phone!=="" &name!=="")?
         <button disabled type="submit" className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-red-700 w-full my-4 shadow-emerald-300 shadow-lg">Sorry we working on paying with This methods </button>:<> <button  type="submit" className="bg-emerald-100 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay €{total} </button></>} 
        
        
      </form> */}
      <form id="payment-form" action="/api/paypalCheck" method="POST">
      <div className="mt-8 hidden">
        <input name="name" value={total} onChange={e => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your Name (*)"/>
          <input name="email" value={selectedPackages} onChange={e => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email Address (*)"/>
          <input name="address" value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address, number"/>
          <input name="city" value={city} onChange={e => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City, postal code"/>
          <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="tel" placeholder="Tel Whatsapp : +..-...-...-   (*)"/>
          
        </div>
    
        Continue with <Image src="/paypal.png" alt="paypal" style={{display:"inline-block"}} width={50} height={50}/> for this moment
        {selectedPackages.length!==0 ? (<div className="text-center">
          {/* <PayPalScriptProvider options={{"client-id":"AUQP1ceKXtUHdksNZODq9cgZe_02qaMI2OuirldJojqyn2z9A0mXT21DMuvnjBCb_JjGglppctuDQoCf",currency: "EUR"}}>
          <PayPalButtons style={{
                color: "silver",
                layout: "vertical",
                shape:"pill"
              }}
              onApprove={(data,action)=>{

                document.querySelector('#payment-form').submit();
              }}
              createOrder={(data,actions)=>{
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: localStorage.getItem("price"),
                      },
                    }
                    ]
                  })
              }}
              />
            
          </PayPalScriptProvider> */}
          <PayPalButton
        amount={localStorage.getItem("price")}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          document.querySelector('#payment-form').submit();

          
        }}
        
        options={{
          clientId: 
          "AUQP1ceKXtUHdksNZODq9cgZe_02qaMI2OuirldJojqyn2z9A0mXT21DMuvnjBCb_JjGglppctuDQoCf",
          currency:"EUR",
        
        }}
      />
        </div>):<div className="text-center">Your Cart is empty</div>}
      
      </form>
      <div>if you got any problems with payment we are online contact us</div>
      </div>
      
      </div>
        
      
</div>
    <Footer data={packages}/>
    </>
  )
}
export async function getServerSideProps(){
  await initMongoose();
  const packages = await findAllPackages();
  return {
    props:{
      packages: JSON.parse(JSON.stringify(packages)),
    }
  }
}