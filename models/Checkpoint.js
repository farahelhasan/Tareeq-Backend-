import { DataTypes} from 'sequelize';
import sequelize from '../config/Sequelize.js';

const Checkpoint = sequelize.define('Checkpoint', {
    checkpoint_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

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
    average_time_in: {
        type: DataTypes.DOUBLE

    },
    average_time_out: {
        type: DataTypes.DOUBLE

    }
   
}, 
{
    tableName: 'checkpoints'
})
export default Checkpoint;