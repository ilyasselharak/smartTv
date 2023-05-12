import Image from "next/image";
import { PackagesContext } from "./PackagesContext";
import { useContext } from "react";

// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Footer = (data) => {
  
  const { setSelectedPackages } = useContext(PackagesContext);
    const notify = (name) => toast(`🦄 ${name} added to Card!`,{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    });


  return (
    <div className="bg-black w-full h-vh bg-black border-t border-gray-500">
      <div className=" grid px-8 py-4 gap-3 gap-y-8 xl:grid-cols-4 sm:grid-cols-2 items-center  justify-around text-white">
        <div className="text-center flex flex-col gap-1">
          <Image
            className="m-auto text-center "
            src="/logo.png"
            alt="iptv"
            width={120}
            height={70}
          />
          <span>https://www.tv-smart.store/</span>
          
          {/* <h1 className="">Follow us in </h1>
          <div className="flex justify-center gap-4">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
          </div> */}
        </div>
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-2xl pb-2 text-red-600">LINKS</h1>
          <p className="h-12">
            <Link href={"/#price"}>Pricing</Link>
          </p>
          <p className="h-12">
            <Link href={"/#about"}>ABOUT</Link>
          </p>
          <p className="h-12">
            <Link href={"/contactus"}>CONTACTUS</Link>
          </p>
          <p className="h-12">
            <Link href={"/"}>BUSINESS</Link>
          </p>
          <p className="h-12">
            <Link href={"/checkout"}>CART</Link>
          </p>
        </div>

        <div className="text-center flex flex-col gap-1">
          <h1 className="text-2xl pb-2 text-red-600">Packages</h1>
          {data.data?.map((item) => {
            return (
              <div key={item._id}>
                <button
                  className="h-12"
                  onClick={() => {
                    setSelectedPackages((prev) => [...prev, item._id]);
                    notify(item.name)
                  }}
                >
                  {item.name}
                </button>
                
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h1 className="text-red-600 pb-2 text-2xl">Contact US</h1>
          <p className="text-left text-red-300 pb-3">Email : </p>
          <p className="pb-3">support@tv-smart.store</p>
          <p className="text-left text-red-300 pb-3">Whatsapp : </p>
          <p>Netherlands: +31610049923</p>
          <p>Ukraine: +380683753818</p>
          <p>Morocco: +212643528283</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
