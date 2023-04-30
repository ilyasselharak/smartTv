import { initMongoose } from "@/lib/mongoose";
import Package from "@/modules/Packages";

export async function findAllPackages(){
    return Package.find().exec()
}
export default async function handle(req,res){
    await initMongoose();

    const {ids} = req.query;
  if (ids) {
    const idsArray = ids.split(',');
    res.json(
      await Package.find({
        '_id':{$in:idsArray}
      }).exec()
    );
    }else{
        res.json(await findAllPackages())
    }
    
}