import express from 'express';
import { claimPoints, getLeaderboard, getHistory } from '../controllers/claimController.js';
const router = express.Router();

router.post('/claim', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history', getHistory);

export default router;
