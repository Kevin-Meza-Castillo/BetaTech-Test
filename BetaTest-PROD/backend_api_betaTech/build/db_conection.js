"use strict";
// import { DataSource } from "typeorm";
// import { User } from "./models/user.models";
// import { Assets } from './models/assets.models';
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
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
exports.sequelize = new Sequelize('postgres', 'esalas', '0ewj0Ra6zYWe', {
    host: 'localhost',
    port: '5434',
    dialect: 'postgres'
});
//# sourceMappingURL=db_conection.js.map