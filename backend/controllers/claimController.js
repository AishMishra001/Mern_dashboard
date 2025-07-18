import User from "../models/user.js";
import ClaimHistory from "../models/claimHistory.js";

export const claimPoints = async (req, res) => {
  const { userId } = req.body;

  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, points });
  await history.save();

  res.json({ points, user });
};

export const getLeaderboard = async (req, res) => {
  const leaderboard = await User.find().sort({ totalPoints: -1 });
  res.json(leaderboard);
};

export const getHistory = async (req, res) => {
  const history = await ClaimHistory.find()
    .populate("userId")
    .sort({ claimedAt: -1 });
  res.json(history);
};
