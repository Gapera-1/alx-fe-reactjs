import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setResults([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      console.log("API results:", data);

      if (!data || data.length === 0) {
        setErrorMsg("Looks like we cant find the user");
      } else {
        setResults(data);
      }
    } catch (err) {
      setErrorMsg("Looks like we cant find the user");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded-lg space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-lg">
          Search
        </button>
      </form>

      {/* Loading / Error / Results */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

        <div className="grid gap-4 mt-4">
          {results.map((user) => (
            <div key={user.id} className="flex items-center bg-gray-100 p-4 rounded-lg">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-bold">{user.login}</p>
                <a href={user.html_url} target="_blank" className="text-blue-600 underline">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
