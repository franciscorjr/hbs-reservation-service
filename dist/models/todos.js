"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importe a biblioteca Sequelize ou qualquer outra biblioteca de sua preferência.
const sequelize_1 = require("sequelize");
// Defina a sua model
class Todos extends sequelize_1.Model {
}
// Inicialize a model com os campos desejados
Todos.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize,
    modelName: 'Todos',
    tableName: 'todos', // Nome da tabela no banco de dados
});
exports.default = Todos;
