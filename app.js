import express, {json} from 'express';
import sequelize from './config/Sequelize.js';
import dotenv from 'dotenv';
import './models/index.js'
import router from './routes/router.js'; 
dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json())
app.use(router)
/////////////
import admin from "firebase-admin";
import {initializeApp, applicationDefault} from 'firebase-admin/app';
import { readFileSync } from "fs";
const serviceAccount = JSON.parse(readFileSync("tareeq-app-b532e-firebase-adminsdk-3wbga-bf9107f0e6.json"));

process.env.GOOGLE_APPLICATION_CREDENTIALS;

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "tareeq-app-b532e"
});
////////////

sequelize.sync().then(() => {
    console.log('Database connected and models synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Failed to sync database models', err);
  });


