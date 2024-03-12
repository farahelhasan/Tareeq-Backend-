import express from "express";
const router = express.Router();

import authRouter from "./AuthRouter.js";
import checkpointRouter from "./CheckpointRouter.js";


router.use('/auth', authRouter);
router.use('/checkpoint', checkpointRouter);

export default router;