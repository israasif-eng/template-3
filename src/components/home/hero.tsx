"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { HeroModels } from "./hero-models";
import { typeTabs } from "./data";
import { Placeholder } from "./placeholder";
import { ChevronDown, ChevronRight } from "./icons";

export function Hero() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <>
      <section className="relative flex min-h-[560px] flex-col justify-between overflow-hidden bg-layout">
        {/* background */}
        <div className="absolute inset-0">
          <div className="size-full bg-gradient-to-br from-layout-950 via-layout to-layout-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-layout via-layout/60 to-layout/30" />
        </div>

        {/* hero brand + reserved 3D animation space */}
        <div className="relative z-10 flex flex-1 items-center py-14">
          <div className="site-container flex w-full items-center gap-6">
            {/* Brand wordmark — anchored to the far left */}
            <div className="flex w-full items-center md:w-1/2">
              <Logo className="origin-left scale-[1.75] md:scale-[2.5]" />
            </div>

            {/* 3D model showcase — cycles the three models, each spinning */}
            <div
              className="relative hidden min-h-[360px] w-1/2 md:block"
              data-slot="hero-3d-animation"
            >
              <HeroModels />
            </div>
          </div>
        </div>

        {/* type selector header */}
        <div className="relative z-10 site-container pt-4">
          <h2 className="pb-4 text-center text-2xl font-bold uppercase text-white md:text-3xl lg:text-4xl">
            Choose your type of adventure
          </h2>

          {/* desktop tabs */}
          <div className="hidden w-full justify-center gap-1 px-4 md:flex xl:gap-3">
            {typeTabs.map((tab, i) => (
              <button
                key={tab.title}
                onClick={() => setActive(i)}
                className={`flex-1 rounded-t-2xl p-3 text-center uppercase transition 2xl:p-4 ${
                  active === i ? "bg-white" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <span
                  className={`text-base font-bold lg:text-2xl 2xl:text-3xl ${
                    active === i ? "text-primary" : ""
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* desktop model row */}
      <section className="relative z-20 hidden bg-white md:block">
        <div className="site-container p-8">
          <div className="mb-4 flex justify-end">
            <a href="/new" className="btn-hollow-primary">
              {typeTabs[active].seeAll}
              <ChevronRight className="size-4" />
            </a>
          </div>
          <div className="flex w-full justify-center gap-3">
            {typeTabs[active].models.map((m) => (
              <a key={m.label} href="/new" className="group flex flex-1 flex-col items-center gap-3">
                <Placeholder label={m.label} className="aspect-[3/2] w-full rounded" />
                <span className="btn-hollow-primary h-full w-full group-hover:bg-primary group-hover:text-white">
                  {m.label}
                  <ChevronRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* mobile accordion selector */}
      <section className="relative z-20 md:hidden">
        {typeTabs.map((tab, i) => (
          <div key={tab.title}>
            <button
              onClick={() => setOpenMobile(openMobile === i ? null : i)}
              className="flex w-full items-center justify-between bg-primary px-5 py-4 text-white"
            >
              <span className="text-2xl font-extrabold uppercase">{tab.title}</span>
              <ChevronDown
                className={`size-6 transition-transform ${openMobile === i ? "rotate-180" : ""}`}
              />
            </button>
            {openMobile === i && (
              <div className="divide-y divide-black/10 bg-white">
                {tab.models.map((m) => (
                  <a key={m.label} href="/new" className="flex items-center gap-4 p-3 text-main">
                    <Placeholder className="h-16 w-28 shrink-0 rounded" />
                    <span className="font-extrabold uppercase">{m.label}</span>
                  </a>
                ))}
                <div className="p-4 text-center">
                  <a href="/new" className="btn-primary w-full">
                    {tab.seeAll}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
