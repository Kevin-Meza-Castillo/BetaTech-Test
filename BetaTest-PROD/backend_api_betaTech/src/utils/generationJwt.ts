const jwt = require('jsonwebtoken');

var CryptoJS = require("crypto-js");

export const generarJWT = (id:String)=>{

    try {
        const payload = CryptoJS.AES.encrypt(JSON.stringify(id),"pruebaBetaTest").toString();
        const token = jwt.sign({payload},"pruebaBetaTest",{expiresIn : "1 day",})
        return token
    } catch (error) {
        if (error instanceof Error) {
            return { message: error.message };
          }
    }
};