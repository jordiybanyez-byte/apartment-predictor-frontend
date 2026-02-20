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
  },
  {
  id: "rev-051",
  apartmentId: "apt-009",
  author: "Marina",
  rating: 5,
  comment: "Super bright and just minutes from the beach. Loved it!",
  createdAt: "2026-03-23T10:15:00Z"
},
{
  id: "rev-052",
  apartmentId: "apt-009",
  author: "Alex",
  rating: 4,
  comment: "Great area and comfortable beds. Would stay again.",
  createdAt: "2026-03-24T12:40:00Z"
},
{
  id: "rev-053",
  apartmentId: "apt-009",
  author: "Nora",
  rating: 3,
  comment: "Nice apartment but a bit noisy at night.",
  createdAt: "2026-03-25T18:05:00Z"
},

{
  id: "rev-054",
  apartmentId: "apt-010",
  author: "Lucas",
  rating: 4,
  comment: "Compact but very functional. Excellent location.",
  createdAt: "2026-03-26T09:20:00Z"
},
{
  id: "rev-055",
  apartmentId: "apt-010",
  author: "Elena",
  rating: 5,
  comment: "Very clean and modern. Perfect for short stays.",
  createdAt: "2026-03-27T11:45:00Z"
},
{
  id: "rev-056",
  apartmentId: "apt-010",
  author: "Mark",
  rating: 4,
  comment: "Good value for money in the city center.",
  createdAt: "2026-03-28T14:30:00Z"
},

{
  id: "rev-057",
  apartmentId: "apt-011",
  author: "Clara",
  rating: 5,
  comment: "Absolutely stunning property with premium finishes.",
  createdAt: "2026-03-29T16:10:00Z"
},
{
  id: "rev-058",
  apartmentId: "apt-011",
  author: "Hugo",
  rating: 5,
  comment: "Spacious, elegant and very peaceful neighborhood.",
  createdAt: "2026-03-30T10:25:00Z"
},
{
  id: "rev-059",
  apartmentId: "apt-011",
  author: "Anna",
  rating: 4,
  comment: "High-end apartment, parking was very convenient.",
  createdAt: "2026-03-31T13:50:00Z"
},

{
  id: "rev-060",
  apartmentId: "apt-012",
  author: "David",
  rating: 4,
  comment: "Perfect for families. Quiet and safe area.",
  createdAt: "2026-04-01T09:15:00Z"
},
{
  id: "rev-061",
  apartmentId: "apt-012",
  author: "Paula",
  rating: 3,
  comment: "Good space but needs minor updates.",
  createdAt: "2026-04-02T11:40:00Z"
},
{
  id: "rev-062",
  apartmentId: "apt-012",
  author: "Sergio",
  rating: 4,
  comment: "Close to parks and transport. Comfortable stay.",
  createdAt: "2026-04-03T15:05:00Z"
},

{
  id: "rev-063",
  apartmentId: "apt-013",
  author: "Irene",
  rating: 5,
  comment: "Bright and cozy. Loved the living room.",
  createdAt: "2026-04-04T10:35:00Z"
},
{
  id: "rev-064",
  apartmentId: "apt-013",
  author: "Kevin",
  rating: 4,
  comment: "Well connected and nice neighborhood vibe.",
  createdAt: "2026-04-05T13:20:00Z"
},
{
  id: "rev-065",
  apartmentId: "apt-013",
  author: "Sara",
  rating: 4,
  comment: "Comfortable and practical layout.",
  createdAt: "2026-04-06T17:45:00Z"
},

{
  id: "rev-066",
  apartmentId: "apt-014",
  author: "Victor",
  rating: 5,
  comment: "Terrace is amazing and the kitchen is modern.",
  createdAt: "2026-04-07T09:55:00Z"
},
{
  id: "rev-067",
  apartmentId: "apt-014",
  author: "Marta",
  rating: 4,
  comment: "Spacious rooms and very clean.",
  createdAt: "2026-04-08T12:10:00Z"
},
{
  id: "rev-068",
  apartmentId: "apt-014",
  author: "Jonas",
  rating: 5,
  comment: "One of the best stays I've had in Barcelona.",
  createdAt: "2026-04-09T18:30:00Z"
},

{
  id: "rev-069",
  apartmentId: "apt-015",
  author: "Andrea",
  rating: 4,
  comment: "Good potential and nice layout.",
  createdAt: "2026-04-10T10:05:00Z"
},
{
  id: "rev-070",
  apartmentId: "apt-015",
  author: "Pablo",
  rating: 3,
  comment: "Decent apartment but building is a bit old.",
  createdAt: "2026-04-11T14:25:00Z"
},
{
  id: "rev-071",
  apartmentId: "apt-015",
  author: "Lucia",
  rating: 4,
  comment: "Great metro connection and quiet street.",
  createdAt: "2026-04-12T16:50:00Z"
},

{
  id: "rev-072",
  apartmentId: "apt-016",
  author: "Bruno",
  rating: 5,
  comment: "Stylish loft with lots of personality.",
  createdAt: "2026-04-13T09:40:00Z"
},
{
  id: "rev-073",
  apartmentId: "apt-016",
  author: "Carmen",
  rating: 4,
  comment: "Very charming and well located.",
  createdAt: "2026-04-14T11:55:00Z"
},
{
  id: "rev-074",
  apartmentId: "apt-016",
  author: "Leo",
  rating: 5,
  comment: "Industrial design done right. Loved it!",
  createdAt: "2026-04-15T15:20:00Z"
},

{
  id: "rev-075",
  apartmentId: "apt-017",
  author: "Natalia",
  rating: 5,
  comment: "Sea views are breathtaking. Top quality.",
  createdAt: "2026-04-16T10:30:00Z"
},
{
  id: "rev-076",
  apartmentId: "apt-017",
  author: "Ricardo",
  rating: 4,
  comment: "Spacious duplex with excellent amenities.",
  createdAt: "2026-04-17T13:45:00Z"
},
{
  id: "rev-077",
  apartmentId: "apt-017",
  author: "Emily",
  rating: 5,
  comment: "Pool and concierge service were fantastic.",
  createdAt: "2026-04-18T18:15:00Z"
},

{
  id: "rev-078",
  apartmentId: "apt-018",
  author: "Fernando",
  rating: 4,
  comment: "Great price for the area.",
  createdAt: "2026-04-19T09:25:00Z"
},
{
  id: "rev-079",
  apartmentId: "apt-018",
  author: "Alicia",
  rating: 3,
  comment: "Simple but practical and well connected.",
  createdAt: "2026-04-20T12:35:00Z"
},
{
  id: "rev-080",
  apartmentId: "apt-018",
  author: "Mateo",
  rating: 4,
  comment: "Ideal for first-time buyers. Good neighborhood.",
  createdAt: "2026-04-21T16:05:00Z"
},
];

