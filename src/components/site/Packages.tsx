"use client";

import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { comparisonRows, packages, type Pkg } from "@/data/venue";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function PackageCard({ pkg, index = 0 }: { pkg: Pkg; index?: number }) {
  return (
    <Reveal index={index} className={cn(pkg.featured && "lg:-my-6")}>
      <article
        className={cn(
          "card-elegant flex h-full flex-col p-8",
          pkg.featured && "border-gold/60 bg-ink text-ivory lg:p-10",
        )}
      >
        <span
          className={cn(
            "self-start border px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em]",
            pkg.featured ? "border-gold bg-gold text-ink" : "border-gold/50 text-gold",
          )}
        >
          {pkg.badge}
        </span>
        <h3
          className={cn(
            "mt-6 font-display text-3xl",
            pkg.featured ? "text-ivory" : "text-foreground",
          )}
        >
          {pkg.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            pkg.featured ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {pkg.best}
        </p>
        <p className="mt-6 font-display text-2xl text-gold">Starting from {pkg.price}</p>
        {pkg.inherits && (
          <p
            className={cn(
              "mt-6 text-xs uppercase tracking-[0.16em]",
              pkg.featured ? "text-ivory/60" : "text-muted-foreground",
            )}
          >
            {pkg.inherits}
          </p>
        )}
        <ul className="mt-4 flex-1 space-y-2.5">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-3 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className={pkg.featured ? "text-ivory/85" : "text-foreground/85"}>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-2">
          <Button asChild variant={pkg.featured ? "gold" : "ink"} size="lg">
            <Link href={`/booking?pkg=${pkg.name.replace(" Package", "")}`}>{pkg.cta}</Link>
          </Button>
          <Button asChild variant={pkg.featured ? "outlineLight" : "outline"} size="lg">
            <Link href={`/packages/${pkg.slug}`}>View full details</Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function PackageGrid() {
  return (
    <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
      {packages.map((p, i) => (
        <PackageCard key={p.slug} pkg={p} index={i} />
      ))}
    </div>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-gold" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-sm text-foreground/85">{value}</span>;
}

export function PackageComparison() {
  return (
    <div className="mt-16 overflow-x-auto border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-center">
        <caption className="sr-only">Comparison of Gold, Platinum and Diamond packages</caption>
        <thead>
          <tr className="bg-ink text-ivory">
            <th scope="col" className="p-4 text-left text-xs uppercase tracking-[0.16em]">
              Feature
            </th>
            {packages.map((p) => (
              <th key={p.slug} scope="col" className="p-4 font-display text-lg font-medium">
                {p.name.replace(" Package", "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 ? "bg-sand/60" : ""}>
              <th scope="row" className="p-4 text-left text-sm font-medium">
                {row.label}
              </th>
              <td className="p-4">
                <Cell value={row.gold} />
              </td>
              <td className="p-4">
                <Cell value={row.platinum} />
              </td>
              <td className="p-4">
                <Cell value={row.diamond} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PricingNote() {
  return (
    <p className="mt-6 text-sm text-muted-foreground">
      Final pricing depends on the event date, guest count, menu, decoration and selected services.
    </p>
  );
}
