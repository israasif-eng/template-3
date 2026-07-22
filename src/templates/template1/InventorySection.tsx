import type { TemplateProps } from "@/features/dealer-site/types";
import { sanitizeColor } from "@/features/dealer-site/lib/sanitize-color";
import { PhotoGallery } from "@/features/dealer-site/components/photo-gallery";

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export function InventorySection({ site }: TemplateProps) {
  const primary = sanitizeColor(site.branding.primaryColor);
  const { inventoryTitle, inventorySubtitle, featuredVehicles } = site.landingContent;

  return (
    <section id="inventory" className="border-y border-black/5 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950">{inventoryTitle}</h2>
        {inventorySubtitle && <p className="mt-2 text-neutral-600">{inventorySubtitle}</p>}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredVehicles.map((v) => {
            const savings = v.listPrice && v.listPrice > v.price ? v.listPrice - v.price : 0;
            return (
              <article key={v.id} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="p-3">
                  <PhotoGallery vehicle={v} />
                </div>
                <div className="flex flex-1 flex-col gap-1 px-4 pb-4">
                  {v.make && <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">{v.make}</div>}
                  <h3 className="text-lg font-bold text-neutral-950">{v.title}</h3>
                  <div className="text-xs text-neutral-500">
                    {v.mileage.toLocaleString()} mi{v.stockNumber ? ` · Stock #${v.stockNumber}` : ""}
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-neutral-950">{usd(v.price)}</span>
                    {savings > 0 && <span className="text-sm text-neutral-400 line-through">{usd(v.listPrice!)}</span>}
                  </div>
                  <a
                    href="#contact"
                    className="mt-3 block rounded-md px-4 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: primary }}
                  >
                    View details
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
