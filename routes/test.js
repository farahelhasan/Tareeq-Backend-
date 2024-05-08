// test.js

import express from 'express';
import { uploadImage } from '../controllers/GoogleCloudController.js';

const testRouter = express.Router();

// Multer middleware for handling image upload
import multer from 'multer'; // Import Multer using ES6 import syntax
const upload = multer({ dest: 'uploads/' });

// Define route for image upload
testRouter.route('/upload_image').post(upload.single('image'), uploadImage);

export default testRouter;
