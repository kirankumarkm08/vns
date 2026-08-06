import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Crown,
  Gem,
  HeartHandshake,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { galleryItems, images } from "@/data/images";
import { venue } from "@/data/venue";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const navAnchors = [
  { label: "Home", href: "#home" },
  { label: "Halls", href: "#halls" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

const blessings = [
  { icon: "Om", deity: "Ganesha", meaning: "Beginnings" },
  { icon: "Lotus", deity: "Lakshmi", meaning: "Prosperity" },
  { icon: "Veena", deity: "Saraswati", meaning: "Grace" },
];

const eventTags = ["Weddings", "Receptions", "Sangeet", "Corporate", "Festivals"];

const heroStats = [
  { value: "1.2K+", label: "Events Hosted" },
  { value: "50K+", label: "Happy Guests" },
  { value: "12", label: "Premium Halls" },
  { value: "4.9", label: "Star Rating" },
  { value: "200+", label: "Menu Items" },
];

const halls = [
  {
    name: "Saraswati Grand",
    pax: "1500 Pax",
    description: "Our flagship hall, draped in ivory and gold for grand weddings and receptions.",
    image: galleryItems[0]?.src ?? images.hero,
    features: ["Air-Cooled", "LED Stage", "Bridal Suite", "Valet"],
  },
  {
    name: "Lakshmi Pavilion",
    pax: "800 Pax",
    description: "Crystal chandeliers and warm jewel tones, perfect for receptions and sangeet.",
    image: galleryItems[8]?.src ?? images.interior,
    features: ["Chandeliers", "Stage", "Green Room", "Pre-Function"],
  },
  {
    name: "Ganesha Court",
    pax: "500 Pax",
    description: "Intimate yet majestic, ideal for engagements, naming ceremonies and birthdays.",
    image: galleryItems[15]?.src ?? images.celebrations,
    features: ["Outdoor View", "Stage", "Lounge", "Catering"],
  },
  {
    name: "Krishna Atrium",
    pax: "300 Pax",
    description: "A boutique hall for corporate galas, conferences and milestone celebrations.",
    image: galleryItems[20]?.src ?? images.corporate,
    features: ["AV System", "Wi-Fi", "Bar", "Breakout"],
  },
];

const showcase = [
  { title: "Regal mandap setup", image: galleryItems[2]?.src ?? images.weddings },
  { title: "Floral stage detailing", image: galleryItems[5]?.src ?? images.celebrations },
  { title: "Bride at the venue", image: galleryItems[7]?.src ?? images.weddings },
  { title: "Ceremony glow", image: galleryItems[10]?.src ?? images.hero },
  { title: "Couple under canopy", image: galleryItems[14]?.src ?? images.interior },
];

const packages = [
  {
    name: "Silver",
    motif: "Sandalwood",
    note: "Half-Day | Up to 250 Guests",
    href: "/booking?package=Silver",
    features: [
      "4-hour hall booking",
      "Standard decor and florals",
      "Welcome drinks counter",
      "Standard sound and lighting",
      "Bridal lounge access",
    ],
  },
  {
    name: "Gold",
    motif: "Marigold",
    note: "Full-Day | Up to 500 Guests",
    href: "/booking?package=Gold",
    features: [
      "8-hour hall booking",
      "Premium themed decor",
      "South Indian thali catering",
      "LED stage and DJ system",
      "Dedicated coordinator",
    ],
  },
  {
    name: "Platinum",
    motif: "Kanchipuram",
    note: "Two-Day | Up to 800 Guests",
    href: "/booking?package=Platinum",
    features: [
      "Hall and pre-function area",
      "Designer mandap",
      "Multi-cuisine live counters",
      "Photography and videography",
      "Bridal and groom suites",
    ],
  },
  {
    name: "Diamond",
    motif: "Chola Royal",
    note: "Full Property | 1500+ Guests",
    href: "/booking?package=Diamond",
    featured: true,
    features: [
      "Entire venue exclusive",
      "Bespoke floral architecture",
      "Celebrity chef catering",
      "Drone cinematography",
      "Choreographed entry and fireworks",
      "Vintage car for the couple",
    ],
  },
];

const stories = [
  {
    quote:
      "From the very first visit, Venus Park felt magical. The team made our daughter's wedding feel like a royal celebration, every petal in place.",
    name: "Priya & Arjun Iyer",
    event: "Wedding | December 2024",
  },
  {
    quote:
      "Our reception had 1200 guests and the team handled it with grace and precision. The South Indian feast was unforgettable. Five stars from our family.",
    name: "Lakshmi & Karthik Raman",
    event: "Reception | October 2024",
  },
  {
    quote:
      "We celebrated my son's first birthday at Ganesha Court. The pastel decor, the kid-friendly menu, the kindness - Venus Park made it priceless.",
    name: "Meera & Vikram",
    event: "Birthday | March 2024",
  },
];

function Ornament({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-2 text-gold", className)}
    >
      <Sparkles className="h-4 w-4" />
      <span className="h-px w-10 bg-gold/40" />
      <Crown className="h-4 w-4" />
      <span className="h-px w-10 bg-gold/40" />
      <Sparkles className="h-4 w-4" />
    </div>
  );
}

function Intro({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-5xl",
          light ? "text-ivory" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <Ornament className="mt-5" />
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function DivineHero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={images.hero}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/84 to-ink/78" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div className="order-2 lg:order-1">
            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {blessings.map((item) => (
                <li
                  key={item.deity}
                  className="flex items-center gap-4 border border-ivory/15 bg-ivory/5 p-4 backdrop-blur"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center border border-gold/40 font-display text-lg text-gold">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block font-display text-xl text-ivory">{item.deity}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-ivory/55">
                      {item.meaning}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 text-center lg:order-2">
            <p className="eyebrow">Bangalore South&apos;s Most Celebrated Event Destination</p>
            <h1 className="mt-6 text-6xl leading-none text-ivory sm:text-7xl lg:text-8xl">
              Venus <span className="text-gold">Park</span>
            </h1>
            <p className="mt-5 font-display text-sm uppercase tracking-[0.45em] text-ivory/80 sm:text-base">
              Convention Hall
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ivory/76">
              Where the colours of South India&apos;s festivals meet the elegance of every cherished
              celebration - your most divine moments begin here.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">
                  Book Your Celebration <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href="#halls">Explore Venue</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {eventTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ivory/25 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-ivory/85"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#halls"
              className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:text-gold"
            >
              Scroll to Explore <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pavilions() {
  return (
    <Section tone="sand" id="halls">
      <Intro
        eyebrow="Our Pavilions"
        title="Halls Crafted for Celebration"
        description="Twelve premium halls. Twelve different moods. From intimate gatherings to grand royal weddings, every space tells a story."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {halls.map((hall, index) => (
          <Reveal key={hall.name} index={index % 4}>
            <article className="card-elegant group grid h-full overflow-hidden lg:grid-cols-[0.9fr_1fr]">
              <div className="media-zoom aspect-[4/3] lg:aspect-auto">
                <img
                  src={hall.image}
                  alt={`${hall.name} at Venus Park`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-3xl">{hall.name}</h3>
                  <span className="text-sm font-semibold text-gold">{hall.pax}</span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {hall.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {hall.features.map((feature) => (
                    <span
                      key={feature}
                      className="border border-border bg-sand px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/booking">
            Enquire About a Hall <ArrowRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

export function GrandStage() {
  return (
    <Section id="gallery">
      <Intro
        eyebrow="Moments Captured"
        title="A Glimpse of the Magic"
        description="Curated moments from weddings, receptions, sangeets and corporate galas held at Venus Park."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {showcase.map((item, index) => (
          <Reveal
            key={item.title}
            index={index % 5}
            className={cn(index === 0 || index === 4 ? "lg:row-span-2" : "")}
          >
            <figure className="media-zoom relative h-full min-h-72 overflow-hidden border border-border bg-card">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-5 font-display text-xl text-ivory">
                {item.title}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CuratedPackages() {
  return (
    <Section tone="sand" id="packages">
      <Intro
        eyebrow="Curated Tiers"
        title="Packages for Every Dream"
        description="From sweet beginnings to royal grandeur, choose the celebration that matches your vision. All packages are fully customisable."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {packages.map((tier, index) => (
          <Reveal key={tier.name} index={index % 4}>
            <article
              className={cn(
                "card-elegant relative flex h-full flex-col p-7",
                tier.featured && "border-gold bg-ink text-ivory",
              )}
            >
              {tier.featured && (
                <span className="absolute right-4 top-4 bg-gold px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink">
                  Most Celebrated
                </span>
              )}
              <p className="eyebrow">{tier.motif}</p>
              <h3 className="mt-3 font-display text-3xl">{tier.name}</h3>
              <p
                className={cn(
                  "mt-3 text-xs uppercase tracking-[0.14em]",
                  tier.featured ? "text-ivory/65" : "text-muted-foreground",
                )}
              >
                {tier.note}
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex gap-3 text-sm leading-relaxed",
                      tier.featured ? "text-ivory/78" : "text-muted-foreground",
                    )}
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.featured ? "gold" : "outline"}
                size="lg"
                className="mt-8 w-full"
              >
                <Link href={tier.href}>Choose {tier.name}</Link>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FamilyStories() {
  return (
    <Section id="stories">
      <Intro
        eyebrow="Loving Words"
        title="Stories from Our Families"
        description="Every celebration leaves a memory. Here are a few of the kind words our families have shared."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {stories.map((story, index) => (
          <Reveal key={story.name} index={index % 3}>
            <figure className="card-elegant flex h-full flex-col p-8">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <Gem className="mt-8 h-8 w-8 text-gold/60" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-foreground">
                "{story.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <span className="block font-display text-lg">{story.name}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-gold">
                  {story.event}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ReserveCta() {
  return (
    <Section tone="ink" id="contact">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">Begin Your Celebration</p>
          <h2 className="mt-3 text-3xl text-ivory sm:text-4xl lg:text-5xl">Let's Plan Together</h2>
          <Ornament className="mt-5 justify-start" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70">
            Share a few details about your event and our coordinators will get in touch within 24
            hours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link href="/booking">
                Book Now <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={`tel:${venue.phone}`}>{venue.phoneDisplay}</a>
            </Button>
          </div>
        </div>
        <div className="border border-ivory/15 p-7">
          <HeartHandshake className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-display text-2xl text-ivory">Visit Us</h3>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ivory/70">
            {venue.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <div className="mt-6 grid gap-4 text-sm text-ivory/70 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Call</p>
              <a href={`tel:${venue.phone}`} className="mt-2 block hover:text-gold">
                {venue.phoneDisplay}
              </a>
              <a href={`tel:${venue.phoneAlt}`} className="mt-1 block hover:text-gold">
                {venue.phoneAltDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Email</p>
              <a href={`mailto:${venue.email}`} className="mt-2 block break-all hover:text-gold">
                {venue.email}
              </a>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Open</p>
              <p className="mt-2">Mon - Sun | 9:00 AM - 9:00 PM</p>
              <p className="mt-1 text-ivory/55">Site visits by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
