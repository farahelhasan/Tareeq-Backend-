import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Path = sequelize.define('Path', {

   path_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    start: {
        type: DataTypes.STRING,
       // allowNull: false
    },
    end: {
        type: DataTypes.STRING,
       // allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'user_id'
        }
    }
    

},{
    tableName: 'paths'
})

export default Path;