import { SAMPLE_SITES } from "./sample-sites";
import type { DealerSite } from "../types";

// Thin data-access seam. Today it reads the in-memory seed; swapping to a real
// `dealer_sites` query happens here, leaving templates and routes untouched.
export function getSiteBySlug(slug: string): DealerSite | undefined {
  return SAMPLE_SITES.find((s) => s.slug === slug);
}

export function getAllSites(): DealerSite[] {
  return SAMPLE_SITES;
}
