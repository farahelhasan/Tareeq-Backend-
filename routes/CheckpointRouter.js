import express from 'express';
import { getAllCheckpoint, getCheckpointDetails, addCheckpoint, deleteCheckpoint } from '../controllers/CheckpointController.js';

const checkpointRouter = express.Router();


// Show the details of checkpoint with comments.
checkpointRouter.route('/:checkpointId').get(getCheckpointDetails);
// Add new checkpoint. 
checkpointRouter.route('/add').post(addCheckpoint);
// Show a list of all checkpoint.
checkpointRouter.route('/list').get(getAllCheckpoint);
// Delete checkpoint.
checkpointRouter.route('/delete/:checkpointId').delete(deleteCheckpoint);



export default checkpointRouter;