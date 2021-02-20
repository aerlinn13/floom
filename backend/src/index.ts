import express from "express";

import {Florist, Product, Flower} from './models/index';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "v1.0.0" );
} );

app.get( "/products", ( req, res ) => {
    Product.findAll<Product>({})
      .then((products: Product[]) => res.json(products))
      .catch((err: Error) => res.status(500).json(err));
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
