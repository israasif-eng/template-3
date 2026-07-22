import { dealer } from "./data";
import { ChevronRight, Facebook, Instagram, TikTok, YouTube } from "./icons";

export function DealerInfo() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-layout-950 via-layout to-layout-950" />

      <div className="site-container relative z-10 px-4 py-16">
        <div className="text-white lg:flex lg:items-start lg:justify-between lg:gap-24">
          <div className="lg:flex-[2]">
            <h1 className="mb-4 text-4xl font-bold uppercase md:text-5xl">
              {dealer.name}{" "}
              <small className="block text-lg font-normal normal-case opacity-80 md:text-xl">
                Your powersports &amp; marine destination in {dealer.city}
              </small>
            </h1>

            <div className="max-w-3xl space-y-4 text-white/85">
              <p>
                Welcome to <strong>{dealer.name}</strong> — a full-service dealership for
                everything on and off the road, and on the water. We carry a wide selection of
                motorcycles, ATVs, side-by-sides, watercraft, boats, outboard motors, snowmobiles,
                and 3-wheel vehicles from the industry&apos;s leading brands.
              </p>
              <p>
                Whether you are a newcomer or a seasoned rider, our team is here to help you find
                the machine that fits your adventure — backed by an in-house service department
                and a full parts &amp; accessories counter.
              </p>
              <p>
                Shopping used? Our pre-owned inventory is inspected top to bottom so you can take
                to the road or the water with confidence. Have a question? Call us at{" "}
                <a href={dealer.phoneHref} className="underline hover:text-primary">
                  {dealer.phoneLabel}
                </a>{" "}
                or drop by the showroom.
              </p>
            </div>

            <div className="mt-8 items-center md:flex">
              <div className="mb-4 flex flex-col gap-4 md:mb-0 md:mr-8 md:flex-row">
                <a href="#" className="btn-hollow">
                  Directions
                  <ChevronRight className="size-4" />
                </a>
                <a href="/contact" className="btn-hollow">
                  Contact us
                  <ChevronRight className="size-4" />
                </a>
              </div>
              <div className="flex items-center gap-2 md:border-l md:border-white/30 md:pl-8">
                <span>Stay connected</span>
                {[Facebook, Instagram, YouTube, TikTok].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social">
                    <Icon className="size-8 fill-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 hidden lg:mt-0 lg:flex lg:flex-[1] lg:justify-end">
            <div className="flex aspect-[7/10] w-full max-w-sm items-center justify-center rounded border border-white/15 bg-white/5 p-6 text-center text-lg font-bold uppercase tracking-wide text-white/60">
              {dealer.name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
