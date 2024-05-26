import express from 'express';
import {instertIntoLookuptable} from "../controllers/LookUpTableController.js";

const lookupRouter = express.Router();

// Insert to lookuptable.
lookupRouter.route("/insert").post(instertIntoLookuptable);

export default lookupRouter;