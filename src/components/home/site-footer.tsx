import { dealer, modelCredits, nav } from "./data";
import { Facebook, Instagram, Phone, Pin, TikTok, YouTube } from "./icons";

const newVehicles = nav.find((n) => n.label === "New Vehicles")?.children ?? [];
const usedVehicles = nav.find((n) => n.label === "Used Vehicles")?.children ?? [];
const useful = [
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Our Team", href: "/team" },
  { label: "Financing", href: "/financing" },
  { label: "Promotions", href: "/promotions" },
  { label: "Service & Parts", href: "/service" },
  { label: "Parts & Accessories", href: "/parts" },
];

function Column({ title, href, links }: { title: string; href: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex-1">
      <h2 className="mb-4 text-base font-extrabold uppercase">
        <a href={href}>{title}</a>
      </h2>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-primary">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-b from-layout-950 to-layout text-xs text-white">
      <div className="site-container flex flex-col gap-8 py-16 md:flex-row">
        {/* contact + hours */}
        <div className="flex flex-1 flex-col border-b border-primary pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-6">
          <div className="mb-9 flex flex-col gap-8 sm:flex-row">
            <div className="flex-1">
              <div className="mb-4 uppercase">
                <h2 className="mb-4 text-base font-extrabold">Contact us</h2>
                <div>{dealer.address}</div>
                <div>{dealer.city}, {dealer.region}</div>
                <div>{dealer.postal}</div>
              </div>
              <a href="#" className="btn-primary-sm mb-4">
                <Pin className="size-4" /> Directions
              </a>
              <div>
                <a
                  href={dealer.phoneHref}
                  className="inline-flex items-center gap-2 text-base font-extrabold uppercase hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {dealer.phoneLabel}
                </a>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-base font-extrabold uppercase">Business hours</h2>
              <div className="space-y-2">
                {dealer.hours.map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span>{h.day} :</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Stay connected</span>
            {[Facebook, Instagram, YouTube, TikTok].map((Icon, i) => (
              <a key={i} href="#" aria-label="social">
                <Icon className="size-6 fill-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* menus */}
        <div className="flex flex-1 flex-col justify-between gap-8 xl:flex-[2]">
          <nav className="hidden gap-10 md:flex">
            <Column title="New Vehicles" href="/new" links={newVehicles} />
            <Column title="Used Vehicles" href="/used" links={usedVehicles} />
            <Column title="Useful Links" href="/contact" links={useful} />
          </nav>

          <div className="space-y-4">
            <p className="opacity-80">
              Prices are for informational purposes only and should not be considered
              contractual. Please contact us for full details.
            </p>
            <p className="opacity-80">
              © {new Date().getFullYear()} {dealer.name}. All rights reserved.{" "}
              <a href="/privacy" className="underline hover:no-underline">Privacy policy</a> ·{" "}
              <a href="/terms" className="underline hover:no-underline">Terms of use</a>.
            </p>
            <p className="opacity-70">
              3D models:{" "}
              {modelCredits.map((c, i) => (
                <span key={c.title}>
                  {i > 0 && " · "}
                  <a
                    href={c.modelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {c.title}
                  </a>{" "}
                  by{" "}
                  <a
                    href={c.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {c.author}
                  </a>{" "}
                  (
                  <a
                    href={c.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {c.license}
                  </a>
                  )
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
