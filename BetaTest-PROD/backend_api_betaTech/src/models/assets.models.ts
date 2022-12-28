import { DataTypes } from "sequelize";
import {sequelize} from "../db_conection"

const Assets = sequelize.define('Asset',{
    codeAssets:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.TEXT
    },
    trade:{
        type:DataTypes.STRING
    },

    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }


})

module.exports = Assets