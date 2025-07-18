import { useEffect, useState } from "react";
import axios from "axios";

export default function ClaimPointsForm() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(res => {
      setUsers(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUser) return alert("Please select a user");

    const randomPoints = Math.floor(Math.random() * 10) + 1;

    await axios.post("http://localhost:5000/api/points/claim", {
      userId: selectedUser,
      points: randomPoints,
    });

    alert(`${randomPoints} points claimed for user!`);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded w-full"
      >
        Claim Random Points (1-10)
      </button>
    </form>
  );
}
