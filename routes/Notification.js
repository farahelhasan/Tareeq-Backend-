import express from 'express';
import { sendNotification, saveToken, getToken, sendFavoriteNotification} from '../controllers/NotificationController.js';
const notificationRouter = express.Router();

// Send notification.
notificationRouter.route('/send').post(sendNotification);
// Save token.
notificationRouter.route('/saveToken').post(saveToken);
// Get token.
notificationRouter.route('/getToken/:userId').get(getToken);
// Send favorite notification.
notificationRouter.route('/sendFavorite').post(sendFavoriteNotification);

export default notificationRouter;