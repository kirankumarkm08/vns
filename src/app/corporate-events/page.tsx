import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PackageGrid, PricingNote } from "@/components/site/Packages";
import {
  AvailabilitySection,
  ContactSection,
  FAQSection,
  LayoutCapacity,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/images";

const capabilities = [
  "Theatre seating for 1,000 delegates, classroom for 420",
  "Stage screen, line-array sound, lapel and handheld microphones",
  "Registration desk, signage and branded entrance options",
  "Breakout rooms and delegate catering on timed sittings",
  "220 parking spaces with marshals for arrival peaks",
  "Full generator backup for AV and air conditioning",
];

export const metadata: Metadata = {
  title: "Corporate Events, Conferences & Launches | Venus Park",
  description:
    "Conference and corporate event venue for up to 1,000 delegates with full AV, breakout catering, branding options and weekday rates.",
  openGraph: {
    title: "Corporate Events at Venus Park",
    description: "Conferences, annual days, launches and exhibitions with complete AV support.",
    url: "/corporate-events",
  },
  alternates: { canonical: "/corporate-events" },
};

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate & conferences"
        title="A Professional Venue for Conferences, Launches and Annual Days"
        description="Predictable AV, punctual catering and a floor plan that scales from a 60-person AGM to a 900-delegate conference."
        image={images.corporate}
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <Link href="/booking">Enquiry</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/packages/diamond">Diamond Package</Link>
            </Button>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for Sessions That Have to Start on Time"
            description="Weekday rates make Venus Park a practical choice for conferences, training programmes, school events and association meetings."
          />
          <ul className="space-y-4">
            {capabilities.map((c, i) => (
              <Reveal key={c} index={i % 3}>
                <li className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <LayoutCapacity />

      <Section tone="sand">
        <SectionHeading eyebrow="Packages" title="Corporate Packages" align="center" />
        <PackageGrid />
        <PricingNote />
      </Section>

      <AvailabilitySection defaultPackage="Diamond" />
      <FAQSection limit={6} />
      <ContactSection />
    </>
  );
}
