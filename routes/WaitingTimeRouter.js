import express from 'express';
import { setWaitingTime } from '../controllers/WaitingTimeController.js';

const waitingTimeRouter = express.Router();


// Set waiting time. 
waitingTimeRouter.route('/set').post(setWaitingTime);

export default waitingTimeRouter;