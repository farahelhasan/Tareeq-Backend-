import express from 'express';
import { sendNotification, saveToken, getToken} from '../controllers/NotificationController.js';
const notificationRouter = express.Router();

// Send notification.
notificationRouter.route('/send').post(sendNotification);
// Save token.
notificationRouter.route('/saveToken').post(saveToken);
// Get token.
notificationRouter.route('/getToken/:userId').get(getToken);

export default notificationRouter;