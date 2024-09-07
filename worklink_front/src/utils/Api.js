const API_URL = "http://localhost:3001/api"; // Ajusta según tu configuración

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error("Error en la autenticación");
  }
  return response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Error en el registro");
  }
  return response.json();
};

export const createJobRequest = async (jobData) => {
  const response = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(jobData),
  });
  if (!response.ok) {
    throw new Error("Error al crear la solicitud");
  }
  return response.json();
};

export const fetchJobRequests = async () => {
  const response = await fetch(`${API_URL}/jobs`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error al obtener solicitudes");
  }
  return response.json();
};
