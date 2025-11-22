import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
          Search
        </button>
      </form>
    </div>
  );
}
