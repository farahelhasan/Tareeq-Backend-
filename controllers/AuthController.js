import IsEmail from "isemail";
import  User  from "../models/User.js";

const signup = async (req, res)=>{
   const userData = req.body;
   console.log(userData);
   //const {name, username, email, password, profile_picture_url, status, x_position, y_position} = userData;
    try{
     
   // Check if the email is valid
    if (!IsEmail.validate(userData.email)) {
      return res.status(500).send({ error: 'Invalid email', success: false});
    }

     // Check if the user already exists in the database
     const user = await User.findOne({ where: { email : userData.email } });
     if (user) {
       return res.status(500).send({ error: 'User email already exists' ,success: false});
     }

    // Check if the password is valid
    if (userData.password.length < 8) {
      return res.status(500).send({ error: 'Password must be at least 6 characters long', success: false});
    }


    //Create new user
    console.log(userData);
    const newUser = await User.create(userData);
    return res.status(201).send({mesaage: "user created successfully", success: true, data: newUser});

    }catch(error){
      return res.status(500).send( {error: error.message, success: false});
    }

}

const login = async (req, res)=>{
   const userData = req.body;
   try{
    console.log(userData);
  // const {email, password} = userData;
   const user = await User.findOne(
    { 
      //attributes: ["email", "password", "name"],
      where: { email: userData.email } });
   //Check the email 
   if (!user) {
     return res.status(400).send({ error: 'User email not exists' ,success: false});
    }

   //Check the password
   else if(userData.password !== user.password){
    console.log("helll 1")

    //console.log(password  , userData.password)
    return res.status(401).send({ error: 'User password wrong!' ,success: false});

   }
   console.log("helll2")

   return res.status(200).send({ message: 'welcome '+user.name , data: user, success: true});
  } catch(error) {
    console.log(error)

    return res.status(404).send({ error: error.mesaage ,success: false});
  }
}
export {signup, login};