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

 const editUser = async (req, res) => {
    const {userId} = req.params;
    const userData = req.body;
    try{
       const num = await User.update(userData, {
          where: {user_id: userId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "user information edited successfully", success: true});
      } else {
        res.send({
          message: `Cannot edit user info with id=${userData}.`
        });
      }    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}
 export {getUser, editUser}
