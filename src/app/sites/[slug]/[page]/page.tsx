import { notFound } from "next/navigation";
import { fetchPublicSite } from "@/features/dealer-site/api/public-dealer-site.api";
import { getTemplate } from "@/features/dealer-site/lib/templates";
import { PublicSiteLayout } from "@/features/dealer-site/components/public-site-layout";

// Extra template pages beyond the landing root (e.g. /sites/:slug/used). The
// page segment is looked up in the template's `routes` map — general, not
// per-template special-casing. Same chrome handling as the root route.
export default async function PublicSiteSubPage({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page } = await params;
  const site = fetchPublicSite(slug);
  if (!site) notFound();

  const template = getTemplate(site.templateId);
  if (!template) notFound();

  const PageComponent = template.routes?.[page];
  if (!PageComponent) notFound();

  if (template.chrome === "self") {
    return <PageComponent site={site} />;
  }

  return (
    <PublicSiteLayout site={site}>
      <PageComponent site={site} />
    </PublicSiteLayout>
  );
}
