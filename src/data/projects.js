// Helper: images("tech-park", 5) -> /images/projects/tech-park/1.jpg ... 5.jpg
const images = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${folder}/${i + 1}.jpg`);

export const projects = [
  {
    id: "Herballife",
    title: "HerbalLife Office",
    area: "45,000 sq. ft.",
    year: "2025",
    description:
      "A bright, collaborative office with open work zones, quiet pods and a lively central hub for the team.",
    images: images("Herballife", 9),
  },
  {
    id: "Mahindra Showroom",
    title: "Mahindra Showroom",
    area: "18,000 sq. ft.",
    year: "2025",
    description:
      "A flexible studio space built for brainstorming, shoots and client presentations.",
    images: images("Mahindra", 6),
  },
  {
    id: "NewTrace",
    title: "NewTrace Office",
    area: "60,000 sq. ft.",
    year: "2024",
    description:
      "A refined corporate floor with executive suites, boardrooms and focused work areas.",
    images: images("Newtrace", 3),
  },
  
  {
    id: "innovation-lab",
    title: "Virya Office",
    area: "22,000 sq. ft.",
    year: "2024",
    description:
      "A tech-forward lab and office combining workshop areas with sleek collaboration spaces.",
    images: images("Virya", 16),
  },
  {
    id: "Firepro",
    title: "corporate-lounge",
    area: "12,000 sq. ft.",
    year: "2023",
    description:
      "A warm reception and lounge designed to give every visitor a strong first impression.",
    images: images("Firepro", 4),
  },
  {
    id: "srastea-cafe",
    title: "Srastea Cafe",
    area: "30,000 sq. ft.",
    year: "2024",
    description:
        "A vibrant cafe space designed for comfortable seating, relaxing conversations, and a welcoming atmosphere.",
    images: images("Cafe", 7),
  },
  
];