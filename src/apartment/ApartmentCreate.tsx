import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ApartmentFormData, FurnishingStatus } from "../data/apartment";
import ApartmentForm from "../components/ApartmentForm";

interface ApartmentCreateProps {
  onSubmit: (data: ApartmentFormData) => Promise<boolean>;
  isLoading?: boolean;
  error?: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const ApartmentCreate = ({ onSubmit, isLoading, error, onSuccess, onCancel }: ApartmentCreateProps) => {
  const [formData, setFormData] = useState<ApartmentFormData>({
    price: 0,
    area: 0,
    bedrooms: 0,
    bathrooms: 0,
    stories: 0,
    mainroad: false,
    parking: false,
    guestroom: false,
    basement: false,
    hotwaterheating: false,
    airconditioning: false,
    prefarea: false,
    furnishingstatus: "unfurnished" as FurnishingStatus
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
    const success = await onSubmit(formData);
    if (success !== false) {
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
      submitText="Create Apartment"
    />
  );
};

export default ApartmentCreate;