import { Client, resources } from 'coinbase-commerce-node';

Client.init(process.env.COINBASE_API_KEY);
const { Charge } = resources;

const coinInitRoute = async(req, res) => {
    const { price, name,id } = req.body;
  try {
    const chargeData = {
      name: name,
      description: "description",
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
    res.status(500).send({error:e});
  }

}

export default coinInitRoute