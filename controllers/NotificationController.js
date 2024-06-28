import { getMessaging } from "firebase-admin/messaging"
import User from "../models/User.js";
const sendNotification = async (req, res) => {
    const receivedToken = req.body.token;
    const userNmae = req.body.name;
    const comment = req.body.replay_description
    //"cWmSUDwoSKi1MuMGCn3qpA:APA91bFIkmam5I8cHbN2KGMMlEYnOeeF4VEfPOxV-sEdKL1ABd8jq3kzpGA72r4G0vsYCWiV7p845557_2V_zLYskDcXvI14yZAusZRB-5rMm0S4oTikcdc2E5rItPsc_QchNNpPmz3U"
    
    //req.body.fcmToken;
    const notificationBody = "علق" +userNmae+ ": "+ comment;
    console.log(notificationBody);
    const mesaage = {
        notification: {
            title: "طريق",
            body: notificationBody
        },
        token:receivedToken
    };
    getMessaging()
    .send(mesaage)
    .then((responce) => {
        res.status(201).json({
            message: "Successfuly sent message",
            token: receivedToken
        });
        console.log("Succesfuly sent message", responce);
    })
    .catch((error) => {
        res.status(400);
        res.send(error);
        console.log("Error sending message", error);
    });
};

const saveToken = async (req, res) => {
    const { user_id, token } = req.body;
    try{
        const user = await User.findOne({
         where: {
           user_id: user_id,
         }
        });
       
        user.fcmToken = token;
        await user.save(); // Save the changes to the database.
        res.status(201).json({
            message: "save token succesfull",
            
        });
       }catch(error){
        return error;
       }
  };
  
  const getToken = async (req, res)=>{
    const {userId} = req.params;
    try{
    const userData = await User.findOne({
     where: {
         user_id: userId 
     }
    });
    if (!userData){
       return res.status(400).send({error: "error", success: false});
    }
    console.log(userData);
    return res.status(200).send({token: userData.fcmToken, success: true})
 
   } catch(error){
    console.log(error);
   return  res.status(400).send({error: error.message, success: false});
 
   }
 }

 const sendFavoriteNotification = async (req, res) => {
    const receivedToken = req.body.token;
    const userNmae = req.body.name;
    const comment = req.body.replay_description
    const checkpointName = req.body.checkpoint_name;
    //"cWmSUDwoSKi1MuMGCn3qpA:APA91bFIkmam5I8cHbN2KGMMlEYnOeeF4VEfPOxV-sEdKL1ABd8jq3kzpGA72r4G0vsYCWiV7p845557_2V_zLYskDcXvI14yZAusZRB-5rMm0S4oTikcdc2E5rItPsc_QchNNpPmz3U"
    
    req.body.fcmToken;
    const notificationBody = userNmae+" : "+ comment;
    console.log(notificationBody);
    const mesaage = {
        notification: {
            title: " آخر تحديث على "+checkpointName,
            body: notificationBody
        },
        token:receivedToken
    };
    // const notificationBody = " علق" +userNmae+ ": "+ comment;
    // console.log(notificationBody);
    // const mesaage = {
    //     notification: {
    //         title: "طريق",
    //         body: notificationBody
    //     },
    //     token:receivedToken
    // };
    getMessaging()
    .send(mesaage)
    .then((responce) => {
        res.status(201).json({
            message: "Successfuly sent message",
            token: receivedToken
        });
        console.log("Succesfuly sent message", responce);
    })
    .catch((error) => {
        res.status(400);
        res.send(error);
        console.log("Error sending message", error);
    });
};


export {sendNotification, saveToken, getToken, sendFavoriteNotification};
