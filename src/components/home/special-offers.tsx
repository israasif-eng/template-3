import { specialOffers } from "./data";

export function SpecialOffers() {
  return (
    <section className="site-container py-4">
      <h2 className="pb-4 text-2xl font-extrabold uppercase text-black">Special offers</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {specialOffers.map((o) => (
          <a
            key={o.title}
            href="/promotions"
            className="relative flex aspect-[1000/560] w-full items-end rounded bg-gradient-to-br from-layout via-layout-950 to-primary/40"
          >
            <span className="m-4 rounded bg-black/60 px-4 py-2 text-sm font-bold uppercase text-white">
              {o.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
