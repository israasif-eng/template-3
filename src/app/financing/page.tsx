import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { FinancingForm } from "@/components/home/financing-form";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Financing Options | Supreme Dealer",
  description:
    "Explore flexible financing options at Supreme Dealer in Saint-Jérôme. Apply online, get approved with competitive rates, and ride away in the vehicle of your dreams.",
};

export default function FinancingPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Financing</h1>
        </div>
      </div>

      {/* SEO content */}
      <section className="site-container py-4">
        <div className="max-w-4xl space-y-4 text-main">
          <h2 className="text-2xl font-extrabold uppercase">
            Get on the Road with Flexible Financing at {dealer.name}
          </h2>
          <p>
            At <strong>{dealer.name}</strong> in <strong>{dealer.city}</strong>, we believe everyone
            deserves to experience the thrill of <strong>powersports</strong>. That is why we offer
            flexible financing options to help you bring home your dream vehicle — whether it is a
            boat, ATV, or snowmobile.
          </p>
          <h3 className="text-xl font-bold">Simple and Convenient Financing</h3>
          <p>Our financing process is quick and hassle-free. Here is how it works:</p>
          <ol className="list-decimal space-y-1 pl-6">
            <li>
              <strong>Apply online</strong>: Fill out our easy financing application form.
            </li>
            <li>
              <strong>Get approved</strong>: Our team works with top lenders to secure competitive
              rates.
            </li>
            <li>
              <strong>Ride away</strong>: Sign the agreement, secure your vehicle, and enjoy the
              ride!
            </li>
          </ol>
          <p>
            Ready to start? Browse our{" "}
            <a href="/new" className="text-primary underline hover:no-underline">
              new inventory
            </a>{" "}
            or{" "}
            <a href="/used" className="text-primary underline hover:no-underline">
              used inventory
            </a>{" "}
            to find the perfect fit for your adventures.
          </p>
          <p>
            Have questions or are you ready to apply?{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              Contact us
            </a>{" "}
            to speak with our team and learn more about our financing options.
          </p>
        </div>
      </section>

      {/* Financing request form */}
      <section className="site-container pb-12">
        <FinancingForm />
      </section>

      <SiteFooter />
    </main>
  );
}
