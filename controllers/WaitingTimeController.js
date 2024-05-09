import  WaitingTime  from "../models/WaitingTime.js";
import Checkpoint from "../models/Checkpoint.js";
import { Op, where } from 'sequelize';

const setWaitingTime = async (req, res) => {
    const waitingTimeData = req.body;
  //  waitingTimeData.time = new Date(new Date());
    console.log(waitingTimeData.time+"-------------")
    try{
       const waitingTime = await WaitingTime.create(waitingTimeData);
       res.status(201).send({mesaage: "added successfully", data: waitingTime, success: true});
       // calculate avarage waiting time for this checkpoint.
       calculateAvarageWaitingTime(waitingTimeData.CheckpointCheckpointId);
    }catch(error){
       res.status(500).send({error: error.message, success: false})
    } 
}

const calculateAvarageWaitingTime = async (CheckpointCheckpointId) =>{
   try {
      const fifteenMinutesAgo = new Date(new Date() - 15 * 60 * 1000); // Calculate 15 minutes ago.
      console.log(fifteenMinutesAgo+"..........................");
      // Query the database for items created within the last 15 minutes.
      const recentItems = await WaitingTime.findAll({
        where: {
          updatedAt: {
            [Op.gt]: fifteenMinutesAgo
          },
          CheckpointCheckpointId: CheckpointCheckpointId
        }
      });

      recentItems.forEach(item => {
        console.log(item.toJSON()); 
      });

      // calculate sumation avarage time.
      let sum = 0;
      for (let i = 0; i < recentItems.length; i++) {
        sum += recentItems[i].toJSON().duration_time;
       // console.log(sum); 

      }
  
      // Calculate the average.
      const average = sum / recentItems.length;
      console.log(average); 

      // set avarage time.
      setAvarageTime(CheckpointCheckpointId, average);
    } catch (error) {
      console.error(error);
     // res.status(500).json({ message: 'Server error' });
    }
};

const setAvarageTime = async (CheckpointCheckpointId, average) => {
   try{
   const checkpoint = await Checkpoint.findOne({
    where: {
      checkpoint_id: CheckpointCheckpointId,
    }
   });
   if(checkpoint){
    console.log(checkpoint.checkpoint_id+"=====");

      checkpoint.average_time = average;
      await checkpoint.save(); // Save the changes to the database.
   }
  }catch(error){
   return error;
  }
}




 export {setWaitingTime}