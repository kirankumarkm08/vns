"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { venue } from "@/data/venue";
import { cn } from "@/lib/utils";

const nav = [
  // { label: "Venus Park", to: "/venus-park", pill: true },
  // { label: "Home", to: "/" },
  { label: "Halls", to: "/#halls" },
  { label: "Packages", to: "/#packages" },
  { label: "Stories", to: "/#stories" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => to === "/" && pathname === "/";
  const isVisible = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 py-2 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${venue.name} home`}
        >
          <img
            src="/logo-vns.png"
            alt={`${venue.name} logo`}
            width={244}
            height={218}
            className="h-9 w-auto shrink-0 sm:h-10"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight tracking-wide sm:text-xl">
              {venue.name}
            </span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground sm:block">
              {venue.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 lg:gap-4">
          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to + item.label}
                  href={item.to}
                  className={
                    item.pill
                      ? "nav-pill text-[0.78rem] uppercase tracking-[0.14em] transition-colors"
                      : cn(
                          "text-[0.78rem] uppercase tracking-[0.14em] transition-colors",
                          active
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* <a
            href={whatsappLink(`Hello ${venue.name}, I would like to enquire about an event.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={cn(
              "grid h-9 w-9 place-items-center rounded-md transition-colors",
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-ivory/80 hover:text-ivory",
            )}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <Button asChild size="icon" variant="ghost" className="md:hidden" aria-label="Call us">
            <a href={`tel:${venue.phone}`}>
              <Phone />
            </a>
          </Button> */}

          <Button asChild variant="gold" size="lg" className="hidden md:inline-flex">
            <Link href="/contact">Book Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                {open ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
              <nav className="mt-10 flex flex-col gap-1">
                {nav.map((item) => (
                  <SheetClose asChild key={"m" + item.to + item.label}>
                    <Link
                      href={item.to}
                      className="border-b border-border/60 py-3 font-display text-2xl text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <SheetClose asChild>
                  <Button asChild variant="gold" size="lg">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </SheetClose>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${venue.phone}`}>{venue.phoneDisplay}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
