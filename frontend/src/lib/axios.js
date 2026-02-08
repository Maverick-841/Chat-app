import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-us1t.onrender.com/api" : "/api",
  withCredentials: true,
});




