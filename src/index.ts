import 'dotenv/config'
import app from "./server.js";
import { MongoClient } from "mongodb";
import ShippingDAO from './dao/shipping.js';

const port = process.env.port || 3000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const url = `mongodb+srv://${username}:${password}@cluster0.nc5q0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

global.dataBaseName = "shipping-data-base";

MongoClient.connect(url,{ maxPoolSize: 50 }).then(client => {
    ShippingDAO.injectDataBase(client);
    app.listen(port, () => {
        console.log(`Running on port: ${port}`);
    });
}).catch(error => {
    console.error(error.stack);
    process.exit(1);
});