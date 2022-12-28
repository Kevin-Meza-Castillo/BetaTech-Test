import { Request, Response } from "express";
import { Loan } from "../interfaces/loan.interface";
import { Asset } from "../interfaces/assets.interface";
import { IUser } from "../interfaces/user.interface";
const { Loans, User, Assets } = require("../models/index.models");

export const createLoans = async (req: Request, res: Response) => {
  try {
    
    
    const avalaibleAsset:Asset = await Assets.findOne({
      where: {
        codeAssets: req.body.codeAssets,
        active: true
      }
    })
    const avalaibleUser:IUser = await User.findOne({
      where: {
        idNumber: req.body.idNumber,
        active: true
      }
    })
    const avalaibleLoan = await Loans.findOne({
      where: {
        codeAssets: req.body.codeAssets,
        active: true
      }
    })
    
    if(!avalaibleAsset || !avalaibleUser ){
      return res.status(404).json({ message: "Assets or user doesnt exist " })
    }else{
      if(!avalaibleLoan){
        const newLoan = await Loans.create(req.body);
        console.log(JSON.stringify(req.body));
        await newLoan.save();
        return res.status(201).json({ message: "Loan created" });
      }else{
        return res.status(404).json({ message: "Assets is not available to loan" })
      }
    }
    if(!avalaibleLoan){
      const newLoan = await Loans.create(req.body);
      console.log(JSON.stringify(req.body));
      await newLoan.save();
      return res.status(201).json({ message: "Loan created" });
    }else{
      return res.status(404).json({ message: "Assets is not available to loan" })
    }
    
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const loanListByUser = async (req: Request, res: Response) => {
  const { idNumber } = req.body;

  try {
    const loanList = await Loans.findAndCountAll({
      where: {
        idNumber: idNumber,
        active: true
      },
      attributes: ["codeLoans"],
      include: [
        {
          model: User,
          required: true,
          attributes: ["email", "password"],
        },
        {
          model: Assets,
          required: true,
          attributes: ["codeAssets", "name", "description"],
        },
      ],
    });

    res.json({
      msg: "Todo ok ",
      loanList,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteLoan = async (req: Request, res: Response) => {
  const { idNumber,codeAssets } = req.body;
  console.log('DELETE')
  try {
    const loan = await Loans.update({
      active:false
    },{
      where: {
        idNumber: idNumber,
        codeAssets:codeAssets ,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Actualizada Exitosamente'
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
