import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"; // Usa una variable de entorno para la URL base

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error en registro:", error);
    throw error;
  }
};

export const createJobRequest = async (jobData) => {
  try {
    const response = await api.post("/jobs", jobData);
    return response.data;
  } catch (error) {
    console.error("Error en crear solicitud de trabajo:", error);
    throw error;
  }
};

export const getJobRequests = async () => {
  try {
    const response = await api.get("/jobs");
    return response.data;
  } catch (error) {
    console.error("Error en obtener solicitudes de trabajo:", error);
    throw error;
  }
};

export default api;
