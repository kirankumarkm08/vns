import Link from "next/link";
import type { Metadata } from "next";

import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PackageComparison, PackageGrid, PricingNote } from "@/components/site/Packages";
import { AvailabilitySection, FAQSection, Showcase } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Packages — Gold, Platinum & Diamond | Venus Park",
  description:
    "Compare our Gold, Platinum and Diamond event packages: hall access, decoration, catering, guest rooms, AV and coordination.",
  openGraph: {
    title: "Event Packages — Venus Park",
    description: "Three flexible venue packages with a full feature comparison.",
    url: "/packages",
  },
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Gold, Platinum and Diamond"
        description="Pick a starting point, then adjust the menu, decoration, guest rooms and venue hours to suit your event."
        image={images.dining}
        actions={
          <Button asChild variant="gold" size="xl">
            <Link href="/booking">Request Pricing</Link>
          </Button>
        }
      />
      <Section>
        <SectionHeading
          eyebrow="Choose your tier"
          title="What Each Package Includes"
          align="center"
        />
        <PackageGrid />
        <PackageComparison />
        <PricingNote />
      </Section>
      <AvailabilitySection />
      <Showcase />
      <FAQSection limit={6} />
    </>
  );
}
