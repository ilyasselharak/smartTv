import {AiOutlineClose} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import {FiMenu} from "react-icons/fi"
import { useRouter } from "next/router"
import {PackagesContext} from "./PackagesContext"


const Header = () => {
  const [open ,setOpen]= useState(false)
    const router= useRouter()
    const path= router.asPath;
    const {selectedPackages,setSelectedPackages} = useContext(PackagesContext);
  useEffect(()=>{
    if(window.location.href.includes("success")){
      setSelectedPackages([])
      
    }

  },[])
    
    
    return (
<div className={` ${(path==='/checkout'?'':'fixed  ')} duration-500   top-0 shadow-shad left-0 z-[1] w-full`}>
    <div className='md:flex items-center bg-mycustomcolor border-b py-4 border-red-400 justify-around'>
    <Link href="/">
      <div className='flex text-white text-2xl ml-2 items-center'>
        IP<Image src="/logo.png" alt="logo iptv" width={70} height={70}/>
      </div></Link>
      <div className=' flex gap-2 absolute right-8 top-6 md:hidden'>
      <div className='block md:hidden text-red-600'>
      <Link href={'/checkout'} className={`${(path==='/checkout'?'text-white  border-red-300 border-b':'hover:text-white  ')} text-xl duration-500 flex items-center gap-2  `}><FaShoppingCart/> {selectedPackages.length}</Link>  
      </div>
      <div onClick={()=>setOpen(!open)} className='text-white text-3xl  cursor-pointer '>
           {open ? <AiOutlineClose/> : <FiMenu/>}
      </div>
      
      </div>
     <ul id="navbar" className={`md:flex bg-mycustomcolor text-red-600 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[5] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-412px]'}`}>
        <li className={`md:ml-8 md:my-0 my-7 ${open ? 'hover:border-b hover:border-red-300 hover:text-xl':''}`}><Link href={'/'} className={`${(path==='/'?'text-white text-xl border-red-300 border-b':'hover:text-white ')} duration-500   `}>HOME</Link></li>
        <li className={`md:ml-8 md:my-0 my-7 ${open ? 'hover:border-b hover:border-red-300 hover:text-xl':''}`}><Link scroll={false} onClick={()=>setOpen(!open)} href={'/#price'} className={`${(path==='/#price'?'text-white text-xl border-red-300 border-b':'hover:text-white  ')} duration-500   `} >PRICING</Link></li>
        <li className={`md:ml-8 md:my-0 my-7 ${open ? 'hover:border-b hover:border-red-300 hover:text-xl':''}`}><Link scroll={false} onClick={()=>setOpen(!open)} href={'/#about'} className={`${(path==='/#about'?'text-white text-xl border-red-300 border-b':'hover:text-white ')} duration-500   `}>ABOUT</Link></li>
        <li className={`md:ml-8 md:my-0 my-7 ${open ? 'hover:border-b hover:border-red-300 hover:text-xl':''}`}><Link onClick={()=>setOpen(!open)}  href={'/contactus'} className={`${(path==='/contactus'?'text-white text-xl border-red-300 border-b':'hover:text-white  ')} duration-500   `}>CONTACTUS</Link></li>
        <li className={`md:ml-8 md:my-0 text-red-400 my-7 `}><Link onClick={()=>setOpen(!open)} href={'/'} className={`${(path==='/business'?'text-white text-xl border-red-300 border-b':'')} duration-500   `}>BUSINESS</Link></li>
        <li className={`md:ml-8 md:my-0 my-7 ${open ? 'hover:border-b hover:border-red-300 hover:text-xl':''}`}><Link onClick={()=>setOpen(!open)} href={'/checkout'} className={`${(path==='/checkout'?'text-white hidden text-xl border-red-300 border-b':'hover:text-white  ')} duration-500 flex items-center gap-2  `}><FaShoppingCart/> {selectedPackages.length}</Link></li>
        
      </ul>
      </div>
      </div>
      )
    }
    
    export default Header