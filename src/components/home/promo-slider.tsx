import { Carousel } from "./carousel";
import { slides } from "./data";

export function PromoSlider() {
  return (
    <section className="site-container my-8">
      <Carousel itemClass="basis-full">
        {slides.map((s) => (
          <a
            key={s.title}
            href="/promotions"
            className="relative flex aspect-[1920/720] w-full items-end rounded bg-gradient-to-br from-layout via-layout-950 to-primary/40"
          >
            <span className="m-4 rounded bg-black/60 px-4 py-2 text-sm font-bold uppercase text-white">
              {s.title}
            </span>
          </a>
        ))}
      </Carousel>
    </section>
  );
}
