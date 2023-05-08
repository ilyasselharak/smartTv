import { initMongoose } from "@/lib/mongoose";
import Order from "@/modules/Order";
import Package from "@/modules/Packages";

export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        res.redirect("https://www.tv-smart.store/")

        return;
    }
    const {email,name,address,city,phone} = req.body;
    const order = await Order.create({
        products:['ilyass'],
        name:name,
        email:email,
        address:address,
        city:city,
        phone:phone,
        method:"paypal",
        paid:1,
      });
    order.save(function(err,result){
        alert("you bought package")
        
    })
    res.redirect("https://www.tv-smart.store/")
}
