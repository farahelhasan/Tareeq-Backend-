import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";
import Checkpoint from "./Checkpoint.js";

const WaitingTime = sequelize.define('WaitingTime', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  duration_time: {  // in secound.
    type: DataTypes.DOUBLE,
  },
  checkpoint_id: {
    type: DataTypes.INTEGER,

  },
  user_id: {
    type: DataTypes.INTEGER,

  },
  direction: {
    type: DataTypes.STRING

},

}, 
{
  tableName: 'waiting_time',
});

export default WaitingTime;
