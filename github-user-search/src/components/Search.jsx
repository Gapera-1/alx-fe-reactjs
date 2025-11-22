import { useState } from "react";
import { searchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg("");
    setResults([]);
    setPage(1);

    const response = await searchAdvancedUsers(username, location, minRepos, 1);

    if (response.error) {
      setErrorMsg("No users found with the given criteria");
    } else {
      setResults(response.items);
      setTotalCount(response.total_count);
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const response = await searchAdvancedUsers(username, location, minRepos, nextPage);

    if (!response.error) {
      setResults((prev) => [...prev, ...response.items]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Username */}
        <div>
          <label className="block font-medium">Username</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="e.g. torvalds"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="e.g. Rwanda"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Min Repos */}
        <div>
          <label className="block font-medium">Minimum Repositories</label>
          <input
            className="w-full border p-2 rounded"
            type="number"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}

      {/* Error */}
      {errorMsg && <p className="mt-4 text-red-600">{errorMsg}</p>}

      {/* Results */}
      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              className="w-16 h-16 rounded-full"
              alt="avatar"
            />
            <div>
              <h3 className="font-semibold text-lg">{user.login}</h3>
              <p className="text-sm text-gray-600">
                Score: {user.score}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}

        {/* Load More */}
        {results.length > 0 && results.length < totalCount && (
          <button
            onClick={loadMore}
            className="w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
