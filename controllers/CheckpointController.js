import Checkpoint from "../models/Checkpoint.js";
import Favorite from "../models/Favorite.js";

const getAllCheckpoint =async (req, res) => {

   try{
     const checkpoints = await Checkpoint.findAll();
     if (!checkpoints.length){
        res.status(400).send({error: "there is no checkpoints added yet ", success: false});
     }
     res.status(200).send({data: checkpoints, success: true})
  
    } catch(error){
     res.status(404).send({error: error.message, success: false});
  
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
   console.log(checkpointData)
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
         res.status(400).send({
           message: `Cannot delete checkpoint with id=${checkpointId}.`,  success: false
         });
       }   }catch(error){
      res.status(404).send({error: error.message, success: false})
   } 
}

const searchByCheckpointName = async (req, res)=>{
   const {checkpointName} = req.params;
   try{
   const checkpointData = await Checkpoint.findOne({
    where: {
        name: checkpointName 
    }
});
   if (!checkpointData){
    return  res.status(400).send({error: `ther is no checkpoint with name = ${checkpointName}`, success: false});
   }
   return res.status(200).send({data: checkpointData, success: true})

  } catch(error){
   return res.status(400).send({error: error.message, success: false});

  }
}

const setFavorite = async (req, res) => {
   const data = req.body;
   try{
      const favoriteCheckpoint = await Favorite.create(data);
      return res.status(201).send({mesaage: "checkpoint favorite added successfully", data: favoriteCheckpoint, success: true});

   }catch(error){
      return res.status(500).send({error: error.message, success: false})
   }
}

const getFavorite = async (req, res) => {
   const {userId} = req.params;
   try{
      const favoriteList = await Favorite.findAll({
         attribute: ['CheckpointCheckpointId'],
         where:{
            UserUserId: userId, 
         }
      });
      const checkpointsData = await Promise.all(favoriteList.map(async (favorite)=> {
         const checkpointId = favorite.CheckpointCheckpointId;

         const checkpointData = await Checkpoint.findByPk(checkpointId);
         return checkpointData;
      }))

      if (!checkpointsData.length){
         return res.status(400).send({error: `ther is no favorite checkpoint for user with id = ${userId}`, success: false});
      }
     return res.status(200).send({data: checkpointsData, success: true})

   }catch(error){
      return res.status(400).send({error: error.message, success: false});
   }

}

const deleteFavorite = async (req, res)=>{
   const {checkpointId} = req.params;
   const {userId} = req.params;
   try{
      const num = await Favorite.destroy({
         where: {
            CheckpointCheckpointId: checkpointId,
            UserUserId: userId
         }
      })
      if (num == 1) {
        return res.status(200).send({mesaage: "remove checkpoint from favorite", success: true});
       } else {
        return res.status(400).send({
           message: `Cannot delete checkpoint with id=${checkpointId}.`,  success: false
         });
       }   }catch(error){
     return res.status(404).send({error: error.message, success: false})
   } 

}

const editCheckpoint = async (req, res) => {
   const {checkpointId} = req.params;
   const checkpointData = req.body;
   try{
      const num = await Checkpoint.update(checkpointData, {
         where: {checkpoint_id: checkpointId}
      })
      if (num == 1) {
       res.status(200).send({mesaage: "checkpoint information edited successfully", success: true});
     } else {
       res.send({
         message: `Cannot edit checkpoint info with id=${checkpointId}.`
       });
     }    }catch(error){
      res.status(400).send({error: error.message, success: false})
   } 
}

const checkFavorite = async (req, res)=>{
   const {userId, checkpointId} = req.params;
   try{
   const checkpointData = await Favorite.findOne({
    where: {
        UserUserId: userId,
        CheckpointCheckpointId: checkpointId
    }
});
   if (!checkpointData){
     return res.status(400).send({message: `not favorite`, success: false});
   }
   return res.status(200).send({data: checkpointData, success: true})

  } catch(error){
   return res.status(400).send({error: error.message, success: false});

  }
}


export {getCheckpointDetails, addCheckpoint, deleteCheckpoint, getAllCheckpoint, searchByCheckpointName, setFavorite, getFavorite, deleteFavorite, editCheckpoint, checkFavorite}