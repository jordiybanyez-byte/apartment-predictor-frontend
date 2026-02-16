import { useState } from "react";
import { ApartmentList } from "./components/ApartmentList";
import { ApartmentDetail } from "./components/ApartmentDetail";
import { ApartmentForm } from "./components/ApartmentForm";
import { MenuForm } from "./components/MenuForm";
import { initialApartments, type Apartment } from "./data/apartments";

type View =
  | "list"
  | "detail"
  | "form"
  | "reviews"
  | "favorites"
  | "apartments"
  | "myReviews";

export default function App() {
  const [apartments, setApartments] = useState<Apartment[]>(initialApartments);
  const [selected, setSelected] = useState<Apartment | null>(null);
  const [view, setView] = useState<View>("list");
  const [favorites, setFavorites] = useState<string[]>([]);

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

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Luxury Apartments</h1>
      </div>

      {/* Menú lateral */}
      <MenuForm
        onSelectView={(v: View) => setView(v)}
      />

      
      {(view === "list" || view === "apartments") && (
        <ApartmentList
          apartments={apartments}
          onSelect={handleSelect}
          onDelete={handleDelete}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

  
      {view === "favorites" && (
        <ApartmentList
          apartments={apartments.filter((apt) =>
            favorites.includes(apt.id)
          )}
          onSelect={handleSelect}
          onDelete={handleDelete}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

     
      {view === "detail" && selected && (
        <ApartmentDetail
          apartment={selected}
          onBack={() => setView("list")}
        />
      )}

      
      {view === "form" && (
        <ApartmentForm
          onSave={handleSave}
          onCancel={() => setView("list")}
        />
      )}

      
      {view === "reviews" && (
        <div>
          <h2>No hay reviews disponibles</h2>
        </div>
      )}

      {view === "myReviews" && (
        <div>
          <h2>Mis Reviews</h2>
        </div>
      )}

      
      <button onClick={() => setView("form")}>
        Add Apartment
      </button>
    </div>
  );
}
