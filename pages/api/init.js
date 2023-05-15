import { Client, resources } from 'coinbase-commerce-node';

Client.init(process.env.NEXT_PUBLIC_COINBASE_API_KEY);
const { Charge } = resources;

const coinInitRoute = async(req, res) => {
    const { price, name,id } = req.body;
  try {
    const chargeData = {
      name: name,
      description: "tv-smart provide you best iptv",
      pricing_type: "fixed_price",
      local_price: {
        amount: price,
        currency: "EUR",
      },
      metadata: {
        id: id,
        userID: 1
      },
    };
  
    const charge = await Charge.create(chargeData);

    res.send(charge);
  
  } catch (e) {
    console.log(e.response.data)
  }

}

export default coinInitRoute