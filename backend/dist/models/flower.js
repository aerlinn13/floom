"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flower = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Flower extends sequelize_1.Model {
}
exports.Flower = Flower;
Flower.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    color: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: "flowers",
    sequelize: db_1.database,
});
//# sourceMappingURL=flower.js.map