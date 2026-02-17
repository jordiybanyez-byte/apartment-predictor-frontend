import { useState } from "react";
import { ApartmentList } from "./components/ApartmentList";
import { ApartmentDetail } from "./components/ApartmentDetail";
import { ApartmentForm } from "./components/ApartmentForm";
import { ApartmentReview } from "./components/ApartmentReview";
import { ApartmentReviewForm } from "./components/ApartmentReviewForm";
import { MenuForm } from "./components/MenuForm";
import { initialApartments, type Apartment } from "./data/apartments";
import { initialReviews, type Review } from "./data/reviews";

type View =
  | "list"
  | "detail"
  | "form"
  | "reviews"          // reviews de un apartamento
  | "favorites"        // apartamentos favoritos
  | "apartments"
  | "myReviews"        // tus propias reviews
  | "addReview"
  | "favoriteReviews"; // reviews que marcaste como favoritas

export default function App() {
  const [apartments, setApartments] = useState<Apartment[]>(initialApartments);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selected, setSelected] = useState<Apartment | null>(null);
  const [view, setView] = useState<View>("list");

  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteReviews, setFavoriteReviews] = useState<string[]>([]);

  // Seleccionar apartamento
  const handleSelect = (apt: Apartment) => {
    setSelected(apt);
    setView("detail");
  };

  // Eliminar apartamento
  const handleDelete = (id: string) => {
    setApartments(apartments.filter((a) => a.id !== id));
  };

  // Guardar apartamento nuevo o editado
  const handleSave = (apt: Apartment) => {
    setApartments((prev) => {
      const exists = prev.find((a) => a.id === apt.id);
      if (exists) return prev.map((a) => (a.id === apt.id ? apt : a));
      return [...prev, apt];
    });
    setView("list");
  };

  // Toggle favorito apartamento
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };
      
  // Toggle favorito review
  const toggleFavoriteReview = (reviewId: string) => {
    setFavoriteReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  // Abrir reviews de un apartamento
  const handleViewReviews = (apt: Apartment) => {
    setSelected(apt);
    setView("reviews");
  };

  // Guardar nueva review
  const handleSaveReview = (review: Review) => {
    setReviews((prev) => [...prev, review]);
    setView("myReviews"); // después de crearla la vemos en Mis Reviews
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Luxury Apartments</h1>
      </div>

      <MenuForm onSelectView={(v: View) => setView(v)} />

      {/* Lista de apartamentos */}
      {(view === "list" || view === "apartments") && (
        <ApartmentList
          apartments={apartments}
          onSelect={handleSelect}
          onDelete={handleDelete}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewReviews={handleViewReviews}
        />
      )}

      {/* Apartamentos favoritos */}
      {view === "favorites" && (
        <ApartmentList
          apartments={apartments.filter((apt) =>
            favorites.includes(apt.id)
          )}
          onSelect={handleSelect}
          onDelete={handleDelete}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewReviews={handleViewReviews}
        />
      )}

      {/* Detalle de apartamento */}
      {view === "detail" && selected && (
        <>
          <ApartmentDetail
            apartment={selected}
            onBack={() => setView("list")}
          />
          <button onClick={() => setView("addReview")}>
            Add Review
          </button>
        </>
      )}

      {/* Formulario de apartamento */}
      {view === "form" && (
        <ApartmentForm
          onSave={handleSave}
          onCancel={() => setView("list")}
        />
      )}

      {/* Formulario de review */}
      {view === "addReview" && selected && (
        <ApartmentReviewForm
          apartment={selected}
          onSave={handleSaveReview}
          onCancel={() => setView("list")}
        />
      )}

      {/* Reviews de un apartamento */}
      {view === "reviews" && selected && (
        <ApartmentReview
          apartment={selected}
          reviews={reviews}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* Reviews favoritas de todos los apartamentos */}
      {view === "favoriteReviews" && (
        <ApartmentReview
          apartment={undefined}
          reviews={reviews.filter((r) => favoriteReviews.includes(r.id))}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* Mis Reviews */}
      {view === "myReviews" && (
        <ApartmentReview
          apartment={undefined} // <-- ahora no depende de un apartamento
          reviews={reviews.filter((r) => r.author === "me")} // <-- filtra tus reviews
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      <button onClick={() => setView("form")}>
        Add Apartment
      </button>
    </div>
  );
}
