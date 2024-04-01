import Checkpoint from "../models/Checkpoint.js";
import Comment from "../models/Comment.js";

const getAllCheckpoint =async (req, res) => {

   try{
     const checkpoints = await Checkpoint.findAll();
     if (!checkpoints.length){
        res.status(400).send({error: "there is no checkpoints added yet ", success: false});
     }
     res.status(200).send({data: checkpointData, success: true})
  
    } catch(error){
     res.status(400).send({error: error.message, success: false});
  
    }
  }

const getCheckpointDetails = async (req, res)=>{
   const {checkpointId} = req.params;
   try{
   const checkpointData = await Checkpoint.findOne({
    where: {
        checkpoint_id: checkpointId 
    }
});
   if (!checkpointData){
      res.status(400).send({error: `ther is no checkpoint with id = ${checkpointId}`, success: false});
   }
   res.status(200).send({data: checkpointData, success: true})

  } catch(error){
   res.status(400).send({error: error.message, success: false});

  }
}

const addCheckpoint = async (req, res) => {
   const checkpointData = req.body;
   try{
      const checkpoint = await Checkpoint.create(checkpointData);
      res.status(201).send({mesaage: "checkpoint added successfully", data: checkpoint, success: true});
   }catch(error){
      res.status(500).send({error: error.message, success: false})
   } 
}

const deleteCheckpoint = async (req, res) => {
   const {checkpointId} = req.params;
   try{
      const num = await Checkpoint.destroy({
         where: {checkpoint_id: checkpointId}
      })
      if (num == 1) {
         res.status(200).send({mesaage: "checkpoint deleted successfully", success: true});
       } else {
         res.send({
           message: `Cannot delete checkpoint with id=${checkpointId}.`,  success: false
         });
       }   }catch(error){
      res.status(400).send({error: error.message, success: false})
   } 
}


export {getCheckpointDetails, addCheckpoint, deleteCheckpoint, getAllCheckpoint}