"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_conection_1 = require("./db_conection");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_conection_1.sequelize.authenticate();
        console.log("Databace is conected");
        app_1.default.listen(5000);
        console.log("Server is online", 5000);
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
main();
//# sourceMappingURL=index.js.map