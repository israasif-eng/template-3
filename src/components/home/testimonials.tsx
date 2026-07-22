import { Carousel } from "./carousel";
import { dealer, reviews } from "./data";
import { Quote, Star } from "./icons";

export function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f2f2f2] py-24">
      <div className="site-container">
        <div className="mb-8 flex flex-col items-center gap-4 md:flex-row">
          <h2 className="max-w-md text-center text-4xl font-extrabold text-main md:text-left md:text-5xl">
            Why Choose {dealer.name}?
          </h2>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex text-2xl text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6" />
              ))}
            </div>
            <div className="text-main">{dealer.reviewCount} reviews</div>
          </div>
        </div>

        <Carousel itemClass="basis-full sm:basis-1/2 xl:basis-1/4">
          {reviews.map((r) => (
            <div
              key={r.name + r.text}
              className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col items-start gap-2">
                <Quote className="size-10 rounded-lg border p-2 text-main" />
                <p className="mt-2 line-clamp-4 text-main">« {r.text} »</p>
              </div>
              <div>
                <div className="mt-4 font-bold text-main">
                  {r.name}{" "}
                  <span className="text-xs text-primary">(Verified purchase)</span>
                </div>
                <div className="text-xs text-main-300">{r.location}</div>
                <div className="text-xs text-main-300">{r.date}</div>
                <div className="mt-6 flex text-xl text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
