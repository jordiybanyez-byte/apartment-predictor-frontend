// src/view/ApartmentForm.tsx
import { useState } from "react";
import { useApartmentContext } from "../context/ApartmentContext";

export const ApartmentForm = () => {
  const { incrementRefresh } = useApartmentContext();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving apartment:", { name, address, price });
    incrementRefresh();
    setName("");
    setAddress("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="apartment-form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" required />
      <input
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        placeholder="Price"
        type="number"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};