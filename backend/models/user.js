import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  totalPoints: { type: Number, default: 0 },
});

export default mongoose.model('User', UserSchema);
