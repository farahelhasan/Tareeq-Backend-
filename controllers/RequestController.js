import { Op } from 'sequelize';
import Request from "../models/Request.js";
import Checkpoint from '../models/Checkpoint.js';
var x;
var y;

const checkAddRequest = async (checkpoint) => {
    const { x_position, y_position } = checkpoint; 

    try {
      // Query the database for requset within a certain radius of the provided coordinates
      const sameRequest = await Request.findOne({
        where: {
            x_position: {
              [Op.between]: [ x_position - 0.0001,  x_position + 0.0001] // Assuming 20 meters ≈ 0.0001 degrees
            },
            y_position: {
              [Op.between]: [ y_position - 0.0001,  y_position + 0.0001]
            }
          }
      });

     if(sameRequest != null){
        x = sameRequest.x_position;
        y = sameRequest.y_position;
        deleteRequest(sameRequest.request_id);
        return true;
     }
     else{
      console.log("inside elseeeeeeeeee")
        return false;
     }
    } catch (error) {
      console.error(error);
      return error;
     // res.status(500).json({ message: 'Server error' });
    }
}

const checkDeleteRequest = async (checkpoint) => {
  try{
    const sameRequest = await Request.findOne({
       where:
        {name: checkpoint.name}
    })
    if(sameRequest != null){
      deleteRequest(sameRequest.request_id);
      return true;
   }
   else{
      return false;
   }
  } catch (error) {
    console.error(error);
    return error;
   // res.status(500).json({ message: 'Server error' });
  }
}
const addCheckpointRequest= async (req, res) => {
    const checkpointData = req.body;

    // check if the same request already exiest.
    var requestExist = await checkAddRequest(checkpointData);
    if(requestExist){
      addCheckpointtoCheckpointTable(checkpointData);
      res.status(201).send({mesaage: "Request added successfully", success: true});

    }else{
       console.log("hh")
        checkpointData.type = "add";
        try{
            const checkpoint = await Request.create(checkpointData);
            res.status(201).send({mesaage: "Request added successfully", data: checkpoint, success: true});
        }catch(error){
            res.status(500).send({error: error.message, success: false})
        } 
   }
 }
 
 const deleteCheckpointRequest= async (req, res) => {
    const checkpointData = req.body;

    // check if the same request already exiest.
    var requestExist = await checkDeleteRequest(checkpointData);
    if(requestExist){
      deleteCheckpointFromCheckpointTable(checkpointData);
      res.status(201).send({mesaage: "Request added successfully", success: true});

    }else {
        checkpointData.type = "delete";
        try{
        const checkpoint = await Request.create(checkpointData);
        res.status(201).send({mesaage: "Request added successfully", data: checkpoint, success: true});
        }catch(error){
        res.status(500).send({error: error.message, success: false})
        } 
    }
 
  }


 const addCheckpointtoCheckpointTable = async (checkpointData) => {
  checkpointData.x_position = (checkpointData.x_position + x) /2;
  checkpointData.y_position = (checkpointData.y_position + y) /2;
  checkpointData.comlete_flag = false;
  try{
     const checkpoint = await Checkpoint.create(checkpointData);
  }catch(error){
    return error;
  } 
}

const deleteCheckpointFromCheckpointTable = async (checkpoint) => {
  try{
    const num = await Checkpoint.destroy({
       where: {
        name: checkpoint.name
      }
    })
   
  }catch(error){
    return error;
   // res.status(404).send({error: error.message, success: false})
 } 


}

const deleteRequest = async (id) => {
  try{
    const num = await Request.destroy({
       where: {request_id: id}
    })
   
  }catch(error){
    return error;
   // res.status(404).send({error: error.message, success: false})
 } 

}

 export {addCheckpointRequest, deleteCheckpointRequest}