import type { Apartment } from "../data/apartments";

interface Props {
  apartment: Apartment;
  onBack: () => void;
}

export function ApartmentDetail({ apartment, onBack }: Props) {
  return (
    <div>
      <button onClick={onBack}>← Back</button>

      <h2>{apartment.title}</h2>

      <div className="detail-gallery">
          {apartment.images.map((img, i) => (
          <img key={i} src={img} alt={`${apartment.title} ${i + 1}`} />
      ))}
  </div>


      <p>{apartment.description}</p>
      <p><strong>{apartment.price} €</strong> / month</p>
      <p>{apartment.rooms} rooms · {apartment.bathrooms} bathrooms</p>
      <p>{apartment.surface} m²</p>
    </div>
  );
}
