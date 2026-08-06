import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { PackageComparison, PricingNote } from "@/components/site/Packages";
import { AvailabilitySection, FAQSection, Showcase } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { JsonLd } from "@/components/site/JsonLd";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/images";
import { packages } from "@/data/venue";

const heroImage = {
  gold: images.celebrations,
  platinum: images.weddings,
  diamond: images.hero,
} as const;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) {
    return { title: "Package unavailable — Venus Park", robots: { index: false } };
  }
  return {
    title: `${pkg.name} — Venus Park Convention Hall`,
    description: `${pkg.best} ${pkg.features.slice(0, 4).join(", ")}.`,
    openGraph: {
      title: `${pkg.name} — Venus Park`,
      description: pkg.best,
      url: `/packages/${slug}`,
    },
    alternates: { canonical: `/packages/${slug}` },
  };
}

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <>
      <PageHero
        eyebrow={pkg.badge}
        title={pkg.name}
        description={pkg.best}
        image={heroImage[pkg.slug]}
        actions={
          <>
            <Button asChild variant="gold" size="xl">
              <a href="#package-enquiry">{pkg.cta}</a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link href="/packages">Compare packages</Link>
            </Button>
          </>
        }
      />

      <Section>
        <nav aria-label="Breadcrumb" className="mb-10 text-xs uppercase tracking-[0.14em]">
          <ol className="flex flex-wrap gap-2 text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/packages" className="hover:text-gold">
                Packages
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{pkg.name}</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="What's included"
              title={`Inside the ${pkg.name.replace(" Package", "")} experience`}
              description={pkg.inherits}
            />
            <p className="mt-8 font-display text-3xl text-gold">Starting from {pkg.price}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {pkg.features.map((f, i) => (
                <Reveal key={f} index={i % 4}>
                  <li className="flex gap-3 border-b border-border pb-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {f}
                  </li>
                </Reveal>
              ))}
            </ul>
            <PricingNote />
          </div>
          <div id="package-enquiry" className="scroll-mt-28">
            <EnquiryForm
              id={`pkg-${pkg.slug}`}
              defaultPackage={pkg.name.replace(" Package", "")}
              submitLabel={pkg.cta}
            />
          </div>
        </div>

        <PackageComparison />
      </Section>

      <AvailabilitySection defaultPackage={pkg.name.replace(" Package", "")} />
      <Showcase />
      <FAQSection limit={6} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Packages", item: "/packages" },
            { "@type": "ListItem", position: 3, name: pkg.name, item: `/packages/${slug}` },
          ],
        }}
      />
    </>
  );
}
