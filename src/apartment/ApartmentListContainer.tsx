import type { Apartment } from "../data/Apartment";
import ApartmentItem from "./ApartmentItem";

interface ApartmentListContainerProps {
  apartments: Apartment[];
  onDetail: (apartment: Apartment) => void;
  onUpdate: (apartment: Apartment) => void;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

const ApartmentListContainer = ({ apartments, onDetail, onUpdate, onDelete, isDeleting }: ApartmentListContainerProps) => {
  return (
    <ul className="apartment-list">
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