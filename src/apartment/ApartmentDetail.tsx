import { useState } from "react";
import type { Apartment, ApartmentFormData } from "../data/Apartment";
import ApartmentUpdate from "./ApartmentUpdate";

interface ApartmentDetailProps {
  apartment: Apartment;
  onClose: () => void;
  onUpdateSubmit: (formData: ApartmentFormData, apartmentId: number) => Promise<boolean>;
}

const ApartmentDetail = ({ apartment, onClose, onUpdateSubmit }: ApartmentDetailProps) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!apartment) return null;

  const handleEditSuccess = () => setIsEditing(false);

  return (
    <div className="apartment-detail-overlay">
      <div className="apartment-detail-modal">
        <div className="apartment-detail-header">
          <h2>Apartment Details</h2>
          <div className="header-actions">
            {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
            <button onClick={onClose} className="close-btn">&times;</button>
          </div>
        </div>

        <div className="card apartment-detail-content">
          {isEditing ? (
            <ApartmentUpdate
              apartment={apartment}
              onSubmit={onUpdateSubmit}
              onSuccess={handleEditSuccess}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <div>
                <strong>ID:</strong> {apartment.id} | <strong>Price:</strong> ${apartment.price}
              </div>
              <div>
                <strong>Area:</strong> {apartment.area} sq ft | <strong>Bedrooms:</strong> {apartment.bedrooms} | <strong>Bathrooms:</strong> {apartment.bathrooms} | <strong>Stories:</strong> {apartment.stories}
              </div>
              <div>
                <strong>Main Road:</strong> {apartment.mainroad} | <strong>Parking:</strong> {apartment.parking} | <strong>Guestroom:</strong> {apartment.guestroom}
              </div>
              <div>
                <strong>Basement:</strong> {apartment.basement} | <strong>Hot Water Heating:</strong> {apartment.hotwaterheating} | <strong>Air Conditioning:</strong> {apartment.airconditioning} | <strong>Preferred Area:</strong> {apartment.prefarea}
              </div>
              <div>
                <strong>Furnishing:</strong> {apartment.furnishingstatus}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;