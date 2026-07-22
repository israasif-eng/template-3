import type { TemplateProps } from "@/features/dealer-site/types";

export function AboutSection({ site }: TemplateProps) {
  const { aboutTitle, aboutBody } = site.landingContent;
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950">{aboutTitle}</h2>
      <p className="mt-4 max-w-3xl whitespace-pre-line leading-relaxed text-neutral-600">{aboutBody}</p>
    </section>
  );
}
