import { useState } from "react";
import { ApartmentList } from "./components/ApartmentList";
import { ApartmentDetail } from "./components/ApartmentDetail";
import { ApartmentForm } from "./components/ApartmentForm";
import { ApartmentReview } from "./components/ApartmentReview";
import { ApartmentReviewForm } from "./components/ApartmentReviewForm";
import { MenuForm } from "./components/MenuForm";
import { TopBar } from "./components/TopBar";
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
  | "addReview"
  | "favoriteReviews";

type Category = "hipoteca" | "alquiler" | "temporal" | "venta" | null;

export default function App() {
  const [apartments, setApartments] =
    useState<Apartment[]>(initialApartments);

  const [reviews, setReviews] =
    useState<Review[]>(initialReviews);

  const [selected, setSelected] =
    useState<Apartment | null>(null);

  const [view, setView] = useState<View>("list");

  const [category, setCategory] =
    useState<Category>(null);

  const [favorites, setFavorites] =
    useState<string[]>([]);

  const [favoriteReviews, setFavoriteReviews] =
    useState<string[]>([]);

  // Seleccionar apartamento
  const handleSelect = (apt: Apartment) => {
    setSelected(apt);
    setView("detail");
  };

  // Eliminar apartamento
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

  // 🔥 FILTRO POR CATEGORÍA
  const filteredApartments = category
    ? apartments.filter((apt) => apt.propertyType === category)
    : apartments;

  return (
    <div className="app-container">

      {/* 🔝 TOP BAR */}
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

      {/* Lista */}
      {(view === "list" || view === "apartments") && (
        <ApartmentList
          apartments={filteredApartments}
          onSelect={handleSelect}
          onDelete={handleDelete}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewReviews={handleViewReviews}
        />
      )}

      {/* Favoritos */}
      {view === "favorites" && (
        <ApartmentList
          apartments={filteredApartments.filter((apt) =>
            favorites.includes(apt.id)
          )}
          onSelect={handleSelect}
          onDelete={handleDelete}
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
            onBack={() => setView("list")}
          />
          <button onClick={() => setView("addReview")}>
            Add Review
          </button>
        </>
      )}

      {/* Formulario apartamento */}
      {view === "form" && (
        <ApartmentForm
          onSave={handleSave}
          onCancel={() => setView("list")}
        />
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
          apartment={undefined}
          reviews={reviews.filter((r) =>
            favoriteReviews.includes(r.id)
          )}
          favoriteReviews={favoriteReviews}
          onToggleFavoriteReview={toggleFavoriteReview}
          onBack={() => setView("list")}
        />
      )}

      {/* Mis Reviews */}
      {view === "myReviews" && (
        <ApartmentReview
          apartment={undefined}
          reviews={reviews.filter((r) => r.author === "me")}
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
