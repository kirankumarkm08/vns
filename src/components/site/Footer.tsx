import Link from "next/link";
import { Facebook, Instagram, MapPin, Youtube, Mail, Phone } from "lucide-react";
import { venue, mapsDirectionsUrl, whatsappLink } from "@/data/venue";
import { WhatsAppIcon } from "./WhatsAppIcon";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", to: "/" },
      { label: "Halls", to: "/#halls" },
      { label: "Gallery", to: "/#gallery" },
      { label: "Packages", to: "/#packages" },
      { label: "Stories", to: "/#stories" },
      { label: "Contact", to: "/#contact" },
      { label: "Book Now", to: "/booking" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Weddings", to: "/weddings" },
      { label: "Receptions", to: "/weddings" },
      { label: "Corporate Events", to: "/corporate-events" },
      { label: "Conferences", to: "/corporate-events" },
      { label: "Exhibitions", to: "/corporate-events" },
      { label: "Book Now", to: "/booking" },
    ],
  },
  {
    title: "Packages",
    links: [
      { label: "All packages", to: "/packages" },
      { label: "Silver Package", to: "/booking?package=Silver" },
      { label: "Gold Package", to: "/packages/gold" },
      { label: "Platinum Package", to: "/packages/platinum" },
      { label: "Diamond Package", to: "/packages/diamond" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src="/logo-vns.png"
                alt={`${venue.name} logo`}
                width={244}
                height={218}
                className="h-11 w-auto shrink-0"
              />
              <span>
                <span className="block font-display text-xl tracking-wide">{venue.name}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.24em] text-ivory/60">
                  {venue.tagline}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
              A purpose-built convention hall for weddings, receptions, corporate events and
              community gatherings — with decoration, catering, guest rooms and coordination handled
              in one place.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: venue.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: venue.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: venue.social.youtube, Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">{col.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={col.title + l.label}>
                    <Link
                      href={l.to}
                      className="text-sm text-ivory/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-ivory/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-3 text-sm text-ivory/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <address className="not-italic">
              {venue.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`tel:${venue.phone}`}
              className="flex items-center gap-3 text-ivory/70 hover:text-gold"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              {venue.phoneDisplay}
            </a>
            <a
              href={`tel:${venue.phoneAlt}`}
              className="flex items-center gap-3 text-ivory/70 hover:text-gold"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              {venue.phoneAltDisplay}
            </a>
          </div>

          <a
            href={`mailto:${venue.email}`}
            className="flex items-center gap-3 text-sm break-all text-ivory/70 hover:text-gold"
          >
            <Mail className="h-4 w-4 shrink-0 text-gold" />
            {venue.email}
          </a>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappLink(`Hello ${venue.name}, I have an event enquiry.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ivory/70 hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
              WhatsApp us
            </a>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ivory/70 hover:text-gold"
            >
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              Get directions
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {venue.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms and Conditions
            </Link>
            <Link href="/cancellation-policy" className="hover:text-gold">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
