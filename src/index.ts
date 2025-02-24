import 'dotenv/config'
import app from "./server.js";
import { MongoClient } from "mongodb";

const port = process.env.PORT || 3000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const clusterName = process.env.MONGO_CLUSTER_NAME;
const url = `mongodb+srv://${username}:${password}@${clusterName}.nc5q0.mongodb.net/?retryWrites=true&w=majority&appName=C${clusterName}`;

global.dataBaseName = "shipping-data-base";

MongoClient.connect(url,{ maxPoolSize: 50 }).then(client => {
    global.mongoClient = client;
    app.listen(port, () => {
        console.log(`Running on port: ${port}`);
    });
}).catch(error => {
    console.error(error.stack);
    process.exit(1);
});