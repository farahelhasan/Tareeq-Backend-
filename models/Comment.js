import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Comment = sequelize.define('Comment', {

    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'user_id'
        }
    }

},{
    tableName: 'comments'
})

export default Comment;