import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  price: Number,
});

const Sale = models?.Sale || model("Sale", OrderSchema);

export default Sale;