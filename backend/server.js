import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import pointRouter from './routes/claimRoutes.js';
import dotenv from 'dotenv';




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/points', pointRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
