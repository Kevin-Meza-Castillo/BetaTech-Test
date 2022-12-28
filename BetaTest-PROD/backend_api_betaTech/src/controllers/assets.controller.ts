import { Request, Response } from "express";
import { Op } from "sequelize";
import { Asset } from "../interfaces/assets.interface";
const Assets = require("../models/assets.models");

export const createAssets = async (req: Request, res: Response) => {
  try {
    const newAssets = req.body.map((element: any) => {
      return element.codeAssets;
    });

    console.log("", { newAssets });

    const verificationAsset:Asset = await Assets.findOne({
      where: {
        codeAssets: {
          [Op.in]: newAssets,
        },
      },
    });

    if (verificationAsset) {
      res.status(200).json({ message: "Asset already exist into database" });
    } else {
      const newAssert:Asset = await Assets.bulkCreate(req.body);
      res.status(201).json({ message: "Asset created", newAssert });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteAsset = async (req: Request, res: Response) => {
  const { codeAssets } = req.body;

  try {
    const assets:Asset = await Assets.update({
      active:false
    },{
      where: {
        codeAssets: codeAssets,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      assets
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateAsset = async (req: Request, res: Response) => {
  const { codeAssets, name, description,trade}:Asset = req.body;

  try {
    const assets:Asset = await Assets.update({
      name:name,
      description:description,
      trade:trade
    },{
      where: {
        codeAssets: codeAssets,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      assets
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const listByAsset = async (req: Request, res: Response) => {
  const { codeAssets}: Asset = req.body;

  try {
    const asset = await Assets.findOne({
      where: {
        codeAssets: codeAssets,
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      asset
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
export const listAssets = async (req: Request, res: Response) => {

  try {
    const assets:Asset[] = await Assets.findAll({
      where: {
        active:true
      },
    });

    return res.status(200).json({
      msg :'Completed',
      assets
  });
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
