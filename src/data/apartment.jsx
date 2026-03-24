// src/data/apartment.ts

export type FurnishingStatus = "unfurnished" | "semi-furnished" | "furnished";

export interface Apartment {
  id: number;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  stories: number;
  mainroad: 0 | 1;
  parking: 0 | 1;
  guestroom: 0 | 1;
  basement: 0 | 1;
  hotwaterheating: 0 | 1;
  airconditioning: 0 | 1;
  prefarea: 0 | 1;
  furnishingstatus: FurnishingStatus;
}

export interface ApartmentFormData {
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  stories: number;
  mainroad: boolean;
  parking: boolean;
  guestroom: boolean;
  basement: boolean;
  hotwaterheating: boolean;
  airconditioning: boolean;
  prefarea: boolean;
  furnishingstatus: FurnishingStatus;
}