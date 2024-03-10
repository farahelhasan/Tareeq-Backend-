import sequelize from "../config/Sequelize.js";
import { DataTypes } from "sequelize";

const Replay = sequelize.define('Replay', {

    replay_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    replay_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'live_questions',
            key: 'question_id'
        }
    },
    path_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paths',
            key: 'path_id'
        }
    }

},{
    tableName: 'replays'
})

export default Replay;