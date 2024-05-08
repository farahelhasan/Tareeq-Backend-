import express from "express";
const router = express.Router();

import authRouter from "./AuthRouter.js";
import checkpointRouter from "./CheckpointRouter.js";
import commentRouter from "./CommentRouter.js";
import questionRouter from "./LiveQuestionRouter.js";
import pathRouter from "./PathRouter.js";
import replayRouter from "./ReplayRouter.js";
import userRouter from "./UserRouter.js";
import requestRouter from "./RequestRouter.js";
import testRouter from './test.js';


router.use('/auth', authRouter);
router.use('/checkpoint', checkpointRouter);
router.use('/comment', commentRouter);
router.use('/liveQuestion', questionRouter);
router.use('/path', pathRouter);
router.use('/replay', replayRouter);
router.use('/user',userRouter);
router.use('/request', requestRouter)
router.use('/', testRouter )

export default router;