import type { Apartment } from "../data/apartments";

interface Review {
  id: string;
  apartmentId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface Props {
  apartment: Apartment;
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

  const apartmentReviews = reviews.filter(
    (review) => review.apartmentId === apartment.id
  );

  const averageRating =
    apartmentReviews.length > 0
      ? (
          apartmentReviews.reduce((acc, r) => acc + r.rating, 0) /
          apartmentReviews.length
        ).toFixed(1)
      : "No ratings";

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="review-container">
      <h2>Reviews for {apartment.title}</h2>
      <p>{apartment.location}</p>

      <h3>Average Rating: {averageRating} ⭐</h3>

      {apartmentReviews.length === 0 && (
        <p>No reviews yet.</p>
      )}

      {apartmentReviews.map((review) => (
        <div key={review.id} className="review-card">

          <button
            className="favorite-review-btn"
            onClick={() => onToggleFavoriteReview(review.id)}
          >
            {favoriteReviews.includes(review.id) ? "❤️" : "🤍"}
          </button>

          <h4>{review.author}</h4>
          <p className="stars">{renderStars(review.rating)}</p>
          <p>{review.comment}</p>
          <small>
            {new Date(review.createdAt).toLocaleDateString()}
          </small>
        </div>
      ))}

      <button onClick={onBack}>⬅ Back</button>
    </div>
  );
}
