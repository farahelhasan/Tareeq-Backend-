import IsEmail from "isemail";
import  User  from "../models/User.js";

const singup = async (userData)=>{
   const {name, username, email, password, profile_picture_url, status, x_position, y_position} = userData;
    try{
     
   // Check if the email is valid
    if (!IsEmail.validate(email)) {
      return { error: 'Invalid email', success: false};
    }

    // Check if the password is valid
    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters long', success: false};
    }

    // Check if the user already exists in the database
    const user = await User.findOne({ where: { email } });
    if (user) {
      return { error: 'User email already exists' ,success: false};
    }

    //Create new user
    const newUser = await User.create({
    name, username, email, password, profile_picture_url, status, x_position, y_position
    });

    return {mesaage: "user created successfully", success: true}


    }catch(error){
      return {error: error.message, success: false}

    }

}

const login = async (userData)=>{
   const {email, password} = userData;
   const user = await User.findOne({ where: { email } });
   //Check the email 
   if (!user) {
      return { error: 'User email not exists' ,success: false};
    }
   //Check the password
   if(password != user.password){
    //console.log(password  , userData.password)
    return { error: 'User password wrong!' ,success: false};
   }
   console.log(password  , user.password)

   return { message: 'welcome '+user.name ,success: true};


}

export {singup, login};