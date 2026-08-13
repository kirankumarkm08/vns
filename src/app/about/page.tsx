import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import {
  AboutVenue,
  Facilities,
  Showcase,
  Testimonials,
  WhyChooseUs,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Venus Park — Our Convention Hall Story",
  description:
    "Eighteen years and 2,400+ events. Learn how Venus Park supports weddings, corporate events and community gatherings with one coordinated team.",
  openGraph: {
    title: "About Venus Park",
    description: "A purpose-built event venue with in-house catering, decoration and coordination.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Eighteen Years of Hosting Occasions That Matter"
        description="Built in 2008 as a dedicated convention hall, Venus Park has hosted more than 2,400 weddings, conferences and community events."
        image={images.interior}
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <Link href="/booking">Enquiry</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/venue">Explore the Venue</Link>
            </Button>
          </>
        }
      />
      <AboutVenue />
      <WhyChooseUs />
      <Facilities />
      <Testimonials compact />
      <Showcase />
    </>
  );
}
