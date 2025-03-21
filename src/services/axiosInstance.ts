import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});