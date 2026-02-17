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
  | "reviews"
  | "favorites"
  | "apartments"
  | "myReviews"
  | "addReview";

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

  // Borrar apartamento
  const handleDelete = (id: string) => {
    setApartments(apartments.filter((a) => a.id !== id));
  };

  // Guardar apartamento
  const handleSave = (apt: Apartment) => {
    setApartments((prev) => {
      const exists = prev.find((a) => a.id === apt.id);
      if (exists) return prev.map((a) => (a.id === apt.id ? apt : a));
      return [...prev, apt];
    });
    setView("list");
  };

  // Favoritos apartamentos
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  // Favoritos reviews
  const toggleFavoriteReview = (reviewId: string) => {
    setFavoriteReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  // Ver reviews de un apartamento
  const handleViewReviews = (apt: Apartment) => {
    setSelected(apt);
    setView("reviews");
  };

  // Guardar nueva review
  const handleSaveReview = (review: Review) => {
    setReviews((prev) => [...prev, review]);
    setFavoriteReviews((prev) => [...prev, review.id]); // opcional: marcar favorita
    setView("myReviews"); // ir a Mis Reviews
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Luxury Apartments</h1>
      </div>

      <MenuForm onSelectView={(v: View) => setView(v)} />

      {/* LISTADO DE APARTAMENTOS */}
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

      {/* FAVORITOS DE APARTAMENTOS */}
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

      {/* DETALLE */}
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

      {/* FORMULARIO DE APARTAMENTO */}
      {view === "form" && (
        <ApartmentForm
          onSave={handleSave}
          onCancel={() => setView("list")}
        />
      )}

      {/* FORMULARIO PARA NUEVA REVIEW */}
      {view === "addReview" && selected && (
        <ApartmentReviewForm
          apartment={selected}
          onSave={handleSaveReview}
          onCancel={() => setView("list")}
        />
      )}

      {/* REVIEWS DE UN APARTAMENTO */}
      {view === "reviews" && selected && (
        <ApartmentReview
          apartment={selected}
          reviews={reviews}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* MIS REVIEWS FAVORITAS */}
      {view === "myReviews" && (
        <ApartmentReview
          apartment={selected || apartments[0]}
          reviews={reviews.filter((r) =>
            favoriteReviews.includes(r.id)
          )}
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
