import { useEffect, useState } from "react";
import axios from "axios";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/points/history").then((res) => {
      setHistory(res.data);
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow max-h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-2">History</h2>
      <ul className="space-y-2 text-sm">
        {history.map((entry) => (
          <li key={entry._id} className="border-b py-1">
            {entry.user?.name} claimed <strong>{entry.points} pts</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
