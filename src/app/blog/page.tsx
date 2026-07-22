import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";
import { Placeholder } from "@/components/home/placeholder";
import { blogPosts, dealer } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Powersports & Marine Blog | Supreme Dealer",
  description:
    "Explore the latest news, maintenance tips, and model updates in the world of powersports. Stay informed with expert insights from Supreme Dealer.",
};

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
const rest = blogPosts.filter((p) => p !== featured);

export default function BlogPage() {
  return (
    <main className="bg-white">
      <div className="bg-layout">
        <SiteHeader />
      </div>

      {/* Page heading */}
      <div className="bg-[#f8f8f8]">
        <div className="site-container py-8">
          <h1 className="text-4xl font-extrabold uppercase text-main">Blog</h1>
        </div>
      </div>

      {/* Featured post */}
      <section className="site-container border-b py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <a href={`/blog/${featured.slug}`} className="lg:flex-1">
            <Placeholder
              label={featured.title}
              className="aspect-[1000/563] w-full rounded-lg"
            />
          </a>
          <div className="flex flex-1 flex-col gap-4">
            <a
              href={`/blog/${featured.slug}`}
              className="text-4xl font-bold text-main hover:text-primary"
            >
              {featured.title}
            </a>
            <div className="text-xs text-main-300">{featured.date}</div>
            <p className="text-base text-main">{featured.excerpt}</p>
            <a href={`/blog/${featured.slug}`} className="btn-primary w-fit">
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="site-container py-4">
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((post) => (
            <div
              key={post.slug}
              className="flex h-full flex-col items-start gap-4 rounded border p-4 text-main"
            >
              <a href={`/blog/${post.slug}`} className="w-full">
                <Placeholder
                  label={post.title}
                  className="aspect-[1000/563] w-full rounded"
                />
              </a>
              <div className="flex w-full flex-1 flex-col gap-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="text-2xl font-bold hover:text-primary"
                >
                  {post.title}
                </a>
                <div className="text-xs text-main-300">{post.date}</div>
                <p className="hidden text-base md:block">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="btn-primary mt-auto w-full text-center">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (single page) */}
        <div className="mt-8 flex items-center justify-between gap-5 text-base font-bold text-main">
          <span className="opacity-20">Previous</span>
          <span>1 of 1</span>
          <span className="opacity-20">Next</span>
        </div>
      </section>

      {/* SEO content */}
      <section className="site-container py-4">
        <div className="max-w-4xl space-y-4 text-main">
          <p>
            Welcome to the <strong>official blog</strong> of {dealer.name}, your trusted powersports
            and marine dealership dedicated to everything from boats to snowmobiles. Whether you are
            a weekend warrior, a seasoned rider, or a curious newcomer, our blog is your go-to source
            for all things <strong>powersports</strong>.
          </p>
          <p>
            Here, you will find regular updates on the{" "}
            <a href="/new" className="text-primary underline hover:no-underline">
              newest vehicle
            </a>{" "}
            releases, essential{" "}
            <a href="/service" className="text-primary underline hover:no-underline">
              maintenance
            </a>{" "}
            advice, seasonal riding guides, and event recaps happening right in your community. Our
            team of experts brings you real-world insights to help you get the most out of your ride,
            no matter the terrain or season.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
