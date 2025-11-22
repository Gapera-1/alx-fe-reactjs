import axios from "axios";

export const fetchUserData = async (username) => {
  const URL = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(URL);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: "User not found" };
  }
};
