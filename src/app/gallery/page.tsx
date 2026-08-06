import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import { AvailabilitySection, Gallery, Showcase } from "@/components/site/sections";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Gallery — Weddings, Receptions & Events | Venus Park",
  description:
    "Browse photographs of weddings, receptions, decorations, dining setups, corporate events, stage designs and venue interiors at Venus Park.",
  openGraph: {
    title: "Gallery — Venus Park",
    description: "Photographs of real celebrations hosted in our halls.",
    url: "/gallery",
  },
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Celebrations Hosted at Venus Park"
        description="Filter by weddings, receptions, decorations, dining, corporate events, stage setups and venue interiors."
        image={images.weddings}
      />
      <Gallery />
      <AvailabilitySection />
      <Showcase />
    </>
  );
}
