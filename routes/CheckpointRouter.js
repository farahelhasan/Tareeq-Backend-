import express from 'express';
import { getAllCheckpoint, getCheckpointDetails, addCheckpoint, deleteCheckpoint, searchByCheckpointName } from '../controllers/CheckpointController.js';

const checkpointRouter = express.Router();


// Show the details of checkpoint.
checkpointRouter.route('/details/:checkpointId').get(getCheckpointDetails);
// Add new checkpoint. 
checkpointRouter.route('/add').post(addCheckpoint);
// Show a list of all checkpoint.
checkpointRouter.route('/list').get(getAllCheckpoint);
// Delete checkpoint.
checkpointRouter.route('/delete/:checkpointId').delete(deleteCheckpoint);
// Search by checkpoint name.
checkpointRouter.route('/search/:checkpointName').get(searchByCheckpointName);



export default checkpointRouter;