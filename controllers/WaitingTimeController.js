import  WaitingTime  from "../models/WaitingTime.js";

const setWaitingTime = async (req, res) => {
    const waitingTimeData = req.body;
    try{
       const waitingTime = await WaitingTime.create(waitingTimeData);
       res.status(201).send({mesaage: "added successfully", data: waitingTimeData, success: true});
    }catch(error){
       res.status(500).send({error: error.message, success: false})
    } 
}



 export {setWaitingTime}