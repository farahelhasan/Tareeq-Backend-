import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

//   checkpoint_id: {
//     type: DataTypes.INTEGER,

//   },
//   user_id: {
//     type: DataTypes.INTEGER,

//   },
}, 
{
  tableName: 'favorite',
});

export default Favorite;
