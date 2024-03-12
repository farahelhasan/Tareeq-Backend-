import express from 'express';
import sequelize from './config/Sequelize.js';
import dotenv from 'dotenv';
import './models/index.js'
import router from './routes/router.js'; 
dotenv.config();
const app = express();
const PORT = 3000;
app.use(express.json())
app.use(router)


sequelize.sync().then(() => {
    console.log('Database connected and models synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error('Failed to sync database models', err);
  });


