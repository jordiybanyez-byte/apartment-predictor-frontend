import { useState } from "react";
import type { Apartment, ApartmentFormData } from "../data/Apartment";
import { useApartments } from "../data/useApartments";
import ApartmentUpdate from "./ApartmentUpdate";
import ApartmentListContainer from "./ApartmentListContainer";
import ApartmentDetail from "./ApartmentDetail";

interface ApartmentListProps {
  refreshTrigger: number;
  onUpdateSubmit: (formData: ApartmentFormData, id: number) => Promise<boolean>;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

const ApartmentList = ({ refreshTrigger, onUpdateSubmit, onDelete, isDeleting }: ApartmentListProps) => {
  const { apartments, isLoading, isAxiosError } = useApartments(refreshTrigger);

  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  if (isLoading) return <p>Loading...</p>;
  if (isAxiosError) return <p>Error loading apartments.</p>;

  const handleDetail = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setShowDetail(true);
    setShowUpdateForm(false);
  };

  const handleUpdate = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setShowUpdateForm(true);
    setShowDetail(false);
  };

  const handleFormSuccess = () => {
    setShowUpdateForm(false);
    setSelectedApartment(null);
  };

  const handleCancel = () => {
    setShowUpdateForm(false);
    setShowDetail(false);
    setSelectedApartment(null);
  };

  return (
    <>
      <h1>Apartments</h1>

      {showUpdateForm && selectedApartment && (
        <div className="card update-form-container">
          <ApartmentUpdate
            apartment={selectedApartment}
            onSubmit={onUpdateSubmit}
            onSuccess={handleFormSuccess}
            onCancel={handleCancel}
          />
        </div>
      )}

      {showDetail && selectedApartment && (
        <ApartmentDetail apartment={selectedApartment} onClose={handleCancel} onUpdateSubmit={onUpdateSubmit} />
      )}

      <ApartmentListContainer
        apartments={apartments}
        onDetail={handleDetail}
        onUpdate={handleUpdate}
        onDelete={onDelete}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ApartmentList;