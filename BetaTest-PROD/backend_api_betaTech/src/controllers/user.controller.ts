import { Request, Response } from "express";
import { Op } from "sequelize";
import { IUser } from '../interfaces/user.interface';
import { generarJWT } from "../utils/generationJwt";

const User = require("../models/user.models")


export const createUser = async (req: Request, res: Response) => {
  
  try {
    const newUsers = req.body.map((element: any) => {
      return element.idNumber;
    });

    console.log("", { newUsers });

    const verificationUser:IUser = await User.findOne({
      where: {
        idNumber: {
          [Op.in]: newUsers,
        },
      },
    });

    if (verificationUser) {
      res.status(200).json({ message: "User or Users already exist into database", repeat:newUsers  });
    } else {
      const newUser = await User.bulkCreate(req.body);
      res.status(201).json({ message: "User or Users created", inserts: req.body });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { idNumber } = req.body;

  try {
    const user:IUser = await User.update({
      active:false
    },{
      where: {
        idNumber: idNumber,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      user
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { idNumber, email, password,name,ocupation,age} = req.body;

  try {
    const user:IUser = await User.update({
      email:email,
      password:password,
      name:name,
      ocupation:ocupation,
      age:age
    },{
      where: {
        idNumber: idNumber,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      user
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const listByUser = async (req: Request, res: Response,) => {
  const { idNumber} = req.body;

  try {
    const user:IUser = await User.findOne({
      where: {
        idNumber: idNumber,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      user
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const listUsers = async (req: Request, res: Response) => {
  const { idNumber} = req.body;

  try {
    const users:IUser[] = await User.findAll({
      where: {
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      users
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user:IUser = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    let token = null;
    if (user) {
      token = generarJWT(user.idNumber);
    }

    return res.status(200).json({
      msg: "Completed",
      token,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
