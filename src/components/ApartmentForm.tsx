import React from "react";
import type { ApartmentFormData } from "../data/Apartment";

interface ApartmentFormProps {
  formData: ApartmentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
  onCancel: () => void;
  submitText: string;
}

const ApartmentForm = ({
  formData,
  handleChange,
  handleSubmit,
  isLoading = false,
  error,
  onCancel,
  submitText,
}: ApartmentFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="apartment-form">
      {error && <p className="error-text">{error}</p>}

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Area (sq ft):</label>
        <input
          type="number"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Stories:</label>
        <input
          type="number"
          name="stories"
          value={formData.stories}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="mainroad"
            checked={formData.mainroad}
            onChange={handleChange}
          />
          Main Road
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="parking"
            checked={formData.parking}
            onChange={handleChange}
          />
          Parking
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="guestroom"
            checked={formData.guestroom}
            onChange={handleChange}
          />
          Guestroom
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="basement"
            checked={formData.basement}
            onChange={handleChange}
          />
          Basement
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="hotwaterheating"
            checked={formData.hotwaterheating}
            onChange={handleChange}
          />
          Hot Water Heating
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="airconditioning"
            checked={formData.airconditioning}
            onChange={handleChange}
          />
          Air Conditioning
        </label>
      </div>

      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="prefarea"
            checked={formData.prefarea}
            onChange={handleChange}
          />
          Preferred Area
        </label>
      </div>

      <div className="form-group">
        <label>Furnishing Status:</label>
        <select
          name="furnishingstatus"
          value={formData.furnishingstatus}
          onChange={handleChange}
        >
          <option value="unfurnished">Unfurnished</option>
          <option value="semi-furnished">Semi-furnished</option>
          <option value="furnished">Furnished</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" disabled={isLoading}>
          {submitText}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ApartmentForm;