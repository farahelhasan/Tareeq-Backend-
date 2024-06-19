import LookupTable from "../models/lookupTable.js";
import Checkpoint from "../models/Checkpoint.js";
const instertIntoLookuptable = async (req, res) => {
    const data = req.body;
    try{
       const checkpoint = await LookupTable.create(data);
       setCompleteFlage(checkpoint.checkpoint_id);
       res.status(201).send({mesaage: "successfully", data: checkpoint, success: true});
    }catch(error){
       res.status(500).send({error: error.message, success: false})
    } 
 }

 
const setCompleteFlage = async (checkpoint_id) => {
   try{
    const checkpoint = await Checkpoint.findOne({
     where: {
       checkpoint_id: checkpoint_id,
     }
    });
    if(checkpoint){
     console.log(checkpoint.checkpoint_id+"=====");
         checkpoint.complete_flag = 1;
         await checkpoint.save(); // Save the changes to the database.
    }
   }catch(error){
    return error;
   }
 }
 export{instertIntoLookuptable}