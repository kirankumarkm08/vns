import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { venue } from "@/data/venue";

export const metadata: Metadata = {
  title: "Privacy Policy | Venus Park",
  description:
    "How Venus Park collects, uses and protects the personal details you share through enquiry forms, phone calls and WhatsApp.",
  openGraph: {
    title: "Privacy Policy — Venus Park",
    description: "How we handle your enquiry data.",
    url: "/privacy-policy",
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This placeholder policy explains how {venue.name} handles personal information. Replace it
        with your reviewed legal text before publishing.
      </p>
      <h2>What we collect</h2>
      <p>
        Enquiry forms collect your name, phone number, event type, preferred date, expected guest
        count, package preference and any message you send. Calls and WhatsApp conversations may be
        recorded in our booking records.
      </p>
      <h2>How we use it</h2>
      <p>
        We use your details only to respond to your enquiry, confirm availability, prepare a quote
        and coordinate your event. We do not sell your data.
      </p>
      <h2>Retention and your rights</h2>
      <p>
        Enquiry records are kept for as long as needed to service your booking and meet accounting
        obligations. You may request a copy or deletion of your data by emailing {venue.email}.
      </p>
    </LegalPage>
  );
}
