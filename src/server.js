// src/server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import ordersRouter from './routes/orders.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/nilo-pizza');

app.use('/api/orders', ordersRouter);

app.listen(3333, () => {
 console.log('Server running on port 3333');
});