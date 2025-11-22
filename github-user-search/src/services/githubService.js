
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const searchUsers = async (username, location, minRepos) => {
  try {
    // Build query
    let query = `${username}`;

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items; // returns list of users
  } catch (error) {
    throw error;
  }
};
