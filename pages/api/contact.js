import { initMongoose } from "@/lib/mongoose";
import Contact from "@/modules/Contact";

export default async function handle(req,res){
    await initMongoose();
    if(req.method !== 'POST'){
        res.json('should a post but its not');
        return;
    }
    const {email,name,message} = req.body;
    const contact = await Contact.create({
        name:name,
        email:email,
        message:message,
        
      });
    contact.save()
    return res.redirect(307, '/')
}
