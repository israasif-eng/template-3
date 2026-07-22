import type { DealerSite } from "../types";
import { sanitizeUrl } from "../lib/sanitize-url";

const SOCIAL_KEYS = ["facebook", "instagram", "x", "youtube", "tiktok"] as const;

// Shared shell footer (guide §8). Contact + socials from the site data.
export function SiteFooter({ site }: { site: DealerSite }) {
  const { contact, branding } = site;
  const year = site.publishedAt ? new Date(site.publishedAt).getFullYear() : 2026;
  const socials = SOCIAL_KEYS.map((k) => ({ k, url: sanitizeUrl(site.socialLinks[k]) })).filter((s) => s.url);

  return (
    <footer className="mt-auto border-t border-black/10 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-base font-bold text-white">{branding.businessName}</div>
          <p className="mt-2 text-sm text-neutral-400">{branding.tagline}</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white">Visit us</div>
          <address className="mt-2 not-italic text-neutral-400">
            {contact.addressLine1}
            <br />
            {contact.city}, {contact.region} {contact.postalCode}
          </address>
          <a href={`tel:${contact.phone}`} className="mt-2 block hover:text-white">{contact.phone}</a>
          <p className="mt-1 text-neutral-500">{contact.hours}</p>
        </div>
        {socials.length > 0 && (
          <div className="text-sm">
            <div className="font-semibold text-white">Follow</div>
            <ul className="mt-2 space-y-1">
              {socials.map((s) => (
                <li key={s.k}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="capitalize text-neutral-400 hover:text-white">
                    {s.k}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-neutral-500">
        © {year} {branding.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
