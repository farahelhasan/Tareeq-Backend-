import express from 'express';
import { checkpointDetails } from '../controllers/CheckpointController.js';

const checkpointRouter = express.Router();

checkpointRouter.route('/:id').get(async (req,res)=>{
    const {id} = req.params;
    const response = await checkpointDetails(id);
    
    if(response.success){
        res.status(200).send(response)
    }else{
        res.status(400).send(response)
    }
})

export default checkpointRouter;