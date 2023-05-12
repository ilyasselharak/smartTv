import { initMongoose } from '@/lib/mongoose';
import Order from '@/modules/Order';
import { Client, Webhook } from 'coinbase-commerce-node';

Client.init(process.env.COINBASE_API_KEY);

export default async function coinVerifyRoute(req, res) {

    try {

        const rawBody = JSON.stringify(req.body)
        const signature = String(req.headers['x-cc-webhook-signature']);
        const webhookSecret = String(process.env.COINBASE_SECRET_KEY);
        const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);

        console.log(event)

        if (event.type === 'charge:pending') {
            // TODO
            // user paid, but transaction not confirm on blockchain 
            console.log("pending")
        }

        if (event.type === 'charge:confirmed') {
            // TODO
            // all good, charge confirmed
            await initMongoose();
            
            const order = await Order.create({
                products: ["ilyass"],
                name: "",
                email: "",
                address: "",
                city: "",
                phone: "",
                method: "Crypto",
                paid: 1,
              });
              order.save();
        }

        if (event.type === 'charge:failed') {
            // TODO
            // charge failed or expired
            console.log("failed")
        }

    } catch (e) {
        res.status(500).send("error"); 
    }

    return res.redirect(307, '/') 

};