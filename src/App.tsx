// src/App.tsx
import { useState } from "react";
import { ApartmentList } from "./view/ApartmentList";
import { ApartmentDetail } from "./view/ApartmentDetail";
import { ApartmentForm } from "./view/ApartmentForm";
import { ApartmentReview } from "./components/ApartmentReview";
import { ApartmentReviewForm } from "./components/ApartmentReviewForm";
import { MenuForm } from "./menuStyles/MenuForm";
import { TopBar } from "./menuStyles/TopBar";
import type { Apartment } from "./data/apartments";
import type { Review } from "./data/reviews";
import { useApartments } from "./services/apartmentServiceHooks";

type View =
  | "list"
  | "detail"
  | "form"
  | "reviews"
  | "favorites"
  | "myReviews"
  | "addReview"
  | "favoriteReviews"
  | "apartments"
  | "myData"
  | "myHouses"
  | "myDocu";

type Category = "hipoteca" | "alquiler" | "temporal" | "venta" | null;

export default function App() {
  const { apartments, isLoading, error, createApartment, updateApartment, deleteApartment } =
    useApartments();

  const [reviews, setReviews] = useState<Review[]>([]);
  const [selected, setSelected] = useState<Apartment | null>(null);
  const [view, setView] = useState<View>("list");
  const [category, setCategory] = useState<Category>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteReviews, setFavoriteReviews] = useState<string[]>([]);

  // Seleccionar apartamento
  const handleSelect = (apt: Apartment) => {
    setSelected(apt);
    setView("detail");
  };

  // Guardar apartamento
  const handleSave = (apt: Apartment) => {
    if (apartments.find((a) => a.id === apt.id)) {
      updateApartment(apt.id, apt);
    } else {
      createApartment(apt);
    }
    setView("list");
  };

  // Toggle favorito apartamento
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  // Toggle favorito review
  const toggleFavoriteReview = (reviewId: string) => {
    setFavoriteReviews((prev) =>
      prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]
    );
  };

  // Ver reviews
  const handleViewReviews = (apt: Apartment) => {
    setSelected(apt);
    setView("reviews");
  };

  // Guardar review
  const handleSaveReview = (review: Review) => {
    setReviews((prev) => [...prev, review]);
    setView("myReviews");
  };

  // FILTRO POR CATEGORÍA
  const filteredApartments = category
    ? apartments.filter((apt) => apt.propertyType === category)
    : apartments;

  return (
    <div className="app-container">
      <TopBar
        selectedCategory={category}
        onSelectCategory={(cat) => {
          setCategory(cat);
          setView("list");
        }}
        onShowAll={() => {
          setCategory(null);
          setView("apartments");
        }}
      />

      <div className="header">
        <h1>Luxury Apartments</h1>
      </div>

      <MenuForm onSelectView={(v: View) => setView(v)} />

      {isLoading && <p>Loading apartments...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Lista de apartamentos */}
      {(view === "list" || view === "apartments") && (
        <ApartmentList
          apartments={filteredApartments}
          onSelect={handleSelect}
          onDelete={deleteApartment}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewReviews={handleViewReviews}
        />
      )}

      {/* Favoritos */}
      {view === "favorites" && (
        <ApartmentList
          apartments={filteredApartments.filter((apt) => favorites.includes(apt.id))}
          onSelect={handleSelect}
          onDelete={deleteApartment}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewReviews={handleViewReviews}
        />
      )}

      {/* Detalle */}
      {view === "detail" && selected && (
        <>
          <ApartmentDetail
            apartment={selected}
            reviews={reviews}
            onBack={() => setView("list")}
          />
          <button onClick={() => setView("addReview")}>Add Review</button>
        </>
      )}

      {/* Formulario apartamento */}
      {view === "form" && (
        <ApartmentForm onSave={handleSave} onCancel={() => setView("list")} />
      )}

      {/* Añadir review */}
      {view === "addReview" && selected && (
        <ApartmentReviewForm
          apartment={selected}
          onSave={handleSaveReview}
          onCancel={() => setView("list")}
        />
      )}

      {/* Reviews apartamento */}
      {view === "reviews" && selected && (
        <ApartmentReview
          apartment={selected}
          reviews={reviews}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* Reviews favoritas */}
      {view === "favoriteReviews" && (
        <ApartmentReview
          reviews={reviews.filter((r) => favoriteReviews.includes(r.id))}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* Mis Reviews */}
      {view === "myReviews" && (
        <ApartmentReview
          reviews={reviews.filter((r) => r.author === "me")}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      <button onClick={() => setView("form")}>Add Apartment</button>
    </div>
  );
}