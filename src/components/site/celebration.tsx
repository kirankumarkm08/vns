"use client";

import Link from "next/link";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Crown,
  Check,
  Gem,
  HeartHandshake,
  MapPin,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { galleryItems, images } from "@/data/images";
import {
  mapsDirectionsUrl,
  mapsEmbedSrc,
  pricingTiers,
  venue,
} from "@/data/venue";
import { cn } from "@/lib/utils";

import { HeroVideo } from "./HeroVideo";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/* =========================================================
   NAVIGATION
========================================================= */

const navAnchors = [
  { label: "Home", href: "#home" },
  { label: "Halls", href: "#halls" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

/* =========================================================
   BLESSINGS
========================================================= */

const blessings = [
  {
    icon: "Om",
    deity: "Ganesha",
    meaning: "Beginnings",
  },
  {
    icon: "Lotus",
    deity: "Lakshmi",
    meaning: "Prosperity",
  },
  {
    icon: "Veena",
    deity: "Saraswati",
    meaning: "Grace",
  },
];

/* =========================================================
   EVENT TAGS
========================================================= */

const eventTags = [
  "Weddings",
  "Receptions",
  "Sangeet",
  "Corporate",
  "Festivals",
];

/* =========================================================
   HERO STATS
========================================================= */

const heroStats = [
  {
    value: "1.2K+",
    label: "Events Hosted",
  },
  {
    value: "50K+",
    label: "Happy Guests",
  },
  {
    value: "12",
    label: "Premium Halls",
  },
  {
    value: "4.9",
    label: "Star Rating",
  },
  {
    value: "200+",
    label: "Menu Items",
  },
];

/* =========================================================
   HALLS / EVENT TYPES
========================================================= */

const halls = [
  {
    name: "Wedding",
    pax: "1500 Pax",

    description:
      "A majestic setting crafted for grand wedding ceremonies, traditional rituals and unforgettable celebrations.",

    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",

    features: [
      "Grand Stage",
      "Bridal Suite",
      "Valet",
      "Catering",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85",
    ],
  },

  {
    name: "Reception",
    pax: "800 Pax",

    description:
      "An elegant celebration space designed for wedding receptions, sangeet nights and sophisticated evening gatherings.",

    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",

    features: [
      "Stage",
      "Chandeliers",
      "Dining",
      "Pre-Function",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85",
    ],
  },

  {
    name: "Engagement",
    pax: "500 Pax",

    description:
      "A beautifully intimate venue for engagement ceremonies, ring exchanges, family gatherings and pre-wedding celebrations.",

    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",

    features: [
      "Stage",
      "Lounge",
      "Photography",
      "Catering",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85",
    ],
  },

  {
    name: "Birthday",
    pax: "300 Pax",

    description:
      "A lively and versatile space for birthdays, milestone parties and joyful celebrations with family and friends.",

    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",

    features: [
      "Party Setup",
      "Music",
      "Dining",
      "Decoration",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85",

      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85",
    ],
  },
];

/* =========================================================
   SHOWCASE GALLERY
========================================================= */

const showcase = [
  {
    title: "Regal mandap setup",
    image: galleryItems[2]?.src ?? images.weddings,
  },

  {
    title: "Floral stage detailing",
    image: galleryItems[5]?.src ?? images.celebrations,
  },

  {
    title: "Bride at the venue",
    image: galleryItems[7]?.src ?? images.weddings,
  },

  {
    title: "Ceremony glow",
    image: galleryItems[10]?.src ?? images.hero,
  },

  {
    title: "Couple under canopy",
    image: galleryItems[14]?.src ?? images.interior,
  },
];

/* =========================================================
   PACKAGES
========================================================= */

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

/* =========================================================
   PACKAGE PRICES
========================================================= */

const packagePrices = new Map(
  pricingTiers.map((tier) => [tier.name, tier.price])
);

const inr = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

/* =========================================================
   STORIES
========================================================= */

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

/* =========================================================
   ORNAMENT
========================================================= */

function Ornament({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center gap-2 text-gold",
        className
      )}
    >
      <Sparkles className="h-4 w-4" />

      <span className="h-px w-10 bg-gold/40" />

      <Crown className="h-4 w-4" />

      <span className="h-px w-10 bg-gold/40" />

      <Sparkles className="h-4 w-4" />
    </div>
  );
}

