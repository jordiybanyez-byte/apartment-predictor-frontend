// src/context/ApartmentContext.tsx
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Tipo de Apartment
export interface Apartment {
  id: number;
  name: string;
  address: string;
  price: number;
}

interface ApartmentContextType {
  apartments: Apartment[];
  refreshTrigger: number;
  handleDetail: (apartment: Apartment) => void;
  handleUpdate: (apartment: Apartment) => void;
  handleDelete: (apartmentId: number) => void;
  isDeleting: boolean;
  incrementRefresh: () => void;
}

const ApartmentContext = createContext<ApartmentContextType | undefined>(undefined);

export const ApartmentProvider = ({ children }: { children: ReactNode }) => {
  const [apartments, setApartments] = useState<Apartment[]>([
    { id: 1, name: "Apartment A", address: "123 Main St", price: 1000 },
    { id: 2, name: "Apartment B", address: "456 Elm St", price: 1200 },
  ]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDetail = (apartment: Apartment) => {
    console.log("Detail:", apartment);
  };

  const handleUpdate = (apartment: Apartment) => {
    console.log("Update:", apartment);
  };

  const handleDelete = (apartmentId: number) => {
    console.log("Delete:", apartmentId);
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1000);
  };

  const incrementRefresh = () => setRefreshTrigger(prev => prev + 1);

  return (
    <ApartmentContext.Provider
      value={{ apartments, refreshTrigger, handleDetail, handleUpdate, handleDelete, isDeleting, incrementRefresh }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (!context) throw new Error("useApartmentContext must be used within ApartmentProvider");
  return context;
};