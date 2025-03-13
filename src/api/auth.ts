import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData: { email: string; password: string }) => {
  return await axios.post(`${API_URL}/login`, userData);
};
