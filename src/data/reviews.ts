export interface Review {
  id: string;
  apartmentId: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string; // ISO string
}

export const initialReviews = [
  {
    id: "rev-009",
    apartmentId: "apt-001",
    author: "Sophia",
    rating: 4,
    comment: "Bright apartment, very comfortable for short stays.",
    createdAt: "2026-02-09T09:00:00Z"
  },
  {
    id: "rev-010",
    apartmentId: "apt-001",
    author: "Liam",
    rating: 5,
    comment: "Loved the location and modern design!",
    createdAt: "2026-02-10T11:30:00Z"
  },
  {
    id: "rev-011",
    apartmentId: "apt-001",
    author: "Olivia",
    rating: 4,
    comment: "Clean and spacious, would stay again.",
    createdAt: "2026-02-11T14:15:00Z"
  },
  {
    id: "rev-012",
    apartmentId: "apt-001",
    author: "Noah",
    rating: 5,
    comment: "Perfect apartment, everything exceeded expectations!",
    createdAt: "2026-02-12T16:45:00Z"
  },

  // Reviews para apt-002
  {
    id: "rev-013",
    apartmentId: "apt-002",
    author: "Emma",
    rating: 4,
    comment: "Very cozy and conveniently located.",
    createdAt: "2026-02-13T10:20:00Z"
  },
  {
    id: "rev-014",
    apartmentId: "apt-002",
    author: "James",
    rating: 3,
    comment: "Small, but had everything we needed.",
    createdAt: "2026-02-14T12:40:00Z"
  },
  {
    id: "rev-015",
    apartmentId: "apt-002",
    author: "Ava",
    rating: 4,
    comment: "Nice ambiance, ideal for a weekend getaway.",
    createdAt: "2026-02-15T15:05:00Z"
  },
  {
    id: "rev-016",
    apartmentId: "apt-002",
    author: "Ethan",
    rating: 5,
    comment: "Super cozy, would definitely recommend!",
    createdAt: "2026-02-16T17:30:00Z"
  },

  // Reviews para apt-003
  {
    id: "rev-017",
    apartmentId: "apt-003",
    author: "Mia",
    rating: 5,
    comment: "Perfect for families, lots of space and light.",
    createdAt: "2026-02-17T09:50:00Z"
  },
  {
    id: "rev-018",
    apartmentId: "apt-003",
    author: "Lucas",
    rating: 4,
    comment: "Very comfortable, great neighborhood.",
    createdAt: "2026-02-18T11:25:00Z"
  },
  {
    id: "rev-019",
    apartmentId: "apt-003",
    author: "Isabella",
    rating: 5,
    comment: "Loved it! Clean, spacious, perfect for kids.",
    createdAt: "2026-02-19T13:40:00Z"
  },
  {
    id: "rev-020",
    apartmentId: "apt-003",
    author: "Mason",
    rating: 4,
    comment: "Nice apartment with plenty of room.",
    createdAt: "2026-02-20T16:10:00Z"
  },

  // Reviews para apt-004
  {
    id: "rev-021",
    apartmentId: "apt-004",
    author: "Charlotte",
    rating: 5,
    comment: "Quiet and elegant, very enjoyable stay.",
    createdAt: "2026-02-21T09:00:00Z"
  },
  {
    id: "rev-022",
    apartmentId: "apt-004",
    author: "Henry",
    rating: 4,
    comment: "Lovely view, comfortable and well-kept.",
    createdAt: "2026-02-22T11:15:00Z"
  },
  {
    id: "rev-023",
    apartmentId: "apt-004",
    author: "Amelia",
    rating: 4,
    comment: "Pleasant apartment, everything we needed.",
    createdAt: "2026-02-23T14:30:00Z"
  },
  {
    id: "rev-024",
    apartmentId: "apt-004",
    author: "Jack",
    rating: 5,
    comment: "Fantastic stay, will come back for sure!",
    createdAt: "2026-02-24T16:50:00Z"
  },
  {
       id: "rev-025",
    apartmentId: "apt-005",
    author: "Lily",
    rating: 3,
    comment: "Charming attic, cozy but a bit small.",
    createdAt: "2026-02-25T10:10:00Z"
  },
  {
    id: "rev-026",
    apartmentId: "apt-005",
    author: "Oliver",
    rating: 4,
    comment: "Quaint place, perfect for a short stay.",
    createdAt: "2026-02-26T12:25:00Z"
  },
  {
    id: "rev-027",
    apartmentId: "apt-005",
    author: "Sophia",
    rating: 3,
    comment: "Nice character, but limited space.",
    createdAt: "2026-02-27T14:40:00Z"
  },
  {
    id: "rev-028",
    apartmentId: "apt-005",
    author: "Henry",
    rating: 4,
    comment: "Very cozy and charming attic, we enjoyed it.",
    createdAt: "2026-02-28T16:55:00Z"
  },

  // Reviews para apt-006
  {
    id: "rev-029",
    apartmentId: "apt-006",
    author: "Emma",
    rating: 5,
    comment: "Amazing location, walking distance to everything!",
    createdAt: "2026-03-01T09:15:00Z"
  },
  {
    id: "rev-030",
    apartmentId: "apt-006",
    author: "Liam",
    rating: 5,
    comment: "Excellent apartment, very convenient and clean.",
    createdAt: "2026-03-02T11:30:00Z"
  },
  {
    id: "rev-031",
    apartmentId: "apt-006",
    author: "Olivia",
    rating: 4,
    comment: "Great place near Parc Güell, very comfortable.",
    createdAt: "2026-03-03T13:45:00Z"
  },
  {
    id: "rev-032",
    apartmentId: "apt-006",
    author: "Noah",
    rating: 5,
    comment: "Perfect stay, highly recommend this location!",
    createdAt: "2026-03-04T16:00:00Z"
  },

  // Reviews para apt-007
  {
    id: "rev-033",
    apartmentId: "apt-007",
    author: "Ava",
    rating: 4,
    comment: "Elegant and well-maintained, very pleasant stay.",
    createdAt: "2026-03-05T09:20:00Z"
  },
  {
    id: "rev-034",
    apartmentId: "apt-007",
    author: "Ethan",
    rating: 4,
    comment: "Comfortable and stylish apartment, nice experience.",
    createdAt: "2026-03-06T11:35:00Z"
  },
  {
    id: "rev-035",
    apartmentId: "apt-007",
    author: "Mia",
    rating: 5,
    comment: "Loved the apartment, very clean and classy.",
    createdAt: "2026-03-07T13:50:00Z"
  },
  {
    id: "rev-036",
    apartmentId: "apt-007",
    author: "Lucas",
    rating: 4,
    comment: "Great apartment, perfect for a short stay.",
    createdAt: "2026-03-08T16:05:00Z"
  },

  // Reviews para apt-008
  {
    id: "rev-037",
    apartmentId: "apt-008",
    author: "Isabella",
    rating: 5,
    comment: "Stunning penthouse with amazing rooftop views!",
    createdAt: "2026-03-09T09:30:00Z"
  },
  {
    id: "rev-038",
    apartmentId: "apt-008",
    author: "Mason",
    rating: 5,
    comment: "Fantastic experience, very luxurious and bright.",
    createdAt: "2026-03-10T11:45:00Z"
  },
  {
    id: "rev-039",
    apartmentId: "apt-008",
    author: "Charlotte",
    rating: 4,
    comment: "Beautiful penthouse, excellent location.",
    createdAt: "2026-03-11T14:00:00Z"
  },
  {
    id: "rev-040",
    apartmentId: "apt-008",
    author: "Henry",
    rating: 5,
    comment: "Amazing stay! Rooftop view was unforgettable.",
    createdAt: "2026-03-12T16:15:00Z"
  }
];

