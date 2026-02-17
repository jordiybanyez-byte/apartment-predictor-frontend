import type { Apartment } from "../data/apartments";
import type { Review } from "../data/reviews";

interface Props {
  apartment?: Apartment;
  reviews: Review[];
  favoriteReviews: string[];
  onToggleFavoriteReview: (id: string) => void;
  onBack: () => void;
}

export function ApartmentReview({
  apartment,
  reviews,
  favoriteReviews,
  onToggleFavoriteReview,
  onBack,
}: Props) {
  const aptReviews = apartment
    ? reviews.filter((r) => r.apartmentId === apartment.id)
    : reviews;

  const sortedReviews = [
    ...aptReviews.filter((r) => favoriteReviews.includes(r.id)),
    ...aptReviews.filter((r) => !favoriteReviews.includes(r.id)),
  ];

  return (
    <div className="reviews-container">
      <button onClick={onBack}>← Back</button>

      <h2>
        {apartment
          ? `Reviews for ${apartment.title}`
          : sortedReviews.length === 0
          ? "No Reviews"
          : "Reviews Favoritas / Mis Reviews"}
      </h2>

      {sortedReviews.length === 0 && <p>No reviews yet.</p>}

      {sortedReviews.map((r) => (
        <div
          key={r.id}
          className="review-card"
          style={{
            background: favoriteReviews.includes(r.id)
              ? "rgba(255, 223, 100, 0.2)"
              : "rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px",
            marginBottom: "12px",
          }}
        >
          <p>
            <strong>{r.author}</strong> ({r.rating}/5)
          </p>
          <p>{r.comment}</p>
          <button
            onClick={() => onToggleFavoriteReview(r.id)}
            style={{
              background: favoriteReviews.includes(r.id) ? "red" : "gray",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "4px 10px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            {favoriteReviews.includes(r.id) ? "❤️ Favorite" : "🤍 Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
}
