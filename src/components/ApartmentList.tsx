import type { Apartment } from "../data/apartments";

interface Props {
  apartments: Apartment[];
  onSelect: (apt: Apartment) => void;
  onDelete: (id: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onViewReviews: (apt: Apartment) => void; // 👈 NUEVO
}

export function ApartmentList({
  apartments,
  onSelect,
  onDelete,
  favorites,
  onToggleFavorite,
  onViewReviews,
}: Props) {
  return (
    <div className="grid">
      {apartments.map((apt) => (
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
            <p className="price">{apt.price} € / month</p>
          </div>

        </div>
      ))}
    </div>
  );
}
