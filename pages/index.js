import Header from '@/components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import Image from "next/image";
import {MdBackup,MdOutlineSupportAgent} from "react-icons/md"
import {BsFillCloudDownloadFill} from "react-icons/bs"
import {FcSalesPerformance} from "react-icons/fc"
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { initMongoose } from '@/lib/mongoose';
import { findAllPackages } from './api/packages';
import Product from '@/components/Product';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({packages}) {

  const [days,setDays]=useState(0)
  const [hours,setHours]=useState(0)
  const [minutes,setMinutes]=useState(0)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      const target = new Date("04/26/2023 22:59:59")
      const now = new Date()
      const difference = target.getTime() - now.getTime()
      const d = Math.floor(difference/(1000*60*60*24))
      const h = Math.floor(difference % (1000 * 60*60*24)/(1000*60*60))
      const m = Math.floor(
        (difference % (1000*60*60)/(1000*60))
      )
      setHours(h)
      setDays(d)
      setMinutes(m)

    }, 1000)
    return () => clearInterval(interval)
  },[])
  return (
    <>
    <Head>
      <title>TvSmart</title>
      <link rel='icon' type="image/x-icon" href="/logo.png"/>
      <meta content="best iptv provider for USA, best iptv deal, secure payment, iptv reseller, american channels, asian channels list, european channels list, how to install iptv, channel list, arabic channels list, iptv subscription, holidays offer, better than netflix, iptv smarters, iptv box, iptv player,cobra,king 365,ott,m3u,mag,smart iptv,test,messi iptv price, iptv box, best iptv provider, best iptv alternative, quality, premium iptv subscription, 12 months premium iptv subscription, best iptv provider for 2023, full channel list, iptv on firestick 4k, iptv reddit, iptv smarters pro" name="keywords"/>
      <meta content='For €12 a Month | 151.000 Live & Movies | 2500 Full Series through one IPTV Subscription. The Amazing TV is The Best IPTV Service, well known now as a great reliable IPTV Provider. It is in fa...' name='description'/>
      <meta content='IPTV Provider | The best IPTV Service Provider' name='title'/>
    </Head>
    <Header/>
    <div className="top-20 sm:w-[730px] xl:w-full md:w-full 2xl:w-ful lg:w-full w-[600px] xl:top- right-0 relative">
    <Swiper style={{"z-index": "0"}}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
      <div className=" bg2 h-[500px] xl:h-[700px] bg-cover bg-center">
    <div className="text-white xl:w-[60%] xl:pt-[9%] sm:pt-[12%] pt-[13%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">BEST IPTV PROVIDER</h1>
    <div className="xl:text-4xl w-[65%] text-chartreuse font-bold text-2xl pb-2">TAKE IPTV SUBSCRIPTION FROM THE BEST SERVER SELLER AND BE IN CONTACT</div>
    <div className="text-xl">ALL DEVICES ARE SUPPORTED</div>
    <Link href="/#price"><button className="rounded-md text-xl p-2 mt-2 bg-blue-600 text-white" >Shop iptv</button></Link>
    </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-[500px] bg1 xl:h-[700px] bg-cover bg-center">

    <div className="text-white xl:w-[60%] xl:pt-[9%] sm:pt-[12%] pt-[13%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">Luxury IPTV</h1>
    <div className="xl:text-4xl text-orange-600 font-bold text-2xl pb-2">+ 242,000 Live & VODs</div>
    <div className="text-xl">FUll HD, 4K ULTRA HD ...</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-red-600 text-white">See channels</button>
    </div>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-[500px] bg3  xl:h-[700px] bg-cover bg-center">
   
    <div className="text-white xl:w-[60%] xl:pt-[9%] sm:pt-[12%] pt-[13%] pl-[4%]">
    <h1 className="pb-2 border-b border-red-500 w-fit mb-2">INSTANT ACTIVATION</h1>
    <div className="xl:text-4xl text-chartreuse w-fit font-bold text-2xl pb-2">HELP YOU ACTIVATE AND RUN YOU SERVER</div>
    <div className="text-xl">24/7 SUPPORT</div>
    <button className="rounded-md text-xl p-2 mt-2 bg-[#8A2BE2] text-white">Contact us</button>
    </div>
    </div> 
      </SwiperSlide>
    </Swiper>
    <div className="text-red-700 text-center text-6xl py-6">Why Subscribe to Our Service</div>
    
    <div className="px-4">
    <div className=" text-center text-xl pt-2">One of The best subscriptions service with more up to 19999 channels and more than 99999 Movies and tv shows.</div>
    <div className=" text-center text-xl pt-2">When you use our IPTV server You will be able to watch TV channels, movies, TV shows, sports, and documentaries from all over the world, shop IPTV now, and enjoy with our server.</div>
    </div>
    <div className=" grid justify-around gap-3 text-lg text-center xl:grid-cols-3 sm:grid-cols-2 xl:px-72 sm:32 py-16">
      <div className="flex flex-col items-center justify-center">
      <Image className="rounded-md wx-auto my-6" src="/movie.jpg" alt="movies" width={200} height={130}/>
      <div>
      <p>All Premium TV Channels WorldWide FHD and 4K Sports, News, Movies, Documentary, Movie channels, and more</p>
      <strong>Live TV Channels</strong>
      </div>
      </div>
     <div className="flex flex-col items-center justify-end">
     <Image className="rounded-md wx-auto my-6" src="/movie2.jpg" alt="movie iptv" width={200} height={130}/>
     <div>
     <p>We have a big list of VOD & Movies in multiple languages English, French, German, Italian, Spanish and Arabic etc…</p>
     <strong>Movies</strong>
     </div>
     </div>
      <div className="flex flex-col items-center justify-center">
      <Image className="rounded-md wx-auto my-6 -[150px]" src="/movie1.jpg" alt="movies" width={200} height={130} />
      <div>
      <p>We have the best TV Shows of all time for you, which are updated regularly. You may also request a TV Series or TV Shows.</p>
      <strong>TV Shows</strong>
      </div>
      </div>
      
    </div>
    <div className=" text-xl">
      <div className=" text-center my-4">
      <div className="text-red-700 text-center text-6xl py-6">Overall Features</div>
      <span className="inline">Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable.</span>
      </div>
      <div className="grid md:grid-cols-2 py-4 gap-2 gap-x-4 md:px-52 sm:px-48 xl:px-72 2xl:px-80 lg:px-64 px-32">
        <div>
          <BsFillCloudDownloadFill className="mx-auto my-0" size={50} color="gold"/>
          <h2>Auto Update</h2>
          <p>our Services and channels as well as our panel are automatically update once a week.</p>
        </div>
        <div>
          <FcSalesPerformance className="mx-auto my-0" size={50} color="gold"/>
          <h2>Sales Systems</h2>
          <p>All sales steps are done automatically.From payment to service delivery.There is no human factor at this page.</p>
        </div>
        <div>
        <MdBackup className="mx-auto my-0" size={50}  color="gold"/>
        <h2>Daily Backup</h2>
        <p>All IPTV System infrastructure provided to customers are automatically backed up every 5 minutes.</p>
        </div>
        <div>
        <MdOutlineSupportAgent className="mx-auto my-0" size={50}  color="gold"/>
        <h2>Free Support</h2>
        <p>Our support is available 24 hours a day without any interruption through online chat and ticket creation.</p>
        </div>
      </div>
    </div>
    <div className="text-red-700 text-center text-6xl pb-4" id="price">Pricing</div>
    <div className=" text-center text-xl pb-2">Choose Your IPTV SUBSCRIPTION</div>
    
      <div className=" pl-4 text-center text-xl border border-black p-4 m-4 rounded-md"><span className="text-rose-400 pr-4">DISCOUNT:  </span>{days}DAYS:{hours}HOURS:{minutes}MINUTES</div>
      <div className=" flex px-8 pb-5 gap-4 flex-wrap justify-around">
      {
      packages?.map(item=>{
        return (
        
        <Product key={item._id} Price={item.Price} name={item.name} _id={item._id}/>
    
        
        )})}
    </div>
    <div>
    <div className="text-red-700 text-center text-4xl py-6" id="price">Methods</div>
    <Swiper style={{"z-index": "0"}}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
      slidesPerView={5}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
      <Image src="/paypal.png" alt="paypal" width={70} height={70}/>
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/visa.png" alt="vasa cart" width={70} height={70}/>
       
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/ideal.png" alt="ideal" width={70} height={70}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/mastercard.png" alt="mastercart" width={70} height={70}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/sofort.png" alt="sofort" width={70} height={70}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/gpay.png" alt="google pay" width={70} height={70}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/apay.png" alt="apple pay" width={70} height={70}/>
      
      </SwiperSlide>
      <SwiperSlide>
      <Image src="/giropay.png" alt="giro pay" width={70} height={70}/>
      
      </SwiperSlide>
    </Swiper>
    </div>
    <div className="grid my-12 md:grid-cols-2 gap-x-12 grid-cols-1 md:px-52 sm:px-48 xl:px-72 py-4 2xl:px-80 lg:px-64 px-32">
      <div className="flex flex-col gap-4 mb-12">
        
        <div className="text-red-700 text-4xl py-4">
          <span>OUR EXPERIENCE</span>
          <div className="w-16 bg-red-400 h-1"></div></div>
          <div>
        <p>
        The most powerful and fastest BUY IPTV servers for all modern devices and all m3u & txt & cfg & WebTV extensions for Smartphones, Smart TV, Android, MAG, Enigma, TV Box, Kodi, Computer, and Tablet…. buy best IPTV, we provide you with more than 18,500 premium & normal Live TV Channels. In Addition to, more than 89,000 VOD (Movies & TV Shows).
        </p>
        <p>
        Second, there are no extra costs, just the Subscription Fees. and more than 96.377 Customers trust us and all over the world, join us now.
        </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2"><h1 className="text-gray-800 text-xl font-bold">How to watch IPTV Service?​</h1>
<p>Watch our iptv package on all your devices, after buy iptv you can use on your TV, android box, mobile phone, mag box and tablets…</p>

        </div>
        <div className="flex flex-col gap-2"><h1 className="text-gray-800 text-xl font-bold">What is our Quality servers?​</h1>
<p>We are first the best service provider on internet, and we provide no freezing technology with 99% uptime.</p>

        </div>
        <div><h1 className="text-gray-800 text-xl font-bold">Do you have problem?​</h1>
<p>We are here to help you 24/7, feel free to contact our technical support team.</p>

        </div>
        <div className="flex flex-col gap-2"><h1 className="text-gray-700 text-xl font-bold">What is IPTV Reseller Solution?​</h1>
<p>try our Buy IPTV reseller solution and make money with us, get your own Buy IPTV reseller panel, and manage your customers easily with only some clicks!

</p>

        </div>
      </div>
    </div>
    <h1 className="text-red-700 text-center text-6xl py-12">RoadMap</h1>
    <Image className="my-0 mx-auto" alt="road map of iptv website" src={"/RoadMap.png"} width={550} height={0}/>
    <div className="grid my-12 md:grid-cols-2 gap-x-6 grid-cols-1 px-16" id="about">
      <div className="flex flex-col gap-4 mb-12">
        
        <div className="text-red-700 text-4xl py-8">
          <span>ABOUT OUR SERVICE</span>
        </div>
        <div className="text-black">
        <div className=" text-xl pb-4">UPGRADE TO RELIABLE AND ENJOY WATCHING TV</div>
          <ul>
          <li>Get +18,500 Channels & Movies</li>
          <li>Up to +89,000 Movies & TV Shows</li>
          <li>Get Unlimited Access 24/24 7/7</li>
          <li>Watch TV on all your devices!</li>
          <li>No Hardware Needed</li>
          <li>No bandwidth Limits</li>
          <li>Stable Server and Fast</li>
          <li>Wide list of worldwide Channels</li>
          </ul>
        
        </div>
      </div>
      <div className="flex justify-center m-auto gap-4">
      <Image src="/tv.jpg" className="rounded-md" alt="tv iptv" width={200} height={300}/>

        </div>
      
    </div>
    <Swiper 
    style={{"z-index": "0"}}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        >
      
        <SwiperSlide>
          <Image src="/netflix.png" alt="netflix" width={200} height={300}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/disney.png" alt="disney" width={200} height={300}/>
          
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/hbo.png" alt="hbo" width={200} height={300} />

        </SwiperSlide>
        <SwiperSlide>
        <Image src="/bein.png" alt="bien" width={200} height={300}/>
        
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/prime.png" alt="prime" width={200} height={300}/>

        </SwiperSlide>
        <SwiperSlide>
        <Image src="/Nlziet.svg" alt="nlziet" width={200} height={300} />

        </SwiperSlide>
        <SwiperSlide>
        <Image src="/appleTv.svg" alt="appleTv" width={200} height={300} />

        </SwiperSlide>
        
        
      </Swiper>
    <Footer data={packages}/>
    </div>
    
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