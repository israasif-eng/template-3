import { SiteHeader } from "@/components/home/site-header";
import { Hero } from "@/components/home/hero";
import { PromoSlider } from "@/components/home/promo-slider";
import { BrandGallery } from "@/components/home/brand-gallery";
import { FeaturedVehicles } from "@/components/home/featured-vehicles";
import { DealerInfo } from "@/components/home/dealer-info";
import { Testimonials } from "@/components/home/testimonials";
import { SiteFooter } from "@/components/home/site-footer";

// Supreme Dealer homepage — a Next.js clone of the powersports dealer layout.
export default function Home() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
        <Hero />
      </div>
      <PromoSlider />
      <BrandGallery />
      <FeaturedVehicles />
      <DealerInfo />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
