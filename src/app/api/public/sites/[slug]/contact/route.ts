import { NextResponse } from "next/server";
import { fetchPublicSite } from "@/features/dealer-site/api/public-dealer-site.api";

// Single public lead-capture endpoint (guide §5). Templates' contact forms post
// here — no parallel submission paths. Stub: validates the site + payload and
// echoes success. Swap the body for the real backend call / queue later.
export async function POST(
  req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug } = await ctx.params;
  const site = fetchPublicSite(slug);
  if (!site) return NextResponse.json({ error: "Unknown site" }, { status: 404 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 422 });
  }

  // TODO: forward the lead to the backend (rate-limited 10 req/15min there).
  return NextResponse.json({ ok: true }, { status: 201 });
}
