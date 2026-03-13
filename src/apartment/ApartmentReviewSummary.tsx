import React from "react";
import ApartmentItem from "./ApartmentItem";

interface Apartment {
  id: number;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  stories: number;
  mainroad?: string;
  parking?: number;
  guestroom?: string;
  basement?: string;
  hotwaterheating?: string;
  airconditioning?: string;
  prefarea?: string;
  furnishingstatus?: string;
}

interface ApartmentListContainerProps {
  apartments: Apartment[];
  onDetail: (apartment: Apartment) => void;
  onUpdate: (apartment: Apartment) => void;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

const ApartmentListContainer: React.FC<ApartmentListContainerProps> = ({
  apartments,
  onDetail,
  onUpdate,
  onDelete,
  isDeleting,
}) => {
  return (
    <ul className="apartment-list">
      {
        // Map through apartments and display their details
        // Each apartment is rendered as a list item with key as apartment.id
        // The details include price, area, bedrooms, bathrooms, stories, and features
      }
      {apartments.map((apartment) => (
        <ApartmentItem
          key={apartment.id}
          apartment={apartment}
          onDetail={onDetail}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      ))}
    </ul>
  );
};

export default ApartmentListContainer;