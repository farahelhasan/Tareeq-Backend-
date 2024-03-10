import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const LiveQuestion = sequelize.define('LiveQuestion', {

   question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    checkpoint_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'checkpoints',
            key: 'checkpoint_id'
        }
    }

},{
    tableName: 'live_questions'
})

export default LiveQuestion;