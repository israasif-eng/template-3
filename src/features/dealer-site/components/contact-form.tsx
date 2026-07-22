"use client";

import { useState } from "react";

// Reusable lead-capture form (guide §5). Posts to the single public endpoint
// /api/public/sites/:slug/contact — templates reuse THIS, never a parallel path.
export function ContactForm({ slug }: { slug: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch(`/api/public/sites/${slug}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-black/10 bg-neutral-50 p-6 text-neutral-800">
        Thanks — we&apos;ll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input name="name" required placeholder="Full name" className="rounded-md border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" />
      <input name="email" type="email" required placeholder="Email" className="rounded-md border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" />
      <input name="phone" placeholder="Phone" className="rounded-md border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" />
      <textarea name="message" rows={4} placeholder="How can we help?" className="rounded-md border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-neutral-500" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
