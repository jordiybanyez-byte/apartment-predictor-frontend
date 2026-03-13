import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Apartment, ApartmentFormData, FurnishingStatus } from "../data/apartment";
import ApartmentForm from "../components/ApartmentForm";

interface ApartmentUpdateProps {
  apartment: Apartment;
  onSubmit: (data: ApartmentFormData, apartmentId: number) => Promise<boolean>;
  isLoading?: boolean;
  error?: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const ApartmentUpdate = ({ apartment, onSubmit, isLoading, error, onSuccess, onCancel }: ApartmentUpdateProps) => {
  const [formData, setFormData] = useState<ApartmentFormData>({
    price: apartment.price,
    area: apartment.area,
    bedrooms: apartment.bedrooms,
    bathrooms: apartment.bathrooms,
    stories: apartment.stories,
    mainroad: apartment.mainroad === 1,
    parking: apartment.parking === 1,
    guestroom: apartment.guestroom === 1,
    basement: apartment.basement === 1,
    hotwaterheating: apartment.hotwaterheating === 1,
    airconditioning: apartment.airconditioning === 1,
    prefarea: apartment.prefarea === 1,
    furnishingstatus: apartment.furnishingstatus as FurnishingStatus
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value) || value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await onSubmit(formData, apartment.id);
    if (success) {
      onSuccess();
    }
  };

  return (
    <ApartmentForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      onCancel={onCancel}
      submitText="Update Apartment"
    />
  );
};

export default ApartmentUpdate;