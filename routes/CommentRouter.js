import express from 'express';
import { getAllCommentsForSpecificCheckpoint, addComment, deleteComment, editComment } from '../controllers/CommentController.js';

const commentRouter = express.Router();

// Get all comment for specific checkpoint.
commentRouter.route('/:checkpointId').get(getAllCommentsForSpecificCheckpoint);
// Add new comment to specific checkpoint.
commentRouter.route('/add/toCheckpoint/:checkpointId').post(addComment);
// Edit comment.
commentRouter.route('/edit/:commentId').put(editComment);
// Delete comment.
commentRouter.route('/delete/:commentId').delete(deleteComment);
export default commentRouter;