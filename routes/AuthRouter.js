import express from 'express'
import { signup, login} from '../controllers/AuthController.js';

const authRouter = express.Router();

// Signup.
authRouter.route('/signup').post(signup);
// Login.
authRouter.route('/login').post(login)

export default authRouter;

