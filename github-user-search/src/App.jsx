import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setErrorMsg("");
    setUser(null);

    const result = await fetchUserData(username);

    if (result.error) {
      setErrorMsg("Looks like we can't find the user");
    } else {
      setUser(result.data);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

      {/* Success State */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} width="150" alt="Avatar" />
          <h2>{user.name || user.login}</h2>

          <a href={user.html_url} target="_blank">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
