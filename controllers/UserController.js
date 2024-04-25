import User from "../models/User.js";
const getUser = async (req, res)=>{
    const {userId} = req.params;
    try{
    const userData = await User.findOne({
     where: {
         user_id: userId 
     }
    });
    if (!userData){
       return res.status(400).send({error: `ther is no user with id = ${userId}`, success: false});
    }
    return res.status(200).send({data: userData, success: true})
 
   } catch(error){
   return  res.status(400).send({error: error.message, success: false});
 
   }
 }
 export {getUser}
