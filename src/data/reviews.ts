// src/data/reviews.ts

export interface Review {
  id: string;
  apartmentId: string;
  author: string;
  rating: number; // 1 a 5
  comment: string;
  createdAt: string; // ISO string
}

export const initialReviews: Review[] = [
  {
    id: "rev-001",
    apartmentId: "apt-001",
    author: "Alice",
    rating: 5,
    comment: "Amazing apartment, very clean and bright!",
    createdAt: "2026-02-01T10:00:00Z"
  },
  {
    id: "rev-002",
    apartmentId: "apt-002",
    author: "Bob",
    rating: 4,
    comment: "Cozy studio, perfect for a couple.",
    createdAt: "2026-02-02T12:30:00Z"
  },
  {
    id: "rev-003",
    apartmentId: "apt-003",
    author: "Carla",
    rating: 5,
    comment: "Spacious flat, great for family stay.",
    createdAt: "2026-02-03T14:45:00Z"
  },
  {
    id: "rev-004",
    apartmentId: "apt-004",
    author: "David",
    rating: 4,
    comment: "Nice view, comfortable and quiet.",
    createdAt: "2026-02-04T09:15:00Z"
  },
  {
    id: "rev-005",
    apartmentId: "apt-005",
    author: "Eva",
    rating: 3,
    comment: "Small attic, but very charming.",
    createdAt: "2026-02-05T11:00:00Z"
  },
  {
    id: "rev-006",
    apartmentId: "apt-006",
    author: "Frank",
    rating: 5,
    comment: "Excellent location near Parc Güell.",
    createdAt: "2026-02-06T16:20:00Z"
  },
  {
    id: "rev-007",
    apartmentId: "apt-007",
    author: "Grace",
    rating: 4,
    comment: "Elegant flat, very well maintained.",
    createdAt: "2026-02-07T10:50:00Z"
  },
  {
    id: "rev-008",
    apartmentId: "apt-008",
    author: "Hugo",
    rating: 5,
    comment: "Penthouse with stunning rooftop view!",
    createdAt: "2026-02-08T12:00:00Z"
  }
];
