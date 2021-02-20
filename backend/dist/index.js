"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./models/index");
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("v1.0.0");
});
app.get("/products", (req, res) => {
    index_1.Product.findAll({})
        .then((products) => res.json(products))
        .catch((err) => res.status(500).json(err));
});
app.get("/florists", (req, res) => {
    index_1.Florist.findAll({})
        .then((florists) => res.json(florists))
        .catch((err) => res.status(500).json(err));
});
app.get("/florists", (req, res) => {
    index_1.Flower.findAll({})
        .then((flower) => res.json(flower))
        .catch((err) => res.status(500).json(err));
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map