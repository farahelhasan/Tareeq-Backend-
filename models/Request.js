import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Request = sequelize.define('Request', {

    request_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
    },
    x_position: {
        type: DataTypes.DOUBLE

    },
	y_position: {
        type: DataTypes.DOUBLE

    }

},{
    tableName: 'requests'
})

export default Request;