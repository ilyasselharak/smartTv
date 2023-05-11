import { initMongoose } from "@/lib/mongoose";
import Order from "@/modules/Order";
import { useRouter } from "next/router";

export default async function handle(req, res) {
  const router = useRouter();
  await initMongoose();
  if (req.method !== "POST") {
    res.json("should a post but its not");
    return;
  }
  const { email, name, address, city, phone } = req.body;
  const order = await Order.create({
    products: ["ilyass"],
    name: name,
    email: email,
    address: address,
    city: city,
    phone: phone,
    method: "paypal",
    paid: 1,
  });
  order.save();
  router.push("/success");
}
