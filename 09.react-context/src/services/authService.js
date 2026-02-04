import axios from "axios";

const BASE_URL = "http://localhost:3001/users";

export const getUsers = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const registerUser = async (user) => {
  return await axios.post(BASE_URL, user);
};
