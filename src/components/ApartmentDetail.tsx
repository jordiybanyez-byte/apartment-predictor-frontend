import type { Apartment } from "../data/apartments";
import type { Review } from "../data/reviews";

interface Props {
  apartment: Apartment;
  reviews: Review[];
  onBack: () => void;
}

export function ApartmentDetail({ apartment, reviews, onBack }: Props) {
  // Filtrar reviews del apartamento actual
  const apartmentReviews = reviews.filter(
    (r) => r.apartmentId === apartment.id
  );

  // Ordenar por fecha (más reciente primero)
  const sortedReviews = [...apartmentReviews].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );

  // Tomar las dos primeras
  const topTwoReviews = sortedReviews.slice(0, 2);

  return (
    <div className="apartment-detail">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <h2>{apartment.title}</h2>

      <div className="detail-layout">
        {/* GALERÍA */}
        <div className="detail-gallery">
          {apartment.images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              alt={`${apartment.title} ${i + 1}`}
            />
          ))}
        </div>

        {/* REVIEWS LATERAL */}
        <div className="side-review">
          {topTwoReviews.length > 0 ? (
            topTwoReviews.map((review) => (
              <div key={review.id} className="single-review">
                <p>
                  <strong>{review.author}</strong>
                </p>
                <p>⭐ {review.rating} / 5</p>
                <p>{review.comment}</p>
                <small>
                  {new Date(review.createdAt).toLocaleDateString()}
                </small>
                <hr />
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </div>

      <div className="apartment-info">
        <p>
          {apartment.location} Location
        </p>
        
        <p className="meta">
          {apartment.rooms} Rooms 
          </p>
          <p>
          {apartment.bathrooms} Bathrooms
        </p>
        <p className="meta">{apartment.surface} m²</p>
        <p className="description">{apartment.description}</p>
        <p>
          {apartment.publicTransport} 
        </p>
        <p className="price">{apartment.price} € / month</p>
        
      </div>
    </div>
  );
}