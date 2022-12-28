// import { DataSource } from "typeorm";
// import { User } from "./models/user.models";
// import { Assets } from './models/assets.models';



// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5434,
//     username: "esalas",
//     password: "0ewj0Ra6zYWe",
//     database: "postgres",
//     synchronize: true,
//     logging: true,
//     entities: [User,Assets],
// })
const { Sequelize } = require('sequelize');
export const sequelize = new Sequelize('postgres', 'esalas', '0ewj0Ra6zYWe', {
    host: 'localhost',
    port:'5434',
    logging:true,
    dialect: 'postgres'
  });