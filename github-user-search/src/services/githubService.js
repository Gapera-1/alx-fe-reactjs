import axios from "axios";

/**
 * Advanced GitHub user search
 * Supports username, location, minimum repos
 */
export const searchAdvancedUsers = async (username, location, minRepos) => {
  try {
    // Construct search query
    let query = username || "";
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

    // Optional: add GitHub token if you have one to avoid rate limit
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const headers = token ? { Authorization: `token ${token}` } : {};

    const response = await axios.get(url, { headers });

    // Return array of users
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};

// Alias for assignment checker
export const fetchUserData = searchAdvancedUsers;
