"use client";

import { useMemo, useState } from "react";
import { inventory, usedInventory, type InventoryItem } from "./data";
import { Placeholder } from "./placeholder";
import { Camera, ChevronDown, Gauge, Hashtag, Search } from "./icons";

type Sort = "year_desc" | "year_asc" | "price_asc" | "price_desc";

function facet(items: InventoryItem[], key: "type" | "make" | "year") {
  const counts = new Map<string, number>();
  for (const it of items) {
    const k = String(it[key]);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function money(n: number) {
  return n.toLocaleString("en-CA");
}

export function InventoryListing({ condition = "new" }: { condition?: "new" | "used" }) {
  const base = condition === "used" ? usedInventory : inventory;

  const [types, setTypes] = useState<string[]>([]);
  const [makes, setMakes] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("year_desc");

  const typeFacets = useMemo(() => facet(base, "type"), [base]);
  const makeFacets = useMemo(() => facet(base, "make"), [base]);

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const results = useMemo(() => {
    let out = base.filter(
      (it) =>
        (types.length === 0 || types.includes(it.type)) &&
        (makes.length === 0 || makes.includes(it.make)) &&
        (query.trim() === "" ||
          `${it.year} ${it.make} ${it.title} ${it.stock}`
            .toLowerCase()
            .includes(query.toLowerCase())),
    );
    out = [...out].sort((a, b) => {
      switch (sort) {
        case "price_asc":
          return a.salePrice - b.salePrice;
        case "price_desc":
          return b.salePrice - a.salePrice;
        case "year_asc":
          return a.year - b.year;
        default:
          return b.year - a.year;
      }
    });
    return out;
  }, [base, types, makes, query, sort]);

  const label = condition === "used" ? "Used" : "New";

  return (
    <div className="flex gap-6 py-4">
      {/* Filters */}
      <aside className="hidden w-64 shrink-0 xl:block">
        <div className="space-y-6">
          <fieldset>
            <legend className="mb-1 text-xl font-extrabold uppercase text-black">Inventory</legend>
            <label className="flex items-center gap-2 text-base text-main">
              <input type="checkbox" checked readOnly className="size-4 accent-primary" />
              {label} ({base.length})
            </label>
          </fieldset>

          <fieldset>
            <legend className="mb-1 text-xl font-extrabold uppercase text-black">Type</legend>
            <div className="space-y-1">
              {typeFacets.map(([label, count]) => (
                <label key={label} className="flex items-center gap-2 text-base text-main">
                  <input
                    type="checkbox"
                    className="size-4 accent-primary"
                    checked={types.includes(label)}
                    onChange={() => toggle(types, setTypes, label)}
                  />
                  {label} ({count})
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-1 text-xl font-extrabold uppercase text-black">Make</legend>
            <div className="space-y-1">
              {makeFacets.map(([label, count]) => (
                <label key={label} className="flex items-center gap-2 text-base text-main">
                  <input
                    type="checkbox"
                    className="size-4 accent-primary"
                    checked={makes.includes(label)}
                    onChange={() => toggle(makes, setMakes, label)}
                  />
                  {label} ({count})
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <div className="mb-2 text-xl font-extrabold uppercase text-black">Search</div>
            <div className="relative">
              <Search className="pointer-events-none absolute inset-y-0 left-2 my-auto size-4 text-main-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-full rounded-lg border border-neutral-300 py-2 pl-8 pr-3 text-main focus:border-primary focus:outline-none"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="hidden text-base text-main-300 md:block">
            <span className="font-extrabold text-primary">{results.length}</span> units found
          </div>
          <div className="relative max-md:w-full">
            <select
              aria-label="Sort by"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="w-full appearance-none rounded-lg border border-neutral-300 py-2 pl-4 pr-9 text-center text-base text-main focus:border-primary focus:outline-none"
            >
              <option value="year_desc">Newest Year</option>
              <option value="year_asc">Oldest Year</option>
              <option value="price_asc">Lowest Price</option>
              <option value="price_desc">Highest Price</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-main-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((it) => (
            <div key={it.id} className="flex h-full flex-col overflow-hidden rounded-b-2xl border">
              <a href="/inventory" className="relative block">
                <Placeholder label={`${it.year} ${it.make}`} className="aspect-[4/3] w-full" />
                <span className="absolute right-0 top-2 flex items-center gap-2 rounded-l bg-black/60 p-2 text-white">
                  <Camera className="size-5" />
                  <span className="text-base font-extrabold">{it.photos}</span>
                </span>
              </a>
              <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                <div>
                  <div className="text-sm font-bold uppercase text-main-300">
                    {it.year} {it.make}
                  </div>
                  <a
                    href="/inventory"
                    className="line-clamp-3 text-2xl font-extrabold uppercase leading-7 text-black hover:text-primary"
                  >
                    {it.title}
                  </a>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                    {it.usage && (
                      <div className="inline-flex items-center gap-1">
                        <Gauge className="size-4 text-black" />
                        <span className="text-sm font-bold text-black">{it.usage}</span>
                      </div>
                    )}
                    <div className="inline-flex items-center gap-1">
                      <Hashtag className="size-4 text-black" />
                      <span className="text-sm font-bold text-black">{it.stock}</span>
                    </div>
                  </div>
                </div>
                <div className="text-main">
                  {it.listPrice && (
                    <div className="text-sm font-bold">
                      <span className="ml-1 line-through">$&nbsp;{money(it.listPrice)}</span>
                      <span className="ml-2 inline-block border-2 border-primary p-1 text-primary">
                        Save ${money(it.listPrice - it.salePrice)}
                      </span>
                    </div>
                  )}
                  <div className="text-4xl font-extrabold leading-9">$&nbsp;{money(it.salePrice)}</div>
                  <a href="/inventory" className="btn-primary mt-3 w-full">
                    View full details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <p className="py-16 text-center text-lg text-main-300">No results found.</p>
        )}
      </section>
    </div>
  );
}
