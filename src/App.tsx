// src/App.tsx
import { useState } from "react";
import { ApartmentList } from "./components/ApartmentList";
import { ApartmentDetail } from "./components/ApartmentDetail";
import { ApartmentForm } from "./components/ApartmentForm";
import { initialApartments, type Apartment } from "./data/apartments";

type View = "list" | "detail" | "form";

export default function App() {
  const [apartments, setApartments] = useState<Apartment[]>(initialApartments);
  const [selected, setSelected] = useState<Apartment | null>(null);
  const [view, setView] = useState<View>("list");

  const handleSelect = (apt: Apartment) => {
    setSelected(apt);
    setView("detail");
  };

  const handleDelete = (id: string) => {
    setApartments(apartments.filter((a) => a.id !== id));
  };

  const handleSave = (apt: Apartment) => {
    setApartments((prev) => {
      const exists = prev.find((a) => a.id === apt.id);
      if (exists) return prev.map((a) => (a.id === apt.id ? apt : a));
      return [...prev, apt];
    });
    setView("list");
  };

  return (
    <div className="app-container">
      <div className="h1-container">
        <h1>Luxury Apartments</h1>
      </div>

      {view === "list" && (
        <ApartmentList
          apartments={apartments}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />
      )}
      {view === "detail" && selected && (
        <ApartmentDetail apartment={selected} onBack={() => setView("list")} onEdit={function (): void {
          throw new Error("Function not implemented.");
        } } />
      )}
      {view === "form" && (
        <ApartmentForm onSave={handleSave} onCancel={() => setView("list")} />
      )}

      <button onClick={() => setView("form")}>Add Apartment</button>
    </div>
  );
}
