import type { ReactNode } from "react";
import { Section } from "./Section";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Section className="pt-36">
      <div className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Last updated {updated}
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground">
          {children}
        </div>
      </div>
    </Section>
  );
}
