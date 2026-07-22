import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { InventoryListing } from "@/components/home/inventory-listing";
import { SpecialOffers } from "@/components/home/special-offers";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Used Powersports & Marine Vehicles | Supreme Dealer",
  description:
    "Browse quality pre-owned powersports and marine vehicles at Supreme Dealer in Saint-Jérôme — each inspected top to bottom by our expert technicians.",
};

export default function UsedInventoryPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Used Inventory</h1>
        </div>
      </div>

      {/* Listing */}
      <div className="site-container py-4">
        <InventoryListing condition="used" />
      </div>

      <SpecialOffers />

      {/* SEO content */}
      <section className="site-container py-8">
        <div className="max-w-4xl space-y-4 text-main">
          <h2 className="text-2xl font-extrabold uppercase">
            Discover Our Used Vehicles for Sale in {dealer.city}
          </h2>
          <p>
            Ready for a new adventure without the price tag of a{" "}
            <a href="/new" className="text-primary underline hover:no-underline">
              new vehicle
            </a>
            ? Dive into our <strong>used inventory</strong> at{" "}
            <strong>{dealer.name}</strong>.
          </p>
          <p>
            Explore a wide selection of pre-owned vehicles from major brands, chosen to offer both
            value and peace of mind. Each used vehicle is put through a{" "}
            <strong>meticulous inspection by our expert technicians</strong>, so you can hit your
            favorite routes with total confidence. Our{" "}
            <a href="/service" className="text-primary underline hover:no-underline">
              service department
            </a>{" "}
            and fully stocked{" "}
            <a href="/parts" className="text-primary underline hover:no-underline">
              parts department
            </a>{" "}
            keep your adventures running smoothly.
          </p>
          <p>
            Spotted a machine you love? Have questions?{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              Reach out to our friendly team
            </a>{" "}
            — we are eager to help you find the perfect match.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
