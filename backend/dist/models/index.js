"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flower = exports.Product = exports.Florist = void 0;
const db_1 = require("../config/db");
const florist_1 = require("./florist");
Object.defineProperty(exports, "Florist", { enumerable: true, get: function () { return florist_1.Florist; } });
const flower_1 = require("./flower");
Object.defineProperty(exports, "Flower", { enumerable: true, get: function () { return flower_1.Flower; } });
const product_1 = require("./product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return product_1.Product; } });
product_1.Product.belongsTo(florist_1.Florist, { foreignKey: 'floristId' });
florist_1.Florist.hasMany(product_1.Product, { as: 'products', foreignKey: 'floristId' });
flower_1.Flower.belongsToMany(product_1.Product, {
    through: 'product_flowers',
    as: "flower",
    foreignKey: "flower_id"
});
product_1.Product.belongsToMany(flower_1.Flower, {
    through: 'product_flowers',
    as: "product",
    foreignKey: "product_id"
});
db_1.database.sync();
//# sourceMappingURL=index.js.map