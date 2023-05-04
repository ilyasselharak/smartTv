

import {AiOutlineClose} from "react-icons/ai"

const Pay = ({setPay,pay}) => {
  
  
        return (
            <><div className="relative p-9 w-full">
        <div className="absolute right-2 top-2" ><AiOutlineClose className="hover:text-red-700" onClick={()=>{setPay(!pay)}}/></div>
            <div className="text-4xl border-b border-1 w-full border-gray-400 pb-5 mb-5">
                <h1>Refund Policy</h1>

            </div>
            <div className="leading-10">
                <p>First of all , this is a contract signed with our payment gateway partners to protect you / us and we take the responsibility of the application of this contract .</p>
                <p className="font-bold">By purchasing our products you are accepting automatically our Refund Policy bellow .</p>
                <p>The provision of services and the creation of a new account incur costs for Bobres. Therefore, before paying, be absolutely sure that you want the service, otherwise we cannot cancel or change the service after the activation</p>
                <p>We take the responsibility of the activation of the service , You will get a full refund if you paid for a service and we were unable to activate it , or in case of any other problem with the services from our side. Then you can request a full refund and we will process it within 2-4 days.</p>
                <p>In case of any problem from the client side ( device problems , internet problems, bad using of the services … ) or in case you don't want to continue using our services for any reason, you don't have the right to get the full refund , and you only have the right to request the parcial refund.</p>
                <p>Parcial refund :</p>
                <ul className="list-disc pl-6">
                    <li>25% * ( total paid - using period and the transaction fees )</li>
                </ul>
                <p>We don't process parcial refund for the 24hours trial test Package (it's already a test, just to try the service).</p>
                <p>NOTE : If there is a problem with our services , you have to contact us first by Email  or WhatsApp, and our agents will tell you the source of the problems and they will try to solve it if they can .</p>
            </div>
            </div>
            </>
        )
};

export default Pay;