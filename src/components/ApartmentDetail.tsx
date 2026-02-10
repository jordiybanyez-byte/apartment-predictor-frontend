import type { Apartment } from "../data/apartments";

type Props = {
  apartment: Apartment;
  onBack: () => void;
  onEdit: (apt: Apartment) => void;
};

export function ApartmentDetail({ apartment, onBack, onEdit }: Props) {
  return (
    <div>
      <h2>{apartment.title}</h2>

      <p><strong>Location:</strong> {apartment.location}</p>
      <p><strong>Price:</strong> {apartment.price} €</p>
      <p><strong>Rooms:</strong> {apartment.rooms}</p>
      <p><strong>Bathrooms:</strong> {apartment.bathrooms}</p>
      <p><strong>Surface:</strong> {apartment.surface} m²</p>

      {apartment.description && <p>{apartment.description}</p>}

      <button onClick={onBack}>Back</button>
      <button onClick={() => onEdit(apartment)}>Edit</button>
    </div>
  );
}
