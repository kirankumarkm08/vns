import type { Metadata } from "next";

import {
  CuratedPackages,
  DivineHero,
  FamilyStories,
  GrandStage,
  Pavilions,
  ReserveCta,
} from "@/components/site/celebration";

export const metadata: Metadata = {
  title: "Venus Park — Bangalore South's Most Celebrated Event Destination",
  description:
    "Twelve premium halls, grand mandaps and curated packages for weddings, receptions, sangeet, corporate events and festivals in Bangalore South.",
  openGraph: {
    title: "Venus Park — Convention Hall",
    description:
      "Where the colours of South India's festivals meet the elegance of every cherished celebration.",
    url: "/home",
  },
  alternates: { canonical: "/home" },
};

export default function HomeLanding() {
  return (
    <>
      <DivineHero />
      <Pavilions />
      <GrandStage />
      <CuratedPackages />
      <FamilyStories />
      <ReserveCta />
    </>
  );
}
