import type { Metadata } from "next";

import { PageHero } from "@/components/site/Section";
import { ContactSection, Showcase } from "@/components/site/sections";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact & Venue Tours | Venus Park Convention Hall",
  description:
    "Call, WhatsApp or email our event team, get directions, see opening hours and book a guided venue tour at Venus Park.",
  openGraph: {
    title: "Contact Venus Park",
    description: "Speak to our event team or schedule a guided venue tour.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Venue Tour or Ask Us Anything"
        description="Guided tours run daily and take about 30 minutes. We will set the hall to your preferred layout so you can picture the day."
        image={images.celebrations}
      />
      <ContactSection />
      <Showcase />
    </>
  );
}
