import { DataTypes } from "sequelize";
import {sequelize} from "../db_conection"
const User = require('./user.models')

const Loans = sequelize.define('Loan',{
    codeLoans:{
        type:DataTypes.STRING,
        primaryKey: true,
        
    },
    codeAssets:{
        type:DataTypes.STRING,
    },
    idNumber:{
        type:DataTypes.STRING,
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

})

module.exports = Loans