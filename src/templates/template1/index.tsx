import type { TemplateProps } from "@/features/dealer-site/types";
import { getManifest, isSectionVisible } from "@/features/dealer-site/lib/template-manifests";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { InventorySection } from "./InventorySection";
import { ContactSection } from "./ContactSection";

// Template root. Pure function of `site` — every visible value reads from
// DealerSite. Sections render only when visibility allows (guide §3.5). Uses
// the shared shell (nav + footer) via the public route, so it declares no
// chrome of its own.
export function Template1({ site }: TemplateProps) {
  const manifest = getManifest("template1");
  const home = manifest?.pages.find((p) => p.id === "home");
  const show = (id: string) =>
    home ? isSectionVisible(site.visibility, "home", home.sections.find((s) => s.id === id)!) : true;

  return (
    <main>
      {show("hero") && <HeroSection site={site} />}
      {show("about") && <AboutSection site={site} />}
      {show("inventory") && <InventorySection site={site} />}
      {show("contact") && <ContactSection site={site} />}
    </main>
  );
}
