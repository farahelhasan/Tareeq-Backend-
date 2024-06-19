import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('User', {

    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_picture_url: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    x_position: {
        type: DataTypes.DOUBLE

    },
	y_position: {
        type: DataTypes.DOUBLE

    },
    fcmToken: {
        type: DataTypes.STRING
    },

},{
    tableName: 'users'
})

export default User;