import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PackageGrid, PricingNote } from "@/components/site/Packages";
import {
  AvailabilitySection,
  FAQSection,
  Gallery,
  Showcase,
  Testimonials,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/images";

const included = [
  "Bridal and groom suites with private mirrors and seating",
  "Modular stage up to 12 metres wide for mandaps and backdrops",
  "Separate dining hall for 650 guests, served in sittings",
  "24 on-site guest rooms for travelling family",
  "Decoration, catering and photography coordination in one contract",
  "Rehearsal access the evening before, subject to availability",
];

export const metadata: Metadata = {
  title: "Wedding Venue & Reception Hall | Venus Park",
  description:
    "Host your wedding and reception for up to 1,000 guests with bridal suites, custom stage decoration, catering and guest rooms on site.",
  openGraph: {
    title: "Weddings at Venus Park",
    description: "Ceremony, reception and dining spaces with full wedding coordination.",
    url: "/weddings",
  },
  alternates: { canonical: "/weddings" },
};

export default function WeddingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Weddings & receptions"
        title="Your Wedding, Held in a Hall That Can Take the Whole Family"
        description="Ceremony, muhurtham, reception and dining — planned as one day, coordinated by one team."
        image={images.weddings}
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <Link href="/booking">Check Your Date</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/packages/platinum">Platinum Package</Link>
            </Button>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Wedding support"
            title="Planned Around Your Timeline, Not Ours"
            description="From the morning ceremony through to the evening reception, your coordinator manages vendor access, stage changeovers and dining sittings so the family can be present for the day."
          />
          <ul className="space-y-4">
            {included.map((f, i) => (
              <Reveal key={f} index={i % 3}>
                <li className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {f}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Packages" title="Wedding Packages" align="center" />
        <PackageGrid />
        <PricingNote />
      </Section>

      <Gallery compact />
      <Testimonials compact />
      <AvailabilitySection defaultPackage="Platinum" />
      <Showcase />
      <FAQSection limit={6} />
    </>
  );
}
