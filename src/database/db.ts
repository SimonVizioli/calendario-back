import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database_name", "username", "password", {
    host: "localhost",
    dialect: "mysql", // or 'postgres', 'sqlite', 'mariadb', 'mssql'
    logging: false, // Set to true if you want to see SQL queries in the console
});

export { sequelize };
