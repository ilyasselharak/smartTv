import Image from 'next/image'

import {FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black w-full h-vh relative bg-black border-t border-gray-500'>
        
        
        <div className=' grid px-8 py-4 gap-3 xl:grid-cols-4 sm:grid-cols-2 justify-around text-white'>
        
            <div>
                <Image src="/logo.png" width={120} height={70}/>
                <span>https://localhost://3000</span>
                <h1 className=''>Follow us in </h1>
                <div className='flex gap-4'>
                <Link href="/"><FaInstagram/></Link>
                <Link href="/"><FaFacebook/></Link>
                <Link href="/"><FaTwitter/></Link>
                </div>
            </div>
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>LINKS</h1>
                <p><Link href={'#price'} >Pricing</Link></p>
        <p><Link href={'/blog'}>BLOG</Link></p>
        <p><Link href={'#about'}>ABOUT</Link></p>
        <p><Link href={'/contact'}>CONTACTUS</Link></p>
        <p><Link href={'/business'}>BUSINESS</Link></p>
        <p><Link href={'/business'}>CART</Link></p>
            </div>
            <div className='text-center flex flex-col gap-1'>
                <h1 className='text-2xl pb-2'>Packages</h1>
                <p><Link href={'/'} >1 Month </Link></p>
        <p><Link href={'#price'}>3 Month</Link></p>
        <p><Link href={'#price'}>6 Month</Link></p>
        <p><Link href={'/about'}>12 Month</Link></p>
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