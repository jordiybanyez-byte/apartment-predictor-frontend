import type { Apartment } from "../data/apartments";

type Props = {
  apartments: Apartment[];
  onSelect: (apt: Apartment) => void;
  onDelete: (id: string) => void;
};

export function ApartmentList({ apartments, onSelect, onDelete }: Props) {
  if (apartments.length === 0) {
    return <p>No apartments available.</p>;
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <div key={apartment.id} className="card">
          <h3>{apartment.title}</h3>
          <p>{apartment.location}</p>
          <p>{apartment.price} €</p>

          <button onClick={() => onSelect(apartment)}>View</button>
          <button onClick={() => onDelete(apartment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
