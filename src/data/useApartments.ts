// src/data/useApartments.ts
import { useState, useEffect } from "react";
import { apartmentService } from "../services/apartmentService"; // 🔹 ruta corregida
import type { Apartment } from "./apartments";

export const useApartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar apartamentos desde API
  useEffect(() => {
    const fetchApartments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await apartmentService.getAll();

        // 🔹 Si tu backend devuelve { apartments: [...] }, usa:
        // setApartments(data.apartments);

        // 🔹 Si devuelve directamente un array de apartamentos:
        setApartments(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Error desconocido al cargar apartamentos");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApartments();
  }, []);

  // Función para eliminar apartamento local + API
  const deleteApartment = async (id: string) => {
    try {
      await apartmentService.delete(id);
      setApartments((prev) => prev.filter((apt) => apt.id !== id));
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) setError(err.message);
    }
  };

  // Crear apartamento
  const createApartment = async (data: Partial<Apartment>) => {
    try {
      const newApartment = await apartmentService.create(data);
      setApartments((prev) => [...prev, newApartment]);
      return newApartment;
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) setError(err.message);
      throw err;
    }
  };

  // Actualizar apartamento
  const updateApartment = async (id: string, data: Partial<Apartment>) => {
    try {
      const updated = await apartmentService.update(id, data);
      setApartments((prev) =>
        prev.map((apt) => (apt.id === id ? updated : apt))
      );
      return updated;
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) setError(err.message);
      throw err;
    }
  };

  return {
    apartments,
    isLoading,
    error,
    deleteApartment,
    createApartment,
    updateApartment,
  };
};