import { notFound } from "next/navigation";
import { fetchPublicSite } from "@/features/dealer-site/api/public-dealer-site.api";
import { getTemplate } from "@/features/dealer-site/lib/templates";
import { PublicSiteLayout } from "@/features/dealer-site/components/public-site-layout";

// The public, unauthenticated route. It selects a template from the registry by
// the site's templateId and renders it. Templates default to the shared shell;
// a template declaring chrome:"self" owns its own header/footer, so the shell is
// skipped (general capability, not per-template special-casing).
export default async function PublicSitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = fetchPublicSite(slug);
  if (!site) notFound();

  const template = getTemplate(site.templateId);
  if (!template) notFound();

  const TemplateComponent = template.component;

  if (template.chrome === "self") {
    return <TemplateComponent site={site} />;
  }

  return (
    <PublicSiteLayout site={site}>
      <TemplateComponent site={site} />
    </PublicSiteLayout>
  );
}
