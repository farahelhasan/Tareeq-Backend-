import { DataTypes} from 'sequelize';
import sequelize from '../config/Sequelize.js';

const LookupTable = sequelize.define('LookupTable', {
    checkpoint_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    x_sign: {
        type: DataTypes.STRING

    },
    y_sign: {
        type: DataTypes.STRING

    },
    direction: {
        type: DataTypes.STRING

    },
    direction_statement: {
        type: DataTypes.STRING

    }
   
}, 
{
    tableName: 'lookup_table'
})
export default LookupTable