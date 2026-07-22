import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { PromotionsListing } from "@/components/home/promotions-listing";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Promotions | Offers at Supreme Dealer",
  description:
    "Take advantage of the latest offers at Supreme Dealer in Saint-Jérôme. Discover exclusive promotions on new and used powersports and marine vehicles.",
};

export default function PromotionsPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Promotions</h1>
        </div>
      </div>

      {/* Listing */}
      <div className="site-container">
        <PromotionsListing />
      </div>

      {/* SEO content */}
      <section className="site-container py-8">
        <div className="max-w-4xl space-y-4 text-main">
          <h2 className="text-2xl font-extrabold uppercase">
            New and Used Vehicles: Prices You Can&apos;t Miss
          </h2>
          <p>
            Are you dreaming of a new vehicle, but also want to get a good deal? At{" "}
            <strong>{dealer.name}</strong>, we have got just what you are looking for! We regularly
            offer <strong>exclusive promotions</strong> so you can enjoy the best machines without
            breaking your budget.
          </p>
          <p>
            Our dealership in <strong>{dealer.city}</strong> offers you a wide choice of{" "}
            <a href="/new" className="text-primary underline hover:no-underline">
              new
            </a>{" "}
            and{" "}
            <a href="/used" className="text-primary underline hover:no-underline">
              used vehicles
            </a>
            , quality{" "}
            <a href="/service" className="text-primary underline hover:no-underline">
              maintenance services
            </a>{" "}
            and a selection of{" "}
            <a href="/parts" className="text-primary underline hover:no-underline">
              parts and accessories
            </a>
            . With our special offers, we make practicing your favorite powersports as enjoyable as
            it is affordable.
          </p>
          <p>
            Do you have any questions about our current promotions?{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              Contact us today
            </a>
            , and our team will be happy to answer them!
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
