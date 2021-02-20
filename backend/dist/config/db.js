"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize({
    database: "ftc_example",
    dialect: "sqlite",
    storage: "./database.sqlite3",
});
//# sourceMappingURL=db.js.map