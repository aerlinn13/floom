import express from "express";
import sequelize from "sequelize";
import wholesalerService from "./integrations/wholesalers/wholesalerService";

import { Florist, Product, Flower, SKU } from './models/index';

const app = express();
const port = 8080; // default port to listen

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
   });

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "v1.0.0" );
} );

app.get( "/products", ( req, res ) => {
    Product.findAll<Product>({
        include: {
            model: Flower,
            through: { attributes: [] },
        }
    })
      .then((products: Product[]) => res.json(products))
      .catch((err: Error) => res.status(500).json(err));
});

app.get( "/wholesales/:flowerName", ( req, res ) => {
    SKU.findAll<SKU>({
        where: {
            genus: req.params.flowerName
        }
    })
      .then((skus: SKU[]) => res.json(skus.sort((a, b) => a.source.localeCompare(b.source) )))
      .catch((err: Error) => res.status(500).json(err));
});

// start the Express server
app.listen( port, () => {
    wholesalerService();
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
