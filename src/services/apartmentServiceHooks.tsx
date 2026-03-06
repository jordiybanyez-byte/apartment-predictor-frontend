// src/services/apartmentServiceHooks.tsx
import { useState, useEffect, useCallback } from "react";
import { apartmentService } from "./apartmentService";
import type { Apartment } from "../data/apartments";

export const useApartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  

  useEffect(() => {
    const fetchApartments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await apartmentService.getAll();
        setApartments(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Error desconocido");
      } finally {
        setIsLoading(false);
      }
    };
    fetchApartments();
  }, []);

const deleteApartment = useCallback(async (id: string) => {
  try {
    await apartmentService.delete(id);
    setApartments((prev) => prev.filter((apt) => apt.id !== id));
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) setError(err.message);
  }
}, []);

const createApartment = useCallback(async (data: Partial<Apartment>) => {
  try {
    const newApartment = await apartmentService.create(data);
    setApartments((prev) => [...prev, newApartment]);
    return newApartment;
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) setError(err.message);
    throw err;
  }
}, []);

const updateApartment = useCallback(async (id: string, data: Partial<Apartment>) => {
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
}, []);

  return {
    apartments,
    isLoading,
    error,
    deleteApartment,
    createApartment,
    updateApartment,
  };
};