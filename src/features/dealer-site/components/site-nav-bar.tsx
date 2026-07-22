import type { DealerSite } from "../types";
import { sanitizeColor } from "../lib/sanitize-color";

// Shared shell nav (guide §8): rendered around every "shared"-chrome template.
// Reads brand + contact from the site; holds no editable literals.
export function SiteNavBar({ site }: { site: DealerSite }) {
  const primary = sanitizeColor(site.branding.primaryColor);
  const { businessName } = site.branding;
  const home = `/sites/${site.slug}`;

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href={home} className="text-lg font-bold tracking-tight text-neutral-900">
          {businessName}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
          <a href={`${home}#inventory`} className="hover:text-neutral-950">Inventory</a>
          <a href={`${home}#about`} className="hover:text-neutral-950">About</a>
          <a href={`${home}#contact`} className="hover:text-neutral-950">Contact</a>
        </nav>
        <a
          href={`tel:${site.contact.phone}`}
          className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: primary }}
        >
          {site.contact.phone}
        </a>
      </div>
    </header>
  );
}
