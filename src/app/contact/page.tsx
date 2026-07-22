import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { ContactUsForm } from "@/components/home/contact-us-form";
import { Pin, Phone } from "@/components/home/icons";
import { dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Contact Us | Supreme Dealer in Saint-Jérôme",
  description:
    "Contact Supreme Dealer for all your powersports needs. We're here to answer any questions. Give us a call or visit us in-store!",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Contact Us</h1>
        </div>
      </div>

      <section className="site-container flex flex-col gap-6 py-4 xl:flex-row">
        {/* Left column: intro, map, visit us, hours */}
        <div className="flex-[2] space-y-8">
          <div className="max-w-3xl space-y-4 text-main">
            <p>
              Thank you for visiting <strong>{dealer.name}</strong>! We are here to help with all
              your powersports and marine needs, from finding the perfect vehicle to servicing your
              current one. Our knowledgeable team is ready to provide personalized assistance and
              answer any questions you may have.
            </p>
            <p>
              Feel free to reach out via phone at{" "}
              <a href={dealer.phoneHref} className="text-primary underline hover:no-underline">
                {dealer.phoneLabel}
              </a>
              , we will be happy to answer your questions. You can also visit us directly in{" "}
              <strong>{dealer.city}</strong>. We look forward to helping you embark on an adventure
              with confidence and excitement. See you soon!
            </p>
          </div>

          {/* Map + address */}
          <div className="space-y-4">
            <iframe
              title={`${dealer.name} location`}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.99%2C45.76%2C-73.96%2C45.78&layer=mapnik"
              className="h-[375px] w-full rounded-lg border"
              loading="lazy"
            />

            <h2 className="text-2xl font-extrabold uppercase text-main">Visit us</h2>
            <div className="rounded-xl border p-8">
              <div className="flex flex-col gap-8 md:flex-row md:gap-20">
                <div className="flex-1">
                  <div className="flex items-center gap-2 pb-2 text-base font-extrabold text-main">
                    <Pin className="size-4 text-primary" />
                    Address
                  </div>
                  <div className="text-sm leading-relaxed text-main-300">
                    {dealer.address}
                    <br />
                    {dealer.city}, {dealer.region}
                    <br />
                    {dealer.postal}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 pb-2 text-base font-extrabold text-main">
                    <Phone className="size-4 text-primary" />
                    Phone
                  </div>
                  <div className="text-sm leading-relaxed text-main-300">
                    General:{" "}
                    <a href={dealer.phoneHref} className="font-bold hover:text-primary">
                      {dealer.phoneLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase text-main">Opening hours</h2>
            <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
              <div className="rounded-xl border p-8">
                <div className="border-b pb-4 text-2xl font-extrabold uppercase text-main">
                  Sales
                </div>
                <div className="space-y-2 pt-4 text-sm leading-relaxed text-main-300">
                  {dealer.hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span>{h.day} :</span>
                      <span className="text-right">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: contact form */}
        <aside className="flex-1">
          <ContactUsForm />
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
