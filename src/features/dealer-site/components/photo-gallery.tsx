import type { Vehicle } from "../types";

// Reused image-rendering path (guide §4): photos come from
// vehicle.photos.map(p => p.url), rendered via a plain <img>. Any template with
// a gallery reuses THIS rather than building a new image path.
export function PhotoGallery({ vehicle }: { vehicle: Vehicle }) {
  const cover = vehicle.photos[0]?.url;
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt={vehicle.title} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-full items-center justify-center text-sm text-neutral-400">No photo</div>
      )}
    </div>
  );
}
