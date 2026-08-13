import type { Metadata } from "next";

import { LegalPage } from "@/components/site/LegalPage";
import { venue } from "@/data/venue";

export const metadata: Metadata = {
  title: "Cancellation Policy | Venus Park",
  description:
    "How cancellations, date changes and refunds work for events booked at Venus Park convention hall.",
  openGraph: {
    title: "Cancellation Policy — Venus Park",
    description: "Cancellation, date change and refund terms.",
    url: "/cancellation-policy",
  },
  alternates: { canonical: "/cancellation-policy" },
};

export default function CancellationPage() {
  return (
    <LegalPage title="Cancellation Policy" updated="July 2026">
      <p>
        Placeholder cancellation terms for {venue.name}. Replace the notice periods and refund
        percentages with your confirmed policy before publishing.
      </p>
      <h2>Cancellation notice</h2>
      <p>
        Cancellations must be made in writing. Refund amounts depend on how far in advance the
        cancellation is received, as set out in your signed hire agreement.
      </p>
      <h2>Date changes</h2>
      <p>
        One date change may be permitted subject to availability, provided sufficient notice is
        given. Any difference in seasonal rates will be applied.
      </p>
      <h2>Non-refundable elements</h2>
      <p>
        Third-party costs already committed on your behalf — such as custom decoration, printed
        branding or specialist hire — are non-refundable once ordered.
      </p>
      <h2>Questions</h2>
      <p>
        Email {venue.email} or call {venue.phoneDisplay} to discuss your booking.
      </p>
    </LegalPage>
  );
}
