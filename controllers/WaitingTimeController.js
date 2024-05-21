import  WaitingTime  from "../models/WaitingTime.js";
import Checkpoint from "../models/Checkpoint.js";
import LookupTable from "../models/lookupTable.js";
import { Op, where } from 'sequelize';

const setWaitingTime = async (req, res) => {
    const data = req.body;
  //  waitingTimeData.time = new Date(new Date());
    const x_sign = data.x_sign;
    const y_sign = data.y_sign;
    const checkpoint_id = data.checkpoint_id;

    console.log(x_sign, y_sign, checkpoint_id);

  // return the direction from lookup table.
    const direction = await findDirection(x_sign, y_sign, checkpoint_id);
    console.log(direction);

    const waitingTimeData = {};
    waitingTimeData.checkpoint_id = data.checkpoint_id;
    waitingTimeData.user_id = data.user_id;
    waitingTimeData.direction = direction;
    waitingTimeData.duration_time = data.duration_time;
    try{
       const waitingTime = await WaitingTime.create(waitingTimeData);
       res.status(201).send({mesaage: "added successfully", data: waitingTime, success: true});
       // calculate avarage waiting time for this checkpoint.
       calculateAvarageWaitingTime(waitingTimeData.checkpoint_id, direction);
    }catch(error){
       res.status(500).send({error: error.message, success: false})
    } 
}

const findDirection = async (x_sign, y_sign, checkpoint_id) =>{
  try{
    const data = await LookupTable.findOne({
      where: {
        x_sign: x_sign,
        y_sign: y_sign,
        checkpoint_id: checkpoint_id
      }
    });
    console.log(data.direction)
    return data.direction;

  }catch(error){
    return error;
  }
}

const calculateAvarageWaitingTime = async (checkpoint_id, direction) =>{
   try {
      const fifteenMinutesAgo = new Date(new Date() - 15 * 60 * 1000); // Calculate 15 minutes ago.
      console.log(fifteenMinutesAgo+"..........................");
      // Query the database for items created within the last 15 minutes.
      const recentItems = await WaitingTime.findAll({
        where: {
          updatedAt: {
            [Op.gt]: fifteenMinutesAgo
          },
          checkpoint_id: checkpoint_id, 
          direction: direction
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
      setAvarageTime(checkpoint_id, average, direction);
    } catch (error) {
      console.error(error);
     // res.status(500).json({ message: 'Server error' });
    }
};

const setAvarageTime = async (checkpoint_id, average, direction) => {
   
  
  try{
   const checkpoint = await Checkpoint.findOne({
    where: {
      checkpoint_id: checkpoint_id,
    }
   });
   if(checkpoint){
    console.log(checkpoint.checkpoint_id+"=====");

      if(direction == "in"){
        checkpoint.average_time_in = average;
        await checkpoint.save(); // Save the changes to the database.
      }else if(direction == "out"){
        checkpoint.average_time_out = average;
        await checkpoint.save(); // Save the changes to the database.
      }
   }
  }catch(error){
   return error;
  }
}




 export {setWaitingTime}