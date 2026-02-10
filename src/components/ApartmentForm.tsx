import { useState } from "react";
import type { Apartment } from "../data/apartments";

type Props = {
  initialData?: Apartment;
  onSave: (apt: Apartment) => void;
  onCancel: () => void;
};

export function ApartmentForm({ initialData, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Apartment>(
    initialData ?? {
      id: Date.now().toString(),
      title: "",
      price: 0,
      rooms: 0,
      bathrooms: 0,
      surface: 0,
      location: "",
      createdAt: new Date().toISOString()
    }
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "price" || name === "rooms"
        ? Number(value)
        : value
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
      />

      <input
        name="rooms"
        type="number"
        value={form.rooms}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}
