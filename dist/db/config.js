"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "reservation-db",
    username: "root",
    password: "secret",
    database: "reservation-service-db",
    logging: false,
    //models: [User],
});
exports.default = connection;
