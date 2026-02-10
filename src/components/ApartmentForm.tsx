import { useState } from "react";
import type { Apartment } from "../data/apartments";

interface Props {
  onSave: (apt: Apartment) => void;
  onCancel: () => void;
}

export function ApartmentForm({ onSave, onCancel }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

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
            images: [image || "/images/placeholder.jpg"]
          })
        }
      >
        Save
      </button>

      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
