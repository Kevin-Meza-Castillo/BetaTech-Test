import { DataTypes } from "sequelize";
import {sequelize} from "../db_conection"

const User = sequelize.define('User',{
    idNumber:{
        type:DataTypes.STRING,
        primaryKey: true
    },
    email:{
        type:DataTypes.STRING,
        unique: {
            args: true,    
            msg: 'Correo ya está registrado en la base de datos',
        }
    },
    password:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING
    },

    ocupation:{
        type:DataTypes.STRING
    },

    age:{
        type:DataTypes.INTEGER
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
})

module.exports = User