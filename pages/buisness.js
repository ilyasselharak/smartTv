import Header from "@/components/Header";
import Sale from "@/components/Sale";
import Head from "next/head";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { findAllSales } from "./api/sales";
import { initMongoose } from "@/lib/mongoose";

export default function buisness({sale}) {
  
  return (
    <>
      <Head></Head>
      <Header />
      <div className="mt-48 "></div>
      <h1 className="text-4xl text-center bg-gray-400 py-12 font-bold">
        BUY IPTV RESELLER SERVICE
      </h1>
      <div className="grid grid-cols-1 h-fit sm:grid-cols-2 mt-12">
        <div className="h-inherit m-auto">
          <Image
            className="rounded-lg"
            src={"/buisness.jpg"}
            width={550}
            height={0}
            alt="contract"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold">Best Reseller Panel Provider</h2>
            <p className="mt-3 sm:w-[80%]">
              You can go into the universe of IPTV business by buying a merchant
              board. In the committed SHACKIPTV control panel, you will have
              various capacities. Some vendor board capacities: Select
              Classifications, Simple Purchase Credit, Alter Line, You can make
              Unlimited test lines each day.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">HOW IT WORK?</h2>
            <p className="mt-3 sm:w-[80%]">
              When you choose your package, you will get a control panel with
              the package you buy IPTV Reseller and you can create your
              customer’s accounts and manages these account at any time.
            </p>
          </div>
          <div>
            <ul className="flex gap-2 flex-col">
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> Unlimited Free Test Account Per Day.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 0 Credit for 2H Test Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 1 Credit for 24H Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 15 Credit for 1 Month Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 30 Credit for 3 Months Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 45 Credit for 6 Months Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 70 Credit for 1 Year Account.</li>
              <li className="flex flex-row gap-1 gap-2 items-center"><AiFillCheckCircle/> 120 Credit for 2 Year Account.</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
      <h1 className="text-4xl text-center bg-gray-400 py-12 font-bold my-7">Pricing</h1>
        <Swiper
          style={{ "zIndex": "0", "padding":"0 12px"}}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper h-fit"
          navigation={true}
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Autoplay,Pagination, Navigation]}
        >
          {sale?.map((item) => {
            return (
              
              <SwiperSlide key={item._id}>
                <Sale
                  className="w-[50%]"
                  key={item._id}
                  Price={item.price}
                  name={item.name}
                  _id={item._id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mt-48 "></div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  await initMongoose();
  const sales = await findAllSales();
  return {
    props: {
      sale: JSON.parse(JSON.stringify(sales)),
    },
  };
}
