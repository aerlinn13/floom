"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Florist = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Florist extends sequelize_1.Model {
}
exports.Florist = Florist;
Florist.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: "florists",
    sequelize: db_1.database,
});
//# sourceMappingURL=florist.js.map