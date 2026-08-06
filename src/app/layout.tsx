import { Cormorant_Garamond, Jost } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyActions } from "@/components/site/StickyActions";
import { venue } from "@/data/venue";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const ogImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/111f9f4f-523c-4572-8b56-92dde90b627e/id-preview-6ebe481a--018a6518-b434-4b18-909b-af1f7ecdcede.lovable.app-1785343039852.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Venus Park — Convention Hall & Wedding Venue in Bengaluru",
  description:
    "Premium convention hall for weddings, receptions, corporate events and celebrations up to 1,000 guests. Catering, decoration, guest rooms and full event coordination.",
  applicationName: "Venus Park",
  openGraph: {
    siteName: "Venus Park",
    type: "website",
    title: "Venus Park — Convention Hall & Wedding Venue in Bengaluru",
    description:
      "Premium convention hall for weddings, receptions, corporate events and celebrations up to 1,000 guests. Catering, decoration, guest rooms and full event coordination.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Park — Convention Hall & Wedding Venue in Bengaluru",
    description:
      "Premium convention hall for weddings, receptions, corporate events and celebrations up to 1,000 guests. Catering, decoration, guest rooms and full event coordination.",
    images: [ogImage],
  },
  icons: [{ rel: "icon", url: "/logo-vns.png", type: "image/png" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: venue.name,
  description:
    "Convention hall and event venue for weddings, receptions, corporate events, conferences and community gatherings.",
  telephone: venue.phoneDisplay,
  email: venue.email,
  maximumAttendeeCapacity: 1000,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#67/1 Munyamma Garden, 7th Cross, Sarvabhouma Nagar, Chikkalasandra",
    addressLocality: "Bengaluru",
    postalCode: "560061",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-21:00", "Su 10:00-18:00"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyActions />
      </body>
    </html>
  );
}
