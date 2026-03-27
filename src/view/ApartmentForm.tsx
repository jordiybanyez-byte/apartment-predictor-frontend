import { useState } from "react";
import type { Apartment } from "../data/apartments";

interface Props {
  onSave: (apt: Apartment) => void;
  onCancel: () => void;
}

export function ApartmentForm({ onSave, onCancel }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [lat, setLat] = useState("41.387"); // coordenada por defecto
  const [lng, setLng] = useState("2.1699"); // coordenada por defecto

  return (
    <div>
      <h2>New Apartment</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />

      <input
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
      />

      <button
        onClick={() =>
          onSave({
            id: crypto.randomUUID(),
            title,
            price: 1000,
            rooms: 1,
            bathrooms: 1,
            surface: 50,
            location: "Barcelona",
            createdAt: new Date().toISOString(),
            images: [image || "/images/placeholder.jpg"],
            publicTransport: ["L1", "Bus H10"],
            propertyType: "hipoteca",
            coords: [parseFloat(lat), parseFloat(lng)], // coordenadas válidas
          })
        }
      >
        Save
      </button>

      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}