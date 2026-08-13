import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { venue } from "@/data/venue";

export const metadata: Metadata = {
  title: "Terms and Conditions | Venus Park",
  description:
    "Booking terms for hiring Venus Park: confirmation, payments, venue access, conduct, liability and external vendors.",
  openGraph: {
    title: "Terms and Conditions — Venus Park",
    description: "Venue hire terms and booking conditions.",
    url: "/terms",
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="July 2026">
      <p>
        Placeholder terms for venue hire at {venue.name}. Replace with your reviewed contract terms
        before publishing.
      </p>
      <h2>Booking and payment</h2>
      <p>
        A date is confirmed once the booking advance is received and the hire agreement is signed.
        The balance is payable in stages agreed in writing before the event.
      </p>
      <h2>Venue access and conduct</h2>
      <p>
        Access hours depend on the package selected. Guests, vendors and decorators must follow the
        venue&apos;s safety, fire and noise requirements at all times.
      </p>
      <h2>External vendors</h2>
      <p>
        External caterers and decorators must be approved in advance and provide valid insurance and
        food-safety documentation. Kitchen access fees may apply.
      </p>
      <h2>Liability</h2>
      <p>
        The venue is not liable for personal belongings left on site. Damage to venue property
        caused by guests or vendors is chargeable to the booking party.
      </p>
    </LegalPage>
  );
}
