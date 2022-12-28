import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");
import {User} from "../models/index.models"

export const validarJWT = async ( req:Request, res:Response, next:any)=>{

    const token = req.header('x-token');
    console.log(token)
    try {
        // verificamos el JWT 
          const {payload} = jwt.verify(token , "pruebaBetaTest" , (err:any,payload:any)=>{
            console.log(payload)
            if (err) {
                return err;
            }
            return payload
            });
       
        // desdencriptado de usuario
        const idcryp = CryptoJS.AES.decrypt(payload,"pruebaBetaTest");
        console.log(idcryp)
        const id = idcryp.toString(CryptoJS.enc.Utf8);
        console.log(id.slice(1, -1))
        // se busca usuario en DB
        const user = await User.findOne({
            where:{
                idNumber:id.slice(1, -1)
            }
        });
        console.log(user)

        if (!user) {
            return res.status(400).json({msg : 'no hay usuario con este id'});
        }
       
        if (user.active == 0) {
            return res.status(400).json({msg : 'usuario borrado'});
        }
        
        next()
        
    } catch (error) {
        return res.status(500).json({msg : 'ERROR EN VALIDAR JWT'});
        
    }


};
