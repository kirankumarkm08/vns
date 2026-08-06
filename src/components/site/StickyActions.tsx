import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { venue, whatsappLink } from "@/data/venue";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function StickyActions() {
  const message = `Hello ${venue.name}, I would like to enquire about hosting an event.`;

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-ink shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-105 md:grid"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <a
          href={`tel:${venue.phone}`}
          className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.12em] text-foreground"
        >
          <Phone className="h-4 w-4 text-gold" />
          Call
        </a>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-[0.65rem] uppercase tracking-[0.12em] text-foreground"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          WhatsApp
        </a>
        <Link
          href="/booking"
          className="flex flex-col items-center gap-1 bg-gold py-3 text-[0.65rem] uppercase tracking-[0.12em] text-ink"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Now
        </Link>
      </div>
    </>
  );
}
