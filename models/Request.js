import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Request = sequelize.define('Request', {

    request_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    x_position: {
        type: DataTypes.DOUBLE

    },
	y_position: {
        type: DataTypes.DOUBLE

    },
    status_in: {
        type: DataTypes.STRING

    },
    status_out: {
        type: DataTypes.STRING

    },
     type: { //add or delete
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    tableName: 'requests'
})

export default Request;