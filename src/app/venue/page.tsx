import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import { ContactSection, Facilities, Gallery, LayoutCapacity } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "The Venue — Halls, Layouts & Capacity | Venus Park",
  description:
    "Column-free main hall for 1,000 guests, a 650-seat dining hall, 24 guest rooms, 220 parking spaces and six configurable layouts.",
  openGraph: {
    title: "The Venue — Venus Park",
    description: "Explore halls, layouts, capacity and facilities at Venus Park.",
    url: "/venue",
  },
  alternates: { canonical: "/venue" },
};

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="The venue"
        title="A Hall Built to Be Configured Around You"
        description="Column-free floor, separate dining hall, modular stage and on-site guest rooms — set six different ways depending on your event."
        image={images.hero}
        actions={
          <Button asChild variant="gold" size="xl">
            <Link href="/booking">Enquiry</Link>
          </Button>
        }
      />
      <LayoutCapacity />
      <Facilities />
      <Gallery compact />
      <ContactSection />
    </>
  );
}
