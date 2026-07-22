import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { InventoryListing } from "@/components/home/inventory-listing";
import { SpecialOffers } from "@/components/home/special-offers";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "New Powersports & Marine Vehicles | Supreme Dealer",
  description:
    "Browse the new powersports and marine inventory at Supreme Dealer in Saint-Jérôme — motorcycles, ATVs, side-by-sides, watercraft, boats, and snowmobiles.",
};

export default function NewInventoryPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">New Inventory</h1>
        </div>
      </div>

      {/* Listing */}
      <div className="site-container py-4">
        <InventoryListing />
      </div>

      <SpecialOffers />

      {/* SEO content */}
      <section className="site-container py-8">
        <div className="max-w-4xl space-y-4 text-main">
          <h2 className="text-2xl font-extrabold uppercase">
            Discover Our New Vehicles for Sale in {dealer.city}
          </h2>
          <p>
            Dreaming of that fresh-off-the-lot thrill? Dive into our new inventory. At{" "}
            <strong>{dealer.name}</strong> we carry a wide range of{" "}
            <strong>powersports</strong> and <strong>marine vehicles</strong>, featuring the
            newest models from your favorite brands.
          </p>
          <p>
            Whether you are hitting the trails or just enjoying the ride, our brand-new lineup is
            engineered for excitement and built to last. Plus, our expert{" "}
            <a href="/service" className="text-primary underline hover:no-underline">
              service department
            </a>{" "}
            is here to keep your ride in top condition, so your adventures never miss a beat.
          </p>
          <p>
            Spotted the perfect machine? Have questions? Our friendly, knowledgeable team is here
            to help.{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              Contact us
            </a>{" "}
            — we are excited to guide you through our latest offerings.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
