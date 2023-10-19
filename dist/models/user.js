"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importe as bibliotecas necessárias
const sequelize_1 = require("sequelize");
// Defina a sua model
class User extends sequelize_1.Model {
}
// Inicialize a model com os campos desejados
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users', // Nome da tabela no banco de dados
});
exports.default = User;
