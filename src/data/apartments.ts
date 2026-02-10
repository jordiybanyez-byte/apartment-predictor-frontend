export interface Apartment {
  id: string;
  title: string;
  price: number;
  rooms: number;
  bathrooms: number;
  surface: number;
  location: string;
  description?: string;
  interested?: boolean;
  createdAt: string;
}

export const initialApartments: Apartment[] = [
  {
    id: "apt-001",
    title: "Bright flat in Eixample",
    price: 1250,
    rooms: 3,
    bathrooms: 1,
    surface: 85,
    location: "Barcelona, Eixample Dreta",
    description: "Recently renovated, balcony, elevator.",
    interested: false,
    createdAt: "2026-01-15T10:30:00Z"
  },
  {
    id: "apt-002",
    title: "Modern studio in Gràcia",
    price: 850,
    rooms: 1,
    bathrooms: 1,
    surface: 40,
    location: "Barcelona, Gràcia",
    description: "Perfect for students or couples.",
    interested: true,
    createdAt: "2026-01-18T12:00:00Z"
  },
  {
    id: "apt-003",
    title: "Large family flat",
    price: 1600,
    rooms: 4,
    bathrooms: 2,
    surface: 120,
    location: "Barcelona, Sant Andreu",
    createdAt: "2026-01-20T09:15:00Z"
  },
  {
    id: "apt-004",
    title: "Cozy loft near the beach",
    price: 1100,
    rooms: 2,
    bathrooms: 1,
    surface: 65,
    location: "Barcelona, Barceloneta",
    description: "Sea view, modern kitchen, sunny terrace.",
    interested: false,
    createdAt: "2026-02-01T11:00:00Z"
  },
  {
    id: "apt-005",
    title: "Charming attic in Born",
    price: 950,
    rooms: 1,
    bathrooms: 1,
    surface: 50,
    location: "Barcelona, El Born",
    description: "Wooden beams, lots of light, quiet street.",
    interested: true,
    createdAt: "2026-02-02T14:20:00Z"
  },
  {
    id: "apt-006",
    title: "Spacious apartment near Parc Güell",
    price: 1400,
    rooms: 3,
    bathrooms: 2,
    surface: 100,
    location: "Barcelona, Gràcia",
    description: "Balcony, recently renovated, parking included.",
    interested: false,
    createdAt: "2026-02-03T09:45:00Z"
  },
  {
    id: "apt-007",
    title: "Elegant flat in Sants",
    price: 1300,
    rooms: 2,
    bathrooms: 2,
    surface: 90,
    location: "Barcelona, Sants",
    description: "Modern appliances, close to transport.",
    interested: false,
    createdAt: "2026-02-04T10:15:00Z"
  },
  {
    id: "apt-008",
    title: "Penthouse with rooftop",
    price: 2000,
    rooms: 4,
    bathrooms: 3,
    surface: 150,
    location: "Barcelona, Eixample",
    description: "Rooftop terrace, panoramic views, elevator.",
    interested: true,
    createdAt: "2026-02-05T12:00:00Z"
  }
];
