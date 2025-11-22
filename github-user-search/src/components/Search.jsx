import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setErrorMsg("");
    setUser(null);

    const result = await fetchUserData(username);

    if (result.error) {
      setErrorMsg("Looks like we cant find the user");
    } else {
      setUser(result.data);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Search Input */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px", marginLeft: "10px" }}>
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {/* Success Result (Avatar + Username + Link) */}
      {user && (
        <div>
          <img src={user.avatar_url} width="120" alt="User Avatar" />
          <h2>{user.login}</h2>
          <a href={user.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
