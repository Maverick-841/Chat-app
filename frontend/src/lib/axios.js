import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "//chat-app-two-delta-77.vercel.app" : "/api",
  withCredentials: true,
});

b