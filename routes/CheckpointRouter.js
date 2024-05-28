import express from 'express';
import { getAllCheckpoint, getCheckpointDetails, addCheckpoint, deleteCheckpoint, searchByCheckpointName, setFavorite, getFavorite, deleteFavorite, editCheckpoint, checkFavorite } from '../controllers/CheckpointController.js';

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
// Set checkpoint as favorite.
checkpointRouter.route('/favorite').post(setFavorite);
// Get favorite checkpoint list by user id.
checkpointRouter.route('/favorite/:userId').get(getFavorite);
// Remove checkpoint from favorite by checkpoint id and user id.
checkpointRouter.route('/favorite/remove/:checkpointId/:userId').delete(deleteFavorite);
// Edit checkpoiny information.
checkpointRouter.route('/edit/:checkpointId').put(editCheckpoint);
// Check if specific checkpoint mark as favorite.
checkpointRouter.route('/checkFavorite/:userId/:checkpointId').get(checkFavorite);




export default checkpointRouter;