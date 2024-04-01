import express from "express";
const router = express.Router();

import authRouter from "./AuthRouter.js";
import checkpointRouter from "./CheckpointRouter.js";
import commentRouter from "./CommentRouter.js";
import questionRouter from "./LiveQuestionRouter.js";
import replayRouter from "./ReplayRouter.js";

router.use('/auth', authRouter);
router.use('/checkpoint', checkpointRouter);
router.use('/comment', commentRouter);
router.use('/liveQuestion', questionRouter);
router.use('/replay', replayRouter);

export default router;