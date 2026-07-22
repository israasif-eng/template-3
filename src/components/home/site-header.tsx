"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { dealer, nav, type NavItem } from "./data";
import {
  Bars,
  ChevronRight,
  Facebook,
  Globe,
  Instagram,
  Phone,
  Pin,
  Search,
  TikTok,
  XMark,
  YouTube,
} from "./icons";

const socials = [
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: YouTube },
  { label: "TikTok", Icon: TikTok },
];

function SearchBar() {
  return (
    <form className="relative w-full text-sm text-white" role="search">
      <Search className="pointer-events-none absolute inset-y-0 left-2 my-auto size-4 opacity-70" />
      <input
        type="text"
        placeholder="Search our inventory"
        aria-label="Search our inventory"
        className="w-full rounded border border-white/25 bg-transparent py-2.5 pl-8 pr-3 placeholder:text-white/60 focus:border-primary focus:outline-none"
      />
    </form>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="relative z-50">
      {/* Desktop */}
      <div className="hidden bg-transparent py-4 lg:block">
        <div className="site-container flex items-center justify-between gap-6">
          <a href="/" aria-label={dealer.name}>
            <Logo />
          </a>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-6 text-sm">
              <div className="text-right text-white">
                <a
                  href="#"
                  className="block uppercase leading-tight hover:text-primary"
                >
                  {dealer.address}
                  <br />
                  {dealer.city} ({dealer.region}) {dealer.postal}
                </a>
                <a
                  href={dealer.phoneHref}
                  className="mt-1 inline-flex items-center gap-2 text-2xl font-bold uppercase hover:text-primary"
                >
                  <Phone className="size-5 text-primary" />
                  {dealer.phoneLabel}
                </a>
              </div>

              <div className="w-72 space-y-2">
                <SearchBar />
                <div className="flex items-center gap-2 text-white">
                  <span>Stay connected</span>
                  {socials.map(({ label, Icon }) => (
                    <a key={label} href="#" aria-label={label}>
                      <Icon className="size-6 fill-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a href="/privilege-program" className="btn-primary-sm">
                Supreme Privilege Program
              </a>
              <a href="#" className="btn-primary-sm">
                <Globe className="size-4" /> français
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="site-container mt-2">
          <ul className="flex items-stretch justify-between gap-2 px-8 text-base text-white">
            {nav.map((item) => (
              <li key={item.label} className="group relative py-2">
                <a
                  href={item.href}
                  className="font-bold uppercase transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ol className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 -translate-y-2 divide-y divide-neutral-200 rounded-lg border bg-white px-4 py-2 text-left text-main-300 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} className="block py-2 hover:text-primary">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between px-4 py-4 lg:hidden">
        <a href="/" aria-label={dealer.name}>
          <Logo />
        </a>
        <div className="flex items-center gap-4 text-primary">
          <a href={dealer.phoneHref} aria-label="Call us">
            <Phone className="size-6" />
          </a>
          <a href="#" aria-label="Directions">
            <Pin className="size-6" />
          </a>
          <button aria-label="Menu" onClick={() => setMenuOpen(true)}>
            <Bars className="size-7" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-gradient-to-b from-layout to-layout-950 px-6 py-4 text-white transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <Logo />
          <button aria-label="Close" onClick={() => setMenuOpen(false)} className="text-primary">
            <XMark className="size-7" />
          </button>
        </div>

        <div className="mt-3 mb-4">
          <SearchBar />
        </div>

        <ol className="flex-1 overflow-y-auto">
          <li className="border-b border-white/15 py-3">
            <a href="/" className="w-full">Home</a>
          </li>
          {nav.map((item) => (
            <li key={item.label} className="border-b border-white/15 py-3">
              {item.children ? (
                <>
                  <button
                    className="flex w-full items-center justify-between"
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronRight
                      className={`size-4 text-primary transition-transform ${
                        openSub === item.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openSub === item.label && (
                    <ul className="mt-2 space-y-1 pl-3 text-sm text-white/80">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href} className="block py-1.5 hover:text-primary">
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.href} className="w-full">{item.label}</a>
              )}
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-center gap-2 py-4">
          {socials.map(({ label, Icon }) => (
            <a key={label} href="#" aria-label={label}>
              <Icon className="size-7 fill-primary" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export type { NavItem };
