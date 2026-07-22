import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Placeholder } from "@/components/home/placeholder";
import { Phone } from "@/components/home/icons";
import { teamMembers, dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Meet the Team | Supreme Dealer in Saint-Jérôme",
  description:
    "Get to know the friendly team at Supreme Dealer in Saint-Jérôme. Our experts are here to support your needs with trusted service and expertise.",
};

// Cap the roster at six people for this demo clone.
const team = teamMembers.slice(0, 6);

export default function TeamPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">
            Meet the {dealer.name} Team
          </h1>
        </div>
      </div>

      {/* Intro + join card */}
      <section className="site-container flex flex-col gap-6 py-4 lg:flex-row">
        <div className="flex-[2] space-y-4 text-main">
          <p>
            At <strong>{dealer.name}</strong>, our team in <strong>{dealer.city}</strong> is
            dedicated to delivering the best customer experience. Whether you are exploring options
            or need expert advice, our staff is here to guide you every step of the way. From sales
            and{" "}
            <a href="/financing" className="text-primary underline hover:no-underline">
              financing
            </a>{" "}
            to{" "}
            <a href="/service" className="text-primary underline hover:no-underline">
              service
            </a>{" "}
            and{" "}
            <a href="/parts" className="text-primary underline hover:no-underline">
              parts
            </a>
            , our team is committed to helping you find the right solution and keeping it performing
            at its best.
          </p>
          <p>
            We are proud to serve <strong>{dealer.city}</strong> and the surrounding areas, building
            long-lasting relationships with every customer who visits.{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              Contact us
            </a>{" "}
            or stop by today and meet the people who make our dealership your trusted destination.
          </p>
        </div>

        <div className="flex-1">
          <div className="rounded-xl border p-8">
            <div className="text-3xl font-extrabold uppercase text-main sm:text-4xl">
              Join our passionate team!
            </div>
            <p className="mt-2 text-lg text-main-300">
              Want to be part of a crew that runs on passion and loves going the extra mile? Reach
              out and jump in!
            </p>
            <a href="/contact" className="btn-primary mt-4 w-full text-center">
              Submit my application
            </a>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="site-container py-4">
        <div className="grid grid-cols-1 justify-items-center gap-8 pb-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex w-full max-w-[400px] flex-col">
              <Placeholder label={member.name} className="aspect-[400/500] w-full" />
              <div className="flex h-full flex-col justify-between gap-2 bg-[#f8f8f8] p-4">
                <div>
                  <div className="text-2xl font-bold text-main">{member.name}</div>
                  <div className="text-sm text-main-300">{member.title}</div>
                </div>
                <a
                  href={member.phoneHref}
                  className="flex items-center gap-1 text-base text-main hover:underline"
                >
                  <Phone className="size-4 text-primary" />
                  {member.phoneLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
