import { useContext } from "react";
import { PackagesContext } from "./PackagesContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Product = ({ name, Price, _id }) => {
  const CustomToastWithLink = () => (
    <div>
      <Link
        href="/checkout"
        className="hover:text-black hover:border-b border-red-600"
      >
        {name} added to Cart
      </Link>
    </div>
  );
  const { setSelectedPackages } = useContext(PackagesContext);

  const addPackage = () => {
    setSelectedPackages((prev) => [...prev, _id]);
    
    
  };

  return (
    <div className="w-[261px] sm:w-[300px]">
      <div
        key={_id}
        className="bg-red-800 text-white shadow-shad text-center rounded-lg py-2 pb-4 "
      >
        <div className=" border-b-2 p-2 text-black border-red-200 bg-darkCyan">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className=" font-bold mt-3">Sports, News, Series, Movies, Cartons</p>
        </div>

        <h1 className="py-2 border-b border-gray-500 w-[80%] m-auto text-xl">
          <span className="text-black font-medium">
            <del>{(Price + Price * 0.2).toFixed(2)} €</del>
          </span>{" "}
          {Price} €
        </h1>
        <div className="py-4 text-l flex flex-col gap-4 pb-6">
          <p>instant Activation!</p>
          <p>18900 Live Channels</p>
          <p>1 Month IPTV 24/7</p>
          <p>All Country Channels</p>
          <p>100 Gbps streaming speed</p>
          <p>Movies & TV Show included</p>
          <p>24/7 Technical Support</p>
          <p>Quality SD/HD/FHD/4K</p>
          <p>100% Stable Server</p>
          <p>Fast Delivery</p>
        </div>
        <Link href={"/checkout"}
          onClick={addPackage}
          className="bg-cyan-500 w-[150px] tracking-[.4em] shadow-lg font-medium shadow-cyan-500/50 text-white p-2 rounded-md hover:text-xl hover:shadow-indigo-500/40"
        >
          Check
        </Link>
      </div>
    </div>
  );
};

export default Product;
