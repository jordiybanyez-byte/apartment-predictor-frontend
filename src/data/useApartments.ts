
import axios from "axios";
import { useEffect, useState } from "react";

export interface Apartment {
  id: number;
  name: string;
  address: string;
  price: number;
  // agrega otras propiedades según tu API
}

export const useApartments = (refreshTrigger: unknown) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAxiosError, setIsAxiosError] = useState(false);

  const fetchApartments = async () => {
    try {
      const response = await axios.get<Apartment[]>("/api/v1/apartment/getAll");
      console.log("API Response:", response);
      setApartments(response.data);
      setIsLoading(false);
      setIsAxiosError(false); // reset error on success
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error fetching apartments:", error.message);
        setIsAxiosError(true);
      } else {
        console.error("Unknown error fetching apartments:", error);
        setIsAxiosError(false);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, [refreshTrigger]);

  return { apartments, isLoading, isAxiosError, refetch: fetchApartments };
};