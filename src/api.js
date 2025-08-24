import axios from "axios";
// const API_URL = process.env.API_URL ;
const API = axios.create({ baseURL: process.env.API_URL || "http://localhost:5000" });

export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

export default API;
