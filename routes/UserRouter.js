import express from 'express';
import { getUser, editUser } from "../controllers/UserController.js";

const userRouter = express.Router();

// Get specific user..
userRouter.route('/:userId').get(getUser);
// Edit user information.
userRouter.route('/edit/:userId').put(editUser);

export default userRouter;
 