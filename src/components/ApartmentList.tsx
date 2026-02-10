import type { Apartment } from "../data/apartments";

interface Props {
  apartments: Apartment[];
  onSelect: (apt: Apartment) => void;
  onDelete: (id: string) => void;
}

export function ApartmentList({ apartments, onSelect, onDelete }: Props) {
  return (
    <div className="grid">
      {apartments.map((apt) => (
        <div key={apt.id} className="card">
          {/* Imagen */}
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

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(apt.id);
            }}
          >
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
}
