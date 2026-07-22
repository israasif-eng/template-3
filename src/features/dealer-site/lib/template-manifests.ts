// Page/section visibility schema. Drives PagesPanel / SectionsPanel and what a
// template renders. Every toggle-able section a template renders MUST have an
// entry here with a stable `id` (guide §3.5).

export interface SectionManifest {
  id: string; // must match the key a template checks in site.visibility
  label: string;
  toggleable: boolean; // false => always shown (e.g. footer)
}

export interface PageManifest {
  id: string;
  label: string;
  path: string; // relative to /sites/:slug ("" = landing root)
  sections: SectionManifest[];
}

export interface TemplateManifest {
  templateId: string;
  pages: PageManifest[];
}

// Shared home-page section set used by the bundled templates. New templates
// with different section granularity add their own manifest entry.
const HOME_SECTIONS: SectionManifest[] = [
  { id: "hero", label: "Hero", toggleable: true },
  { id: "about", label: "About", toggleable: true },
  { id: "inventory", label: "Featured Inventory", toggleable: true },
  { id: "contact", label: "Contact", toggleable: true },
  { id: "footer", label: "Footer", toggleable: false },
];

function homeManifest(templateId: string): TemplateManifest {
  return {
    templateId,
    pages: [{ id: "home", label: "Home", path: "", sections: HOME_SECTIONS }],
  };
}

export const TEMPLATE_MANIFESTS: TemplateManifest[] = [
  homeManifest("template1"),
];

export function getManifest(templateId: string): TemplateManifest | undefined {
  return TEMPLATE_MANIFESTS.find((m) => m.templateId === templateId);
}

/** True if a section should render given the site's visibility map. */
export function isSectionVisible(
  visibility: Record<string, Record<string, boolean>>,
  pageId: string,
  section: SectionManifest,
): boolean {
  if (!section.toggleable) return true;
  return visibility[pageId]?.[section.id] !== false; // default: shown
}
