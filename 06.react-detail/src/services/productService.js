import axios from "axios";

const BASE_URL = "https://products-api-eta-sage.vercel.app/products";

export const getProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
