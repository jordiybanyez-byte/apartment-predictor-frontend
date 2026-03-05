// src/services/apartmentService.ts
import axios from "axios";
import type { Apartment } from "../data/apartments";

// Base URL de tu backend
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1/apartment",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para log de errores
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    return Promise.reject(err);
  }
);

export const apartmentService = {
  // Obtener todos los apartamentos
  getAll: () => api.get("/getAll").then((res) => res.data),

  // Crear un apartamento
  create: (data: Partial<Apartment>) =>
    api.post("/create", data).then((res) => res.data),

  // Actualizar apartamento por ID
  update: (id: string, data: Partial<Apartment>) =>
    api.put(`/update/${id}`, data).then((res) => res.data),

  // Eliminar apartamento por ID
  delete: (id: string) => api.delete(`/delete/${id}`),
};