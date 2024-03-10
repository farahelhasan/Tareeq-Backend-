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
    status: {
        type: DataTypes.STRING

    },
    average_time: {
        type: DataTypes.DOUBLE

    }
   
}, 
{
    tableName: 'checkpoints'
})
export default Checkpoint;