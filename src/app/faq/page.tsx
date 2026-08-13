import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import { AvailabilitySection, ContactSection, FAQSection } from "@/components/site/sections";
import { JsonLd } from "@/components/site/JsonLd";
import { images } from "@/data/images";
import { faqs } from "@/data/venue";

export const metadata: Metadata = {
  title: "FAQ — Capacity, Parking, Catering & Booking | Venus Park",
  description:
    "Answers on guest capacity, parking, external caterers, decoration, guest rooms, air conditioning, backup power, advance payments and venue visits.",
  openGraph: {
    title: "Frequently Asked Questions — Venus Park",
    description: "Everything couples, planners and companies ask before booking our venue.",
    url: "/faq",
  },
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers Before You Book"
        description="Capacity, parking, catering, decoration, guest rooms, advance payments and venue visits — explained plainly."
        image={images.interior}
      />
      <FAQSection />
      <AvailabilitySection />
      <ContactSection />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
