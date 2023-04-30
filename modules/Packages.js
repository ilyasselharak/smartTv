import { Schema, model, models } from "mongoose"

const PackageSchema = new Schema({
    name:String,
    Price: Number,
})
const Package= models?.Package || model('Package',PackageSchema)
export default Package