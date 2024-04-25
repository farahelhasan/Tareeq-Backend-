import express from 'express';
import { getUser } from "../controllers/UserController.js";

const userRouter = express.Router();

// Get specific user..
userRouter.route('/:userId').get(getUser);

export default userRouter;
 