import { useState } from "react";
import axios from "axios";

export default function CreateUserForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const res = await axios.post("http://localhost:5000/api/users", {
        name: name.trim(),
      });
      setMessage(`User "${res.data.name}" created!`);
      setName("");
    } catch (err) {
      setMessage("Failed to create user.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleCreate} className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Create New User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Create
      </button>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </form>
  );
}
