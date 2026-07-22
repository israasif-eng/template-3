import { Carousel } from "./carousel";
import { featured } from "./data";
import { Placeholder } from "./placeholder";
import { Camera, ChevronRight, Hashtag } from "./icons";

export function FeaturedVehicles() {
  return (
    <section className="site-container relative py-8 md:py-12">
      <div className="mb-6 flex items-center justify-between px-4 md:mb-8">
        <h2 className="text-2xl font-extrabold uppercase text-main md:text-4xl lg:text-5xl">
          Featured vehicles
        </h2>
        <a href="/inventory" className="btn-hollow-primary max-md:hidden">
          See our full inventory
          <ChevronRight className="size-4" />
        </a>
      </div>

      <Carousel itemClass="basis-full sm:basis-1/2 xl:basis-1/3">
        {featured.map((v) => (
          <div
            key={v.stock}
            className="flex h-full flex-col overflow-hidden rounded-b-2xl border"
          >
            <a href="/inventory" className="relative block">
              <Placeholder
                label={`${v.year} ${v.make}`}
                className="aspect-[4/3] w-full"
              />
              <span className="absolute right-0 top-2 flex items-center gap-2 rounded-l bg-black/60 p-2 text-white">
                <Camera className="size-5" />
                <span className="text-base font-extrabold">{v.photos}</span>
              </span>
            </a>

            <div className="flex flex-1 flex-col justify-between gap-2 p-4">
              <div>
                <div className="text-sm font-bold uppercase text-main-300">
                  {v.year} {v.make}
                </div>
                <a
                  href="/inventory"
                  className="line-clamp-3 text-2xl font-extrabold uppercase leading-7 text-black hover:text-primary"
                >
                  {v.title}
                </a>
                <div className="mt-2 inline-flex items-center gap-1">
                  <Hashtag className="size-4 text-black" />
                  <span className="text-sm font-bold text-black">{v.stock}</span>
                </div>
              </div>

              <div className="text-main">
                <div className="text-sm font-bold">
                  <span className="ml-1 line-through">$&nbsp;{v.listPrice}</span>
                  <span className="ml-2 inline-block border-2 border-primary p-1 text-primary">
                    Save ${v.savings}
                  </span>
                </div>
                <div className="text-4xl font-extrabold leading-9">$&nbsp;{v.salePrice}</div>
                <a href="/inventory" className="btn-primary mt-3 w-full">
                  View full details
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="mt-5 px-4 text-center md:hidden">
        <a href="/inventory" className="btn-hollow-primary w-full">
          See our full inventory
          <ChevronRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
