import { getSiteBySlug } from "../data/store";
import type { DealerSite } from "../types";

// Unauthenticated fetch used by the public /sites/:slug route (guide §1/§8).
// Only returns published sites — never touch the authenticated editor API here.
export function fetchPublicSite(slug: string): DealerSite | null {
  const site = getSiteBySlug(slug);
  if (!site || !site.published) return null;
  return site;
}
