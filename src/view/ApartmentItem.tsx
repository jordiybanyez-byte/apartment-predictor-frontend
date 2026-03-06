// src/view/ApartmentItem.tsx
import { Apartment, useApartmentContext } from "../context/ApartmentContext";

interface ApartmentItemProps {
  apartment: Apartment;
}

export const ApartmentItem = ({ apartment }: ApartmentItemProps) => {
  const { handleDetail, handleUpdate, handleDelete, isDeleting } = useApartmentContext();

  return (
    <div className="apartment-item">
      <h3>{apartment.name}</h3>
      <p>{apartment.address}</p>
      <p>Price: ${apartment.price}</p>

      <button onClick={() => handleDetail(apartment)}>Details</button>
      <button onClick={() => handleUpdate(apartment)}>Update</button>
      <button onClick={() => handleDelete(apartment.id)} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};