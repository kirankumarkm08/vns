import heroHall from "@/assets/hero-hall.jpg";
import venueInterior from "@/assets/venue-interior.jpg";
import catWeddings from "@/assets/cat-weddings.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import catDining from "@/assets/cat-dining.jpg";
import catCelebrations from "@/assets/cat-celebrations.jpg";

export const images = {
  hero: heroHall.src,
  interior: venueInterior.src,
  weddings: catWeddings.src,
  corporate: catCorporate.src,
  dining: catDining.src,
  celebrations: catCelebrations.src,
} as const;

export type ImageKey = keyof typeof images;

/** Gallery items — real photography from public/gallery. */
export const galleryItems: { src: string; alt: string; category: string; tall?: boolean }[] = [
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.13.59%20PM.jpeg",
    alt: "Gallery photo 1",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.00%20PM%20(1).jpeg",
    alt: "Gallery photo 2",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.00%20PM.jpeg",
    alt: "Gallery photo 3",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.01%20PM%20(1).jpeg",
    alt: "Gallery photo 4",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.01%20PM.jpeg",
    alt: "Gallery photo 5",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.02%20PM%20(1).jpeg",
    alt: "Gallery photo 6",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.02%20PM.jpeg",
    alt: "Gallery photo 7",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.03%20PM%20(1).jpeg",
    alt: "Gallery photo 8",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.03%20PM.jpeg",
    alt: "Gallery photo 9",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.04%20PM%20(1).jpeg",
    alt: "Gallery photo 10",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.04%20PM.jpeg",
    alt: "Gallery photo 11",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.05%20PM.jpeg",
    alt: "Gallery photo 12",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.06%20PM%20(1).jpeg",
    alt: "Gallery photo 13",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.06%20PM.jpeg",
    alt: "Gallery photo 14",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.07%20PM%20(1).jpeg",
    alt: "Gallery photo 15",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.07%20PM.jpeg",
    alt: "Gallery photo 16",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.08%20PM.jpeg",
    alt: "Gallery photo 17",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.09%20PM%20(1).jpeg",
    alt: "Gallery photo 18",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.09%20PM.jpeg",
    alt: "Gallery photo 19",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.10%20PM%20(1).jpeg",
    alt: "Gallery photo 20",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.10%20PM.jpeg",
    alt: "Gallery photo 21",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.11%20PM.jpeg",
    alt: "Gallery photo 22",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.12%20PM%20(1).jpeg",
    alt: "Gallery photo 23",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.12%20PM.jpeg",
    alt: "Gallery photo 24",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.13%20PM%20(1).jpeg",
    alt: "Gallery photo 25",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.13%20PM.jpeg",
    alt: "Gallery photo 26",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.14%20PM.jpeg",
    alt: "Gallery photo 27",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.15%20PM%20(1).jpeg",
    alt: "Gallery photo 28",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.15%20PM.jpeg",
    alt: "Gallery photo 29",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.16%20PM%20(1).jpeg",
    alt: "Gallery photo 30",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.16%20PM.jpeg",
    alt: "Gallery photo 31",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.17%20PM.jpeg",
    alt: "Gallery photo 32",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.18%20PM%20(1).jpeg",
    alt: "Gallery photo 33",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.18%20PM.jpeg",
    alt: "Gallery photo 34",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.19%20PM.jpeg",
    alt: "Gallery photo 35",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.20%20PM%20(1).jpeg",
    alt: "Gallery photo 36",
    category: "Weddings",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.20%20PM.jpeg",
    alt: "Gallery photo 37",
    category: "Receptions",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.21%20PM%20(1).jpeg",
    alt: "Gallery photo 38",
    category: "Decorations",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.21%20PM.jpeg",
    alt: "Gallery photo 39",
    category: "Dining",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.22%20PM.jpeg",
    alt: "Gallery photo 40",
    category: "Corporate Events",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.23%20PM%20(1).jpeg",
    alt: "Gallery photo 41",
    category: "Stage Setups",
    tall: true,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.23%20PM.jpeg",
    alt: "Gallery photo 42",
    category: "Venue Interiors",
    tall: false,
  },
  {
    src: "/gallery/WhatsApp%20Image%202026-08-03%20at%202.14.24%20PM.jpeg",
    alt: "Gallery photo 43",
    category: "Weddings",
    tall: true,
  },
];
