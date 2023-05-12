import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import {useSession} from "next-auth/react";
import {AiOutlineClose} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa"

FaShoppingCart
const Header = ({msg}) => {
  const [open ,setOpen]= useState(false)
  const {data: session} = useSession()

  if (typeof window !== 'undefined') {
    var item = localStorage.getItem('price') 
  }
  return (
    <div className='top-0 left-0 z-[1] fixed w-full'>
    <div className='md:flex items-center bg-mycustomcolor border-b py-4 border-red-400 justify-around'>
      <div className='flex text-white text-2xl ml-2 items-center'>
        IP<Image src="/logo.png" width={70} height={70}/>
      </div>
      <div className=' flex gap-2 absolute right-8 top-6 md:hidden'>
      {session?<img src={session.user.image}  className="rounded-full" width="30px" height="30px"/>:""}
      <div className={`block md:hidden `}><a href='#price' onClick={()=>{item ? msg() :""}} className={`hover:text-white duration-500  hover:border-b hover:border-red-300 hover:text-xl ${item? 'text-rose-400 text-xl gap-3 flex items-center': ''}`}><FaShoppingCart/> {item? "1":""}</a>  
      </div>
      <div onClick={()=>setOpen(!open)} className='text-white text-3xl  cursor-pointer '>
           {open ? <AiOutlineClose/> : <FiMenu/>}
      </div>
      
      </div>
      {open ? (<ul id="navbar" className={`md:flex bg-mycustomcolor text-red-600 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-412px]'}`}>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl ' >HOME</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'#price'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl ' >PRICING</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'#about'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>ABOUT</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/contact'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>CONTACTUS</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/business'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>BUSINESS</Link></li>
        
      </ul>):(<ul id="navbar" className={`md:flex bg-mycustomcolor text-red-600 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-412px]'}`}>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl ' >HOME</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'#price'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl ' >PRICING</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'#about'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>ABOUT</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/contact'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>CONTACTUS</Link></li>
        <li className='md:ml-8 md:my-0 my-7'><Link href={'/business'} className='hover:text-white duration-500 hover:border-b hover:border-red-300 hover:text-xl '>BUSINESS</Link></li>
      
        <li className={`md:ml-8 md:my-0 my-7 ${session?"":"hidden"}`}>{session?<img src={session.user.image}  className="rounded-full" width="30px" height="30px"/>:""}</li>

        <li className='md:ml-8 md:my-0 my-7'><a href='#price' onClick={()=>{item ? msg() :""}} className={`hover:text-white duration-500  hover:border-b hover:border-red-300 hover:text-xl ${item? 'text-rose-400 text-xl gap-3 flex items-center': ''}`}><FaShoppingCart/> {item? "1":""}</a></li>
      </ul>)}
      
    </div>
    </div>
  )
}

export default Header