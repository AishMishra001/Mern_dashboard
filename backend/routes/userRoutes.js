import express from 'express';
import { addUser, getUser } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.post('/', addUser);

export default userRouter;
