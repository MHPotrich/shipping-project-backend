import express from "express";
import cors from "cors";
import shippingRoutes from "./api/routes/shipping.js";
//import clientRoutes from "./api/routes/client.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/shipping', shippingRoutes);
//app.use('/api/v1/client', clientRoutes);

app.use('*', (request, response) => {
    response.status(404).json({ error: 'Route not found' })
});

export default app;