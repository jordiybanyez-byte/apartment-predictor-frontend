import { useState } from "react";
import type { Apartment } from "../data/apartments";
import type { Review } from "../data/reviews";

interface Props {
  apartment: Apartment;
  onSave: (review: Review) => void;
  onCancel: () => void;
}

export function ApartmentReviewForm({ apartment, onSave, onCancel }: Props) {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: "rev-" + Date.now(),
      apartmentId: apartment.id,
      author,
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };
    onSave(newReview);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Review for {apartment.title}</h3>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating 1-5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min={1}
        max={5}
        required
      />
      <textarea
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button type="submit">Save Review</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
