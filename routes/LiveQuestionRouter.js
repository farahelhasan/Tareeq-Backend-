import express from 'express';
import { addLiveQuestion, getAllQuestionsForSpecificCheckpoint, deleteLiveQuestion, editLiveQuestion, getUser} from '../controllers/LiveQuestionController.js';

const questionRouter = express.Router();

// Add live question in specific checkpoint.
questionRouter.route('/add/toCheckpoint/:checkpointId').post(addLiveQuestion);
// Show all live questions for specific checkpoint.
questionRouter.route('/list/forCheckpoint/:checkpointId').get(getAllQuestionsForSpecificCheckpoint);
// Edit live question.
questionRouter.route('/edit/:questionId').put(editLiveQuestion);
// Delete live question.
questionRouter.route('/delete/:questionId').delete(deleteLiveQuestion);
// Get user, who made the question.
questionRouter.route('/getUser/:questionId').get(getUser);


export default questionRouter;