import app from "./app";
import { sequelize } from "./db_conection";

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log("Databace is conected now");
        app.listen(5000);
        console.log("Server is online", 5000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
 
};

main();
