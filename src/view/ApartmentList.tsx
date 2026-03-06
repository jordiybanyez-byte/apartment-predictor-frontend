// src/view/ApartmentList.tsx
import { useApartmentContext } from "../context/ApartmentContext";
import { ApartmentItem } from "./ApartmentItem";

export const ApartmentList = () => {
  const { apartments } = useApartmentContext();

  return (
    <div className="apartment-list">
      {apartments.map(apartment => (
        <ApartmentItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
};