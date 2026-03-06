// src/view/Apartment.tsx
import { ApartmentForm } from "./ApartmentForm";
import { ApartmentList } from "./ApartmentList";
import { ApartmentProvider } from "../context/ApartmentContext";

const Apartment = () => {
  return (
    <ApartmentProvider>
      <div className="apartment-container">
        <h1>Apartments Management</h1>
        <ApartmentForm />
        <ApartmentList />
      </div>
    </ApartmentProvider>
  );
};

export default Apartment;