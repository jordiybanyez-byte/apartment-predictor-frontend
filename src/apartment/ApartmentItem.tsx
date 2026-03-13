import type { Apartment } from "../data/apartment";
import ApartmentReviewSummary from "./ApartmentReviewSummary";

interface ApartmentItemProps {
  apartment: Apartment;
  onDetail: (apartment: Apartment) => void;
  onUpdate: (apartment: Apartment) => void;
  onDelete: (apartmentId: number) => void;
  isDeleting: boolean;
}

const ApartmentItem = ({ apartment, onDetail, onUpdate, onDelete, isDeleting }: ApartmentItemProps) => {
  return (
    <li className="apartment-item card" style={{ position: "relative" }}>
      <div className="apartment-header gray-text">
        ID: {apartment.id} | ${apartment.price}
      </div>

      <div className="apartment-grid">
        <div><strong>Area:</strong> {apartment.area} sq ft</div>
        <div><strong>Bedrooms:</strong> {apartment.bedrooms}</div>
        <div><strong>Bathrooms:</strong> {apartment.bathrooms}</div>
        <div><strong>Stories:</strong> {apartment.stories}</div>
      </div>

      <div className="apartment-actions">
        <button onClick={() => onDetail(apartment)} disabled={isDeleting}>Detail</button>
        <button onClick={() => onUpdate(apartment)} disabled={isDeleting}>Update</button>
        <button onClick={() => onDelete(apartment.id)} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      <ApartmentReviewSummary apartments={[apartment]} />
    </li>
  );
};

export default ApartmentItem;