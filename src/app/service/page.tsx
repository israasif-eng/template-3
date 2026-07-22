import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { ServiceForm } from "@/components/home/service-form";
import { Placeholder } from "@/components/home/placeholder";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Maintenance and Repairs | Supreme Dealer",
  description:
    "Discover the maintenance and repair services at Supreme Dealer in Saint-Jérôme, keeping your powersports and marine vehicles performing at their best.",
};

export default function ServicePage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Maintenance and Repairs</h1>
        </div>
      </div>

      {/* Content + appointment form */}
      <section className="site-container flex flex-col gap-6 py-4 xl:flex-row">
        <div className="flex-[2] space-y-4">
          <Placeholder label={`${dealer.name} Service`} className="aspect-[1000/500] w-full rounded-lg" />
          <div className="max-w-3xl space-y-4 text-main">
            <p>
              At <strong>{dealer.name}</strong> in <strong>{dealer.city}</strong>, we know how
              important your vehicle is to your adventures and daily travels. That is why we offer a
              full range of maintenance and repair services to ensure a worry-free experience on the
              road, trail, or track.
            </p>
            <p>
              Our certified technicians, passionate about <strong>powersports</strong>, are committed
              to providing quality service, using genuine replacement parts (OEM) to ensure the
              performance and durability of your vehicle. Whether it is for an{" "}
              <strong>ATV, motorcycle, side-by-side, boat</strong> or <strong>snowmobile</strong>,
              our team is ready to help you keep your vehicle in top condition.
            </p>
            <div>
              <p className="font-bold">Services offered:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Oil change</li>
                <li>Regular maintenance</li>
                <li>General repairs</li>
                <li>And much more!</li>
              </ul>
            </div>
            <p>
              Need a repair? Take a look at our selection of{" "}
              <a href="/parts" className="text-primary underline hover:no-underline">
                parts and accessories
              </a>{" "}
              to discover the products available to complete and personalize your vehicle.
            </p>
            <p>
              If you have any questions or would like to schedule a service, do not hesitate to{" "}
              <a href="/contact" className="text-primary underline hover:no-underline">
                contact us
              </a>{" "}
              today!
            </p>
          </div>
        </div>

        <aside className="flex flex-1 flex-col gap-8">
          <ServiceForm />

          <div>
            <h2 className="pb-4 text-2xl font-extrabold uppercase text-black">Special offers</h2>
            <a
              href="/promotions"
              className="relative flex aspect-[1000/560] w-full items-end rounded bg-gradient-to-br from-layout via-layout-950 to-primary/40"
            >
              <span className="m-4 rounded bg-black/60 px-4 py-2 text-sm font-bold uppercase text-white">
                Summer Ride Loyalty Program
              </span>
            </a>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
