import axios from "axios";
// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const API = axios.create({ baseURL: API_URL });

export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

export default API;
