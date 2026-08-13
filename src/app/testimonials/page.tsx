import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import { AvailabilitySection, Showcase, Testimonials } from "@/components/site/sections";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Testimonials & Reviews | Venus Park Convention Hall",
  description:
    "Reviews from couples, families, colleges and companies who have hosted weddings, conferences and celebrations at Venus Park.",
  openGraph: {
    title: "Client Testimonials — Venus Park",
    description: "Read what couples, families and companies say about hosting with us.",
    url: "/testimonials",
  },
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Families, Colleges and Companies"
        description="Every review below comes from an event hosted in our halls — weddings, conferences, graduations and milestone birthdays."
        image={images.dining}
      />
      <Testimonials />
      <AvailabilitySection />
      <Showcase />
    </>
  );
}
