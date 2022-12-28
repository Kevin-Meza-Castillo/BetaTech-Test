"use strict";
// import { Request, Response } from "express";
// import { User } from "../models/user.models";
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const verificationUser = await User.findOneBy({id:req.body.id})
//     if(verificationUser){
//         return res.status(200).json({ message: "User already exist into database" });
//     }else {
//         const newUser = new User();
//         newUser.id = req.body.id;
//         newUser.username = req.body.username;
//         newUser.password = req.body.password;
//         newUser.name = req.body.name;
//         newUser.lastName = req.body.lastName;
//         newUser.ocupation = req.body.ocupation;
//         newUser.age = req.body.age;
//         await newUser.save();
//         return res.status(201).json({ message: "User created" });
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//         return res.status(500).json({ message: error.message });
//       }
//   }
// };
//# sourceMappingURL=user.controller.js.map