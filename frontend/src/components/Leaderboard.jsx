import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/points/leaderboard")
      .then((res) => setLeaderboard(res.data))
      .catch((err) => console.error("Leaderboard fetch failed", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow max-h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
      {leaderboard.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <ul className="space-y-2">
          {leaderboard.map((user, index) => (
            <li key={user._id} className="flex justify-between border-b py-1">
              <span>
                {index + 1}. {user.name}
              </span>
              <span>{user.totalPoints} pts</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
