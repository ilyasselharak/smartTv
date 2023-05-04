import { useContext } from 'react'
import { PackagesContext } from './PackagesContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const Product = ({name,Price,_id}) => {
  const CustomToastWithLink = () => (
    <div>
      <Link href="/checkout" className='hover:text-black hover:border-b border-red-600'>{name} added to Cart</Link>
    </div>
  );
    const {setSelectedPackages} = useContext(PackagesContext);
    function addPackage(){
        setSelectedPackages(prev=>[...prev,_id]);
        
      toast.success(CustomToastWithLink, {
        position: toast.POSITION.TOP_RIGHT
    })
    }
    
  return (
    <div>
        <div key={_id} className="bg-red-800 text-white shadow-shad text-center rounded-lg py-2 pb-4">
        <div className=" border-b-2 py-1 border-red-200 bg-darkCyan"><h1 className='text-2xl'>{name}</h1>
        <p>Sports, News, Series, Movies, Cartons</p>
        </div>
        
        <h1 className='py-2 border-b border-gray-500 w-[80%] m-auto text-xl'><span className='text-black'><del>{(Price+(Price)*0.2).toFixed(2)} €</del></span> {Price} €</h1>
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
        <button onClick={addPackage} className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white p-2 rounded-md hover:shadow-indigo-500/40">Add to Cart</button>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Product