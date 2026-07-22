import type { ComponentType } from "react";
import type { TemplateProps } from "../types";
import { Template1 } from "@/templates/template1";

// The registry of templates. A new template is added HERE (guide §3.6) plus a
// folder under src/templates/templateN/ and a manifest entry — nothing else.
// Keep this object shape identical across every entry.

export interface TemplateRegistryEntry {
  id: string;
  name: string;
  description: string;
  thumbnail: string; // public path or data-uri
  component: ComponentType<TemplateProps>;
  // "shared" (default): rendered inside the shared PublicSiteLayout (nav+footer).
  // "self": the template owns its header/footer; the public route skips the shell.
  chrome?: "shared" | "self";
  // Extra named pages beyond the landing root, keyed by manifest page path
  // (e.g. "used" -> /sites/:slug/used). The /sites/:slug/[page] route looks
  // these up — a general mechanism, not per-template special-casing.
  routes?: Record<string, ComponentType<TemplateProps>>;
}

export const TEMPLATES: TemplateRegistryEntry[] = [
  {
    id: "template1",
    name: "Classic Lot",
    description: "Hero, about, featured inventory, and a contact block. Shared nav + footer shell.",
    thumbnail: "/thumbnails/template1.svg",
    component: Template1,
  },
];

export function getTemplate(id: string): TemplateRegistryEntry | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
