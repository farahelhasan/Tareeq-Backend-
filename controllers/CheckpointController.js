import Checkpoint from "../models/Checkpoint.js";

const checkpointDetails = async (id)=>{
   const checkpointData = await Checkpoint.findOne({
    where: {
        checkpoint_id: id 
    }
});
   if (!checkpointData){
    return {error: "something wrong..", success: false};
   }
   console.log(checkpointData)
   return {data: checkpointData, success: true}
}

export {checkpointDetails}