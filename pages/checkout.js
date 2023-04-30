import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { PackagesContext } from "@/components/PackagesContext";
import { useContext, useEffect, useState } from "react";

import { initMongoose } from '@/lib/mongoose';
import { findAllPackages } from './api/packages';
export default function CheckoutPage({packages}) {



    const {selectedPackages,setSelectedPackages} = useContext(PackagesContext);
    
    const [packagesInfos,setPackagesInfos]=useState([]);
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    
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
      }
  let subtotal = 0;
  if (selectedPackages?.length) {
    for (let id of selectedPackages) {
      const price = packagesInfos.find(p => p._id === id)?.Price || 0;
      subtotal += price;
    }
  }
  const total = subtotal.toFixed(2)
    
  return (
    <>
    <Header/>
    <div className="mt-32 "></div>
<div className="  my-0 mx-auto">

      
              <div className="p-4 grid sm:grid-cols-2 grid-cols-1">
                <div>
                  <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-6 w-[80%] my-0 mx-auto">

                {
      packages?.map(item=>{
        return (
          
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-2 rounded-md hover:shadow-indigo-500/40" onClick={()=>{setSelectedPackages(prev=>[...prev,item._id])}}>{item.name} </button>
    
        
        )})}
               </div>   
              {!packagesInfos.length && (
        <div className="mt-6">select any package please </div>
      )}
      {
        packagesInfos.length ? packagesInfos.map(packageInfo=>{
            
            return (
                <div className="flex mb-5 items-center" key={packageInfo._id}>
                  
                  <div className="pl-4 items-center">
                    <h3 className="font-bold text-lg">{packageInfo.name}</h3>
                    <div className="flex mt-1 gap-2">
                      <div className="grow font-bold">${packageInfo.Price}</div>
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
              <form action="/api/checkout" method="POST">
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
            <h3 className="font-bold">${total}</h3>
          </div>
        </div>
        <input type="hidden" name="packages" value={selectedPackages.join(',')}/>
        {(name!=="" & email.includes("@") & phone!=="")?' ':'Enter the required info (*)'}
       
        {(total!=0 & email.includes("@") & phone!=="" &name!=="")?
        <button type="submit" className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay ${total} </button>:<> <button disabled type="submit" className="bg-emerald-100 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg">Pay ${total} </button></>}
        
        <div className="text-center">
      
        </div>
      </form>
      
      </div>
        
      
</div>
    <Footer/>
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