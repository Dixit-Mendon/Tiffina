import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import vendorRoutes from './routes/vendorRoutes.js';

import { notFound, errorHandler } from "./Middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running....');
});

app.use('/user', userRoutes);
app.use('/vendor', vendorRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));