/* =========================================================
   INTRO
========================================================= */

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
          light ? "text-ivory" : "text-foreground"
        )}
      >
        {title}
      </h2>

      <Ornament className="mt-[10px]" />

      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light
              ? "text-ivory/70"
              : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export function DivineHero({
  video = false,
}: {
  video?: boolean;
}) {
  if (video) {
    return <HeroVideo poster={images.hero} />;
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
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
                    <span className="block font-display text-xl text-ivory">
                      {item.deity}
                    </span>

                    <span className="text-xs uppercase tracking-[0.18em] text-ivory/55">
                      {item.meaning}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 text-center lg:order-2">
            <p className="eyebrow">
              Bangalore South&apos;s Most Celebrated Event Destination
            </p>

            <h1 className="mt-6 text-6xl leading-none text-ivory sm:text-7xl lg:text-8xl">
              Venus <span className="text-gold">Park</span>
            </h1>

            <p className="mt-5 font-display text-sm uppercase tracking-[0.45em] text-ivory/80 sm:text-base">
              And Convention Hall
            </p>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ivory/76">
              Where the colours of South India&apos;s festivals meet
              the elegance of every cherished celebration - your most
              divine moments begin here.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild variant="gold" size="xl">
                <Link href="/booking">
                  Book Your Celebration
                  <ArrowRight />
                </Link>
              </Button>

              <Button
                asChild
                variant="outlineLight"
                size="xl"
              >
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
              Scroll to Explore
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAVILIONS
   WEDDING / RECEPTION / ENGAGEMENT / BIRTHDAY
========================================================= */

export function Pavilions() {
  const [activeHall, setActiveHall] =
    useState<string | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const selectedHall = halls.find(
    (hall) => hall.name === activeHall
  );

  const galleryImages = selectedHall?.gallery ?? [];

  /* =======================================================
     AUTOMATIC SLIDESHOW
  ======================================================= */

  useEffect(() => {
    if (!activeHall || galleryImages.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveImage((current) => {
        return (current + 1) % galleryImages.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeHall, galleryImages.length]);

  /* =======================================================
     ESC KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveHall(null);
        setActiveImage(0);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =======================================================
     OPEN GALLERY
  ======================================================= */

  const openGallery = (hallName: string) => {
    setActiveHall(hallName);
    setActiveImage(0);
  };

  /* =======================================================
     CLOSE GALLERY
  ======================================================= */

  const closeGallery = () => {
    setActiveHall(null);
    setActiveImage(0);
  };

  /* =======================================================
     PREVIOUS IMAGE
  ======================================================= */

  const previousImage = () => {
    setActiveImage((current) => {
      return current === 0
        ? galleryImages.length - 1
        : current - 1;
    });
  };

  /* =======================================================
     NEXT IMAGE
  ======================================================= */

  const nextImage = () => {
    setActiveImage((current) => {
      return (
        (current + 1) % galleryImages.length
      );
    });
  };

  return (
    <>
      {/* =====================================================
          PAVILIONS SECTION
      ===================================================== */}

      <Section tone="sand" id="halls">
        <Intro
          eyebrow="Our Pavilions"
          title="Halls Crafted for Celebration"
          description="Twelve premium halls. Twelve different moods. From intimate gatherings to grand royal weddings, every space tells a story."
        />

        {/* =================================================
            HALL CARDS
        ================================================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {halls.map((hall, index) => (
            <Reveal
              key={hall.name}
              index={index % 4}
            >
              <article
                onClick={() =>
                  openGallery(hall.name)
                }
                className="
                  card-elegant
                  group
                  grid
                  h-full
                  cursor-pointer
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  lg:grid-cols-[0.9fr_1fr]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    media-zoom
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    lg:aspect-auto
                  "
                >
                  <img
                    src={hall.image}
                    alt={`${hall.name} at Venus Park`}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/0
                      transition-all
                      duration-500
                      group-hover:bg-black/30
                    "
                  >
                    <span
                      className="
                        translate-y-4
                        rounded-full
                        border
                        border-white/30
                        bg-black/50
                        px-5
                        py-2
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      View Gallery
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-col p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-3xl">
                      {hall.name}
                    </h3>

                    <span className="text-sm font-semibold text-gold">
                      {hall.pax}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {hall.description}
                  </p>

                  {/* FEATURES */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {hall.features.map(
                      (feature) => (
                        <span
                          key={feature}
                          className="
                            border
                            border-border
                            bg-sand
                            px-3
                            py-1
                            text-[0.68rem]
                            uppercase
                            tracking-[0.14em]
                            text-muted-foreground
                          "
                        >
                          {feature}
                        </span>
                      )
                    )}
                  </div>

                  {/* EXPLORE */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gold
                    "
                  >
                    Explore {hall.name}

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* =================================================
            BOOKING BUTTON
        ================================================= */}

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/booking">
              Enquire About a Hall
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      {/* =====================================================
          FULL SCREEN GALLERY POPUP
      ===================================================== */}

      {activeHall &&
        selectedHall &&
        galleryImages.length > 0 && (
          <div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md
              sm:p-6
            "
            onClick={closeGallery}
          >
            {/* POPUP */}

            <div
              className="
                relative
                w-full
                max-w-6xl
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-[0_30px_100px_rgba(0,0,0,0.7)]
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="
                  absolute
                  right-4
                  top-4
                  z-50
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                "
              >
                <X size={20} />
              </button>

              {/* TITLE */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-40
                  rounded-full
                  border
                  border-white/20
                  bg-black/50
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white
                  backdrop-blur-md
                "
              >
                {selectedHall.name}
              </div>

              {/* MAIN IMAGE */}

              <div
                className="
                  relative
                  h-[70vh]
                  min-h-[400px]
                  w-full
                  overflow-hidden
                  sm:h-[75vh]
                "
              >
                <img
                  key={galleryImages[activeImage]}
                  src={galleryImages[activeImage]}
                  alt={`${selectedHall.name} celebration`}
                  className="
                    h-full
                    w-full
                    object-cover
                    animate-gallery-slide
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-black/20
                  "
                />
              </div>

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-40
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  sm:left-5
                  sm:h-12
                  sm:w-12
                "
              >
                <ArrowLeft size={20} />
              </button>

              {/* NEXT */}

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-40
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white
                  hover:text-black
                  sm:right-5
                  sm:h-12
                  sm:w-12
                "
              >
                <ArrowRight size={20} />
              </button>

              {/* BOTTOM CONTROLS */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-30
                  flex
                  flex-col
                  items-center
                  gap-3
                  bg-gradient-to-t
                  from-black
                  to-transparent
                  px-5
                  pb-5
                  pt-16
                "
              >
                {/* COUNTER */}

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-white/70
                  "
                >
                  {activeImage + 1} /{" "}
                  {galleryImages.length}
                </span>

                {/* DOTS */}

                <div className="flex items-center gap-2">
                  {galleryImages.map(
                    (_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          setActiveImage(index)
                        }
                        aria-label={`View image ${
                          index + 1
                        }`}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          index === activeImage
                            ? "w-8 bg-white"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        )}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

/* =========================================================
   LOCATION
========================================================= */

export function Location() {
  return (
    <Section tone="sand" id="location">
      <Intro
        eyebrow="Visit Venus Park"
        title="Find Us & Connect"
        description="Discover Venus Park, connect with us on social media, and find your way to our celebration spaces."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* FIND US */}

        <div
          className="
            flex
            min-h-[460px]
            flex-col
            border
            border-border
            bg-card
            p-7
            shadow-[var(--shadow-soft)]
            sm:p-9
          "
        >
          <p className="eyebrow">
            Find Us
          </p>

          <h3 className="mt-[6px] font-display text-3xl text-foreground">
            Scan for Directions
          </h3>

          <p className="mt-[10px] text-sm leading-relaxed text-muted-foreground">
            Scan the QR code to open Venus Park on
            Google Maps, or click the address below to
            view our location.
          </p>

          <div className="mt-7 flex flex-1 flex-col items-center">
            {/* QR CODE */}

            <div className="rounded-xl border border-border bg-white p-3 shadow-sm">
              <img
                src="/gallery/Venus_Park_Review_QR (1).png"
                alt="Venus Park QR Code"
                className="h-[150px] w-[150px] object-contain"
              />
            </div>

            {/* ADDRESS */}

            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-6
                flex
                w-full
                items-start
                gap-3
              "
            >
              <MapPin
                size={19}
                className="
                  mt-1
                  shrink-0
                  text-gold
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <div>
                {venue.addressLines.map(
                  (line) => (
                    <span
                      key={line}
                      className="
                        block
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                        transition-colors
                        duration-300
                        group-hover:text-gold
                      "
                    >
                      {line}
                    </span>
                  )
                )}
              </div>
            </a>

            {/* DIRECTIONS */}

            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-5 w-full"
            >
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin />
                Get Directions
              </a>
            </Button>
          </div>
        </div>

        {/* SOCIAL MEDIA */}

        <div
          className="
            flex
            min-h-[460px]
            flex-col
            border
            border-border
            bg-card
            p-7
            shadow-[var(--shadow-soft)]
            sm:p-9
          "
        >
          <p className="eyebrow">
            Stay Connected
          </p>

          <h3 className="mt-3 font-display text-3xl text-foreground">
            Social Media
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Follow Venus Park for weddings, celebrations,
            events, offers and beautiful moments from our
            venue.
          </p>

          <div className="mt-8 flex flex-1 flex-col justify-center gap-4">
            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-4
                border
                border-border
                bg-background
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold
                hover:bg-gold
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-sm
                  font-bold
                  group-hover:border-white/50
                "
              >
                IG
              </span>

              <span className="text-sm font-medium">
                Instagram
              </span>

              <ArrowRight
                size={17}
                className="ml-auto transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-4
                border
                border-border
                bg-background
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold
                hover:bg-gold
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-sm
                  font-bold
                  group-hover:border-white/50
                "
              >
                f
              </span>

              <span className="text-sm font-medium">
                Facebook
              </span>

              <ArrowRight
                size={17}
                className="ml-auto transition-transform group-hover:translate-x-1"
              />
            </a>

            {/* YOUTUBE */}

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-4
                border
                border-border
                bg-background
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-gold
                hover:bg-gold
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-sm
                  font-bold
                  group-hover:border-white/50
                "
              >
                ▶
              </span>

              <span className="text-sm font-medium">
                YouTube
              </span>

              <ArrowRight
                size={17}
                className="ml-auto transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* MAP */}

        <div
          className="
            min-h-[460px]
            overflow-hidden
            border
            border-border
            bg-card
            shadow-[var(--shadow-soft)]
          "
        >
          <iframe
            title={`Map showing ${venue.name}`}
            src={mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="
              h-full
              min-h-[460px]
              w-full
              border-0
            "
          />
        </div>
      </div>

      {/* EXPLORE VENUE */}

      <div className="mt-[20px] flex justify-center md:mt-[40px] lg:mt-[60px]">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="
            group
            px-8
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-gold
            hover:bg-gold
            hover:text-white
          "
        >
          <Link
            href="/venus-park"
            className="mt-2 text-xl leading-[1.15] sm:text-2xl lg:text-3xl"
          >
            Explore the Venue&apos;s Park

            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </div>
    </Section>
  );
}

/* =========================================================
   GRAND STAGE / GALLERY
========================================================= */

export function GrandStage() {
  return (
    <Section id="gallery">
      <Intro
        eyebrow="Moments Captured"
        title="A Glimpse of the Magic"
        description="Curated moments from weddings, receptions, sangeets and corporate galas held at Venus Park."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {showcase.map((item, index) => (
          <Reveal
            key={item.title}
            index={index % 5}
            className={cn(
              index === 0 || index === 4
                ? "lg:row-span-2"
                : ""
            )}
          >
            <figure className="media-zoom relative h-full min-h-72 overflow-hidden border border-border bg-card">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[100%] w-full object-cover"
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

/* =========================================================
   CURATED PACKAGES
========================================================= */

export function CuratedPackages() {
  return (
    <Section tone="sand" id="packages">
      <Intro
        eyebrow="Curated Tiers"
        title="Packages for Every Dream"
        description="From sweet beginnings to royal grandeur, choose the celebration that matches your vision. All packages are fully customisable."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-4">
        {packages.map((tier, index) => (
          <Reveal
            key={tier.name}
            index={index % 4}
          >
            <article
              className={cn(
                "card-elegant relative flex h-full flex-col overflow-hidden p-7",
                tier.featured &&
                  "border-gold bg-ink text-ivory"
              )}
            >
              {tier.featured && (
                <span className="absolute right-4 top-4 bg-gold px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink">
                  Most Celebrated
                </span>
              )}

              <p className="eyebrow">
                {tier.motif}
              </p>

              <h3 className="mt-3 font-display text-3xl">
                {tier.name}
              </h3>

              <p
                className={cn(
                  "mt-3 text-xs uppercase tracking-[0.14em]",
                  tier.featured
                    ? "text-ivory/65"
                    : "text-muted-foreground"
                )}
              >
                {tier.note}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map(
                  (feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex gap-3 text-sm leading-relaxed",
                        tier.featured
                          ? "text-ivory"
                          : ""
                      )}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <div
                className={cn(
                  "mt-8 border-t pt-6",
                  tier.featured
                    ? "border-ivory/15"
                    : "border-border"
                )}
              >
                <div className="relative inline-flex flex-col items-center">
                  <div className="relative mb-2">
                    <span
                      className="
                        relative
                        z-10
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-yellow-300/50
                        bg-gradient-to-r
                        from-red-600
                        via-red-500
                        to-orange-500
                        px-4
                        py-1.5
                        text-xs
                        font-black
                        uppercase
                        tracking-widest
                        text-white
                        shadow-[0_0_20px_rgba(239,68,68,0.45)]
                        animate-pulse
                      "
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-300" />
                      </span>

                      Special Offer
                    </span>

                    <p
                      className={cn(
                        "font-display text-4xl font-bold leading-none transition-transform duration-300 hover:scale-110",
                        tier.featured
                          ? "text-gold"
                          : "text-foreground"
                      )}
                    >
                      {inr(
                        packagePrices.get(
                          tier.name
                        ) ?? 0
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                variant={
                  tier.featured
                    ? "gold"
                    : "outline"
                }
                size="lg"
                className="mt-8 w-full"
              >
                <Link href={tier.href}>
                  Choose {tier.name}
                </Link>
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* =========================================================
   FAMILY STORIES
========================================================= */

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
          <Reveal
            key={story.name}
            index={index % 3}
          >
            <figure className="card-elegant flex h-full flex-col p-8">
              <div
                className="flex gap-1"
                aria-label="5 out of 5 stars"
              >
                {Array.from({
                  length: 5,
                }).map((_, star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              <Gem
                className="mt-8 h-8 w-8 text-gold/60"
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-foreground">
                &quot;{story.quote}&quot;
              </blockquote>

              <figcaption className="mt-7 border-t border-border pt-5">
                <span className="block font-display text-lg">
                  {story.name}
                </span>

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

/* =========================================================
   RESERVE CTA
========================================================= */

export function ReserveCta() {
  return (
    <Section tone="ink" id="contact">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">
            Begin Your Celebration
          </p>

          <h2 className="mt-3 text-3xl text-ivory sm:text-4xl lg:text-5xl">
            Let&apos;s Plan Together
          </h2>

          <Ornament className="mt-5 justify-start" />

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70">
            Share a few details about your event and our
            coordinators will get in touch within 24 hours.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              variant="gold"
              size="xl"
            >
              <Link href="/booking">
                Book Now
                <ArrowRight />
              </Link>
            </Button>

            <Button
              asChild
              variant="outlineLight"
              size="xl"
            >
              <a href={`tel:${venue.phone}`}>
                {venue.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        <div className="border border-ivory/15 p-7">
          <HeartHandshake className="h-8 w-8 text-gold" />

          <h3 className="mt-4 font-display text-2xl text-ivory">
            Visit Us
          </h3>

          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ivory/70">
            {venue.addressLines.map(
              (line) => (
                <span
                  key={line}
                  className="block"
                >
                  {line}
                </span>
              )
            )}
          </address>

          <div className="mt-6 grid gap-4 text-sm text-ivory/70 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                Call
              </p>

              <a
                href={`tel:${venue.phone}`}
                className="mt-2 block hover:text-gold"
              >
                {venue.phoneDisplay}
              </a>

              <a
                href={`tel:${venue.phoneAlt}`}
                className="mt-1 block hover:text-gold"
              >
                {venue.phoneAltDisplay}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                Email
              </p>

              <a
                href={`mailto:${venue.email}`}
                className="mt-2 block break-all hover:text-gold"
              >
                {venue.email}
              </a>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">
                Open
              </p>

              <p className="mt-2">
                Mon - Sun | 9:00 AM - 9:00 PM
              </p>

              <p className="mt-1 text-ivory/55">
                Site visits by appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}