import axios from "axios";

export const searchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  try {
    // Build GitHub Search API query
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=10`;

    const response = await axios.get(url);

    return {
      items: response.data.items,
      total_count: response.data.total_count,
      error: null,
    };
  } catch (error) {
    return {
      items: [],
      total_count: 0,
      error: "Search failed",
    };
  }
};
