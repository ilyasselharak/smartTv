import Image from 'next/image'
import { PackagesContext } from './PackagesContext';
import  { useContext } from 'react'

import {FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa"
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';


const Footer = (data) => {
    const CustomToastWithLink = () => (
        <div>
          <Link href="/checkout" className='hover:text-black hover:border-b border-red-600'>{name} added to Cart</Link>
        </div>
      );
    const {setSelectedPackages} = useContext(PackagesContext);

  return (
    <div className='bg-black w-full h-vh bg-black border-t border-gray-500'>
        
        
        <div className=' grid px-8 py-4 gap-3 gap-y-8 xl:grid-cols-4 sm:grid-cols-2 items-center  justify-around text-white'>
        
            <div className='text-center flex flex-col gap-1'>
                <Image className="m-auto text-center " src="/logo.png" alt="iptv" width={120} height={70}/>
                <span>https://www.tv-smart.store/</span>
                <h1 className=''>Follow us in </h1>
                <div className='flex justify-center gap-4'>
                <Link href="/"><FaInstagram/></Link>
                <Link href="/"><FaFacebook/></Link>
                <Link href="/"><FaTwitter/></Link>
                </div>
            </div>
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>LINKS</h1>
                <p className='h-12'><Link href={'/#price'} >Pricing</Link></p>
        <p  className='h-12'><Link href={'/#about'}>ABOUT</Link></p>
        <p  className='h-12'><Link href={'/contact'}>CONTACTUS</Link></p>
        <p  className='h-12'><Link href={'/business'}>BUSINESS</Link></p>
        <p  className='h-12'><Link href={'/checkout'}>CART</Link></p>
            </div>
            
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>Packages</h1>
                {data.data?.map(item=>{
                    return <div key={item._id}><button className='h-12' onClick={()=>{setSelectedPackages(prev=>[...prev,item._id]);toast.success(CustomToastWithLink, {position: toast.POSITION.TOP_RIGHT})}}>{item.name}</button></div>
                })}
                <ToastContainer />
            </div>
            <div className='text-center'>
                <h1>Contact US</h1>
                <p>Contact@email.com</p>
                <p>Whatsapp : Send Message</p>
            </div>
        </div>
   </div>
  )
}

export default Footer