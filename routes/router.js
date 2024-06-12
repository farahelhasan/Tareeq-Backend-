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
import waitingTimeRouter from "./WaitingTimeRouter.js";
import lookupRouter from "./LookUpTableRouter.js";
import notification from "./Notification.js";

router.use('/auth', authRouter);
router.use('/checkpoint', checkpointRouter);
router.use('/comment', commentRouter);
router.use('/liveQuestion', questionRouter);
router.use('/path', pathRouter);
router.use('/replay', replayRouter);
router.use('/user',userRouter);
router.use('/request', requestRouter)
router.use('/waitingTime', waitingTimeRouter);
router.use('/lookupTable', lookupRouter);
router.use('/notification', notification)


export default router;