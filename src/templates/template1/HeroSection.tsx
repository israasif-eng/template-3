import type { TemplateProps } from "@/features/dealer-site/types";
import { sanitizeColor } from "@/features/dealer-site/lib/sanitize-color";

export function HeroSection({ site }: TemplateProps) {
  const primary = sanitizeColor(site.branding.primaryColor);
  const { heroHeadline, heroSubtext, heroCtaLabel } = site.landingContent;

  return (
    <section id="hero" className="border-b border-black/5 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: primary }}>
          {site.branding.tagline}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-neutral-950 md:text-6xl">
          {heroHeadline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-neutral-600">{heroSubtext}</p>
        <a
          href="#inventory"
          className="mt-8 inline-block rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: primary }}
        >
          {heroCtaLabel}
        </a>
      </div>
    </section>
  );
}
