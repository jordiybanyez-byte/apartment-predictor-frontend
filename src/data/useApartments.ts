import { useEffect, useState } from "react";
import { useApartmentService } from "../middleware/apartmentServiceHooks";
import type { Apartment } from "../data/Apartment";

export const useApartments = (refreshTrigger: number) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAxiosError, setIsAxiosError] = useState<boolean>(false);

  const apartmentService = useApartmentService();

  const fetchApartments = async () => {
    try {
      const data: Apartment[] = await apartmentService.getAllApartments();
      setApartments(data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching apartments:", error);
      setIsAxiosError(error?.isAxiosError || false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, [refreshTrigger]);

  return { apartments, isLoading, isAxiosError, refetch: fetchApartments };
};