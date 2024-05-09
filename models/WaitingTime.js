import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const WaitingTime = sequelize.define('WaitingTime', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  duration_time: {  // in secound.
    type: DataTypes.DOUBLE,
  },
 
}, 
{
  tableName: 'waiting_time',
});

export default WaitingTime;
