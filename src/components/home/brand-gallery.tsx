import Image from "next/image";
import { brands } from "./data";

export function BrandGallery() {
  return (
    <section className="py-3">
      <div className="site-container my-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
        {brands.map((b) => (
          <a
            key={b.name}
            href="/new"
            aria-label={b.name}
            title={b.name}
            className="flex items-center justify-center transition hover:opacity-70"
          >
            {b.logo ? (
              <Image
                src={b.logo}
                alt={b.name}
                width={160}
                height={64}
                className={
                  b.xl
                    ? "h-24 w-auto object-contain lg:h-28"
                    : b.big
                      ? "h-16 w-auto object-contain lg:h-20"
                      : "h-10 w-auto object-contain lg:h-12"
                }
              />
            ) : (
              <span
                className={
                  b.big
                    ? "text-2xl font-black uppercase tracking-tight text-main-300 transition hover:text-primary lg:text-3xl"
                    : "text-lg font-black uppercase tracking-tight text-main-300 transition hover:text-primary lg:text-xl"
                }
              >
                {b.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
