// src/context/ApartmentContext.jsx
import { createContext, useContext, useState } from "react";

const ApartmentContext = createContext(undefined);

export const ApartmentProvider = ({ children }) => {
  const [apartments, setApartments] = useState([
    { id: 1, name: "Apartment A", address: "123 Main St", price: 1000 },
    { id: 2, name: "Apartment B", address: "456 Elm St", price: 1200 },
  ]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDetail = (apartment) => {
    console.log("Detail:", apartment);
  };

  const handleUpdate = (apartment) => {
    console.log("Update:", apartment);
  };

  const handleDelete = (apartmentId) => {
    console.log("Delete:", apartmentId);
    setIsDeleting(true);
    setTimeout(() => setIsDeleting(false), 1000);
  };

  const incrementRefresh = () => setRefreshTrigger((prev) => prev + 1);

  return (
    <ApartmentContext.Provider
      value={{
        apartments,
        refreshTrigger,
        handleDetail,
        handleUpdate,
        handleDelete,
        isDeleting,
        incrementRefresh,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartmentContext = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error(
      "useApartmentContext must be used within ApartmentProvider"
    );
  }
  return context;
};