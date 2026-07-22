"use client";

import { useMemo, useState } from "react";
import { promotions, type Promotion } from "./data";
import { Placeholder } from "./placeholder";
import { ChevronDown } from "./icons";

type Sort = "date_asc" | "date_desc";

function facet(items: Promotion[], key: "make" | "type" | "department") {
  const counts = new Map<string, number>();
  for (const it of items) {
    const k = String(it[key]);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function FilterGroup({
  legend,
  facets,
  list,
  onToggle,
}: {
  legend: string;
  facets: [string, number][];
  list: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-1 text-xl font-extrabold uppercase text-black">{legend}</legend>
      <div className="space-y-1">
        {facets.map(([label, count]) => (
          <label key={label} className="flex items-center gap-2 text-base text-main">
            <input
              type="checkbox"
              className="size-4 accent-primary"
              checked={list.includes(label)}
              onChange={() => onToggle(label)}
            />
            {label} ({count})
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function PromotionsListing() {
  const [makes, setMakes] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [departments, setDepartments] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("date_asc");

  const makeFacets = useMemo(() => facet(promotions, "make"), []);
  const typeFacets = useMemo(() => facet(promotions, "type"), []);
  const departmentFacets = useMemo(() => facet(promotions, "department"), []);

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const results = useMemo(() => {
    const out = promotions.filter(
      (p) =>
        (makes.length === 0 || makes.includes(p.make)) &&
        (types.length === 0 || types.includes(p.type)) &&
        (departments.length === 0 || departments.includes(p.department)),
    );
    // Static demo data shares one date window; sort keeps titles stable order.
    return sort === "date_desc" ? [...out].reverse() : out;
  }, [makes, types, departments, sort]);

  return (
    <div className="flex gap-6 py-4">
      {/* Filters */}
      <aside className="hidden w-64 shrink-0 xl:block">
        <div className="space-y-6">
          <FilterGroup
            legend="Make"
            facets={makeFacets}
            list={makes}
            onToggle={(v) => toggle(makes, setMakes, v)}
          />
          <FilterGroup
            legend="Type"
            facets={typeFacets}
            list={types}
            onToggle={(v) => toggle(types, setTypes, v)}
          />
          <FilterGroup
            legend="Department"
            facets={departmentFacets}
            list={departments}
            onToggle={(v) => toggle(departments, setDepartments, v)}
          />
        </div>
      </aside>

      {/* Content */}
      <section className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="hidden text-base text-main-300 md:block">
            <span className="font-extrabold text-primary">{results.length}</span> promotions
          </div>
          <div className="relative max-md:w-full">
            <select
              aria-label="Sort by"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="w-full appearance-none rounded-lg border border-neutral-300 py-2 pl-4 pr-9 text-center text-base text-main focus:border-primary focus:outline-none"
            >
              <option value="date_asc">Expiration date</option>
              <option value="date_desc">Expiration date (desc)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-main-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((p) => (
            <div key={p.id} className="flex flex-col gap-4 border p-4 text-black">
              <a href="/promotions" className="block">
                <Placeholder label={p.make} className="aspect-[700/400] w-full" />
              </a>
              <div className="flex h-full flex-col justify-between gap-4">
                <a href="/promotions" className="text-base font-bold hover:text-primary">
                  {p.title}
                </a>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2 text-xs text-main-300">
                    <span className="flex-1">Offer valid from {p.dateRange}.</span>
                    <span
                      title={p.disclaimer}
                      className="flex size-5 shrink-0 cursor-help items-center justify-center rounded-full border border-current text-[10px] font-bold"
                    >
                      i
                    </span>
                  </div>
                  <a href="/promotions" className="btn-primary w-full">
                    View promotion
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <p className="py-16 text-center text-lg text-main-300">No promotions found.</p>
        )}
      </section>
    </div>
  );
}
