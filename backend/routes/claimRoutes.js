import express from 'express';
import { claimPoints, getHistory, getLeaderboard } from '../controllers/claimController.js';
const pointRouter = express.Router();

pointRouter.post('/claim', claimPoints);
pointRouter.get('/leaderboard', getLeaderboard);
pointRouter.get('/history', getHistory);

export default pointRouter;
