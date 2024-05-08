import express from 'express';
import { addCheckpointRequest, deleteCheckpointRequest } from '../controllers/RequestController.js';

const requestRouter = express.Router();


// Make new addCheckpointRequest. 
requestRouter.route('/add').post(addCheckpointRequest);
// Make new deleteCheckpointRequest.
requestRouter.route('/delete').post(deleteCheckpointRequest);



export default requestRouter;