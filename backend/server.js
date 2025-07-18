import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors' ; 
import mongoose from 'mongoose' ; 


dotenv.config() ; 
const app = express() ; 

app.use(cors()) ; 
app.use(express.json()) ; 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch(err => console.error(err));
