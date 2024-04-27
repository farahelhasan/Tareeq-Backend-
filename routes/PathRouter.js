import express from 'express';
import  {addPathQuestion, getSameQuestionPath, getAllQuestionPathForSpecificUser, deletePathQuestion, getAllQuestionPath} from '../controllers/PathController.js';

const pathRouter = express.Router();

// Add path question.
pathRouter.route('/add').post(addPathQuestion);
// Show all path questions for specific user.
pathRouter.route('/list/:userId').get(getAllQuestionPathForSpecificUser);
// Show the same path question..
pathRouter.route('/same/:start/:end').put(getSameQuestionPath);
// Delete path question.
pathRouter.route('/delete/:pathId').delete(deletePathQuestion);
// Get all path question.
pathRouter.route('/all').get(getAllQuestionPath);



export default pathRouter;