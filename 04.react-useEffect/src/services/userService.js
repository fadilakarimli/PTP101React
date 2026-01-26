import axios from "axios";
import { BASE_URL } from "../constants/api";

export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  } catch (error) {
    throw new Error("Xəta baş verdi");
  }
};
