import { initMongoose } from "@/lib/mongoose";
import Order from "@/modules/Order";


export default async function handle(req, res) {

  await initMongoose();
  if (req.method !== "POST") {
    res.json("should a post but its not");
    return;
  }
  const { email, name, price, phone,packages } = req.body;
  const order = await Order.create({
    packages: packages,
    name: name,
    price: price,
    email: email,
    phone: phone,
    method: "paypal",
    paid: 1,
  });
  order.save();
  return res.redirect(302, '/success')
}
