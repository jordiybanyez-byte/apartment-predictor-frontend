import { useState, useMemo, useEffect } from "react";
import type { Apartment } from "../data/apartments";
import Pagination from "./Pagination";

interface Props {
  apartments: Apartment[];
  onSelect: (apt: Apartment) => void;
  onDelete: (id: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onViewReviews: (apt: Apartment) => void;
}

const PAGE_SIZE = 8;

export function ApartmentList({
  apartments,
  onSelect,
  onDelete,
  favorites,
  onToggleFavorite,
  onViewReviews,
}: Props) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(apartments.length / PAGE_SIZE);

  // Obtener solo los apartamentos de la página actual
  const paginatedApartments = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return apartments.slice(start, end);
  }, [apartments, page]);

  // Resetear la página si cambian los apartamentos (por ejemplo, filtrado)
  useEffect(() => {
    setPage(1);
  }, [apartments]);

  return (
    <>
      <div className="grid">
        {paginatedApartments.map((apt) => (
          <div key={apt.id} className="card">

            {/* ❤️ FAVORITO */}
            <button
              className="favorite-btn"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(apt.id);
              }}
            >
              {favorites.includes(apt.id) ? "❤️" : "🤍"}
            </button>

            {/* ⭐ RESEÑAS */}
            <button
              className="review-btn"
              onClick={(e) => {
                e.stopPropagation();
                onViewReviews(apt);
              }}
            >
              ⭐
            </button>

            {/* 🗑️ DELETE */}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(apt.id);
              }}
            >
              🗑️
            </button>

            <div className="image-container" onClick={() => onSelect(apt)}>
              <img
                src={apt.images?.[0] || "/images/placeholder.jpg"}
                alt={apt.title}
              />
            </div>

            <div className="card-body" onClick={() => onSelect(apt)}>
              <h3>{apt.location}</h3>
              <p className="title">{apt.title}</p>
              <p className="details">
                {apt.rooms} rooms · {apt.bathrooms} bath · {apt.surface} m²
              </p>
              <p className="transport">{apt.publicTransport}</p>
              <p className="price">{apt.price} € / month</p>
            </div>

          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </>
  );
}