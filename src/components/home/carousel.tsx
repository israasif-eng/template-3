"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

// Lightweight scroll-snap carousel: robust across breakpoints without measuring
// widths. Arrows scroll by ~90% of the viewport; items use scroll-snap so they
// settle cleanly. `itemClass` controls per-view sizing (basis widths).
export function Carousel({
  children,
  itemClass = "basis-full sm:basis-1/2 xl:basis-1/3",
  arrowsClassName = "",
}: {
  children: ReactNode[];
  itemClass?: string;
  arrowsClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {children.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClass}`}>
            {child}
          </div>
        ))}
      </div>

      <div className={`mt-4 flex justify-between ${arrowsClassName}`}>
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scroll(-1)}
          className="grid size-10 place-items-center text-2xl text-primary transition hover:opacity-70"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scroll(1)}
          className="grid size-10 place-items-center text-2xl text-primary transition hover:opacity-70"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
