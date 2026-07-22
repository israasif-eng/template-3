import type { ReactNode } from "react";
import type { DealerSite } from "../types";
import { sanitizeColor } from "../lib/sanitize-color";
import { SiteNavBar } from "./site-nav-bar";
import { SiteFooter } from "./site-footer";

// Shared shell wrapping every "shared"-chrome template (nav + footer). A
// template declaring chrome:"self" owns its own header/footer and skips this.
// Exposes brand colors as CSS vars so templates can theme without a rebuild.
export function PublicSiteLayout({ site, children }: { site: DealerSite; children: ReactNode }) {
  const style = {
    ["--brand-primary" as string]: sanitizeColor(site.branding.primaryColor),
    ["--brand-accent" as string]: sanitizeColor(site.branding.accentColor, "#0c0b0a"),
  } as React.CSSProperties;

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900" style={style}>
      <SiteNavBar site={site} />
      <div className="flex-1">{children}</div>
      <SiteFooter site={site} />
    </div>
  );
}
