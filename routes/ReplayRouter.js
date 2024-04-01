import express from 'express';
import { getAllReplayForSpecificPath, getAllReplayForSpecificQuestion, addReplayToSpecificPath, addReplayToSpecificQuestion, editReplay, deleteReplay } from '../controllers/ReplayController.js';

const replayRouter = express.Router();

// Get all replais for specific live question.
replayRouter.route('/:questionId').get(getAllReplayForSpecificQuestion);
// Get all replais for specific path.
replayRouter.route('/:pathId').get(getAllReplayForSpecificPath);
// Add new replay to specific live question.
replayRouter.route('/add/toQuestiont/:questionId').post(addReplayToSpecificQuestion);
// Add new replay to specific path.
replayRouter.route('/add/toPath/:pathId').post(addReplayToSpecificPath);
// Edit replay.
replayRouter.route('/edit/:replayId').put(editReplay);
// Delete replay.
replayRouter.route('/delete/:replayId').delete(deleteReplay);

export default replayRouter;