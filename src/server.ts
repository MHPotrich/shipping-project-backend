import express from "express";
import cors from "cors";
import shippingRoutes from "./api/routes/shipping.js";
import userRoutes from "./api/routes/user.js";
import loginRoutes from "./api/routes/login.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/shipping', shippingRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/login', loginRoutes);

app.use('*', (request, response) => {
    response.status(404).json({ error: 'Route not found' })
});

export default app;