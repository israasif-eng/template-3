import type { DealerSite } from "../types";

// Seed data standing in for the `dealer_sites` DB rows. Templates read ONLY
// from this shape (guide §2) — no template component holds editable literals.
// A dealer's SiteEditor edits produce objects of exactly this form.
export const SAMPLE_SITES: DealerSite[] = [
  {
    id: "site_1",
    slug: "supreme-dealer",
    customDomain: null,
    templateId: "template1",
    published: true,
    publishedAt: "2026-07-21T00:00:00.000Z",
    branding: {
      businessName: "Supreme Dealer",
      tagline: "Quality vehicles, honest service.",
      logoUrl: "",
      primaryColor: "#00b3b3",
      accentColor: "#0c0b0a",
    },
    contact: {
      phone: "(555) 019-4200",
      email: "hello@supremedealer.example",
      addressLine1: "1200 Market Street",
      addressLine2: "",
      city: "Springfield",
      region: "IL",
      postalCode: "62704",
      hours: "Mon–Fri 9–6 · Sat 10–4 · Sun closed",
      mapEmbedUrl: "https://www.google.com/maps",
    },
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
    landingContent: {
      heroHeadline: "Find your next ride at Supreme Dealer",
      heroSubtext: "A hand-picked inventory, transparent pricing, and a team that treats you right.",
      heroCtaLabel: "Browse inventory",
      aboutTitle: "About Supreme Dealer",
      aboutBody:
        "We've been serving Springfield for over 20 years. Every vehicle on our lot is inspected end-to-end, priced fairly, and backed by a service team that stands behind the sale.",
      inventoryTitle: "Featured inventory",
      inventorySubtitle: "A few of the vehicles ready to drive home today.",
      contactTitle: "Come see us",
      featuredVehicles: [
        {
          id: "v_1",
          make: "2023 Toyota",
          title: "RAV4 XLE AWD",
          stockNumber: "T23-0912",
          year: 2023,
          mileage: 18450,
          listPrice: 33990,
          price: 31490,
          photoCount: 24,
          photos: [{ url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1000&q=80" }],
        },
        {
          id: "v_2",
          make: "2022 Ford",
          title: "F-150 XLT SuperCrew",
          stockNumber: "F22-4471",
          year: 2022,
          mileage: 27300,
          price: 42995,
          photoCount: 18,
          photos: [{ url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000&q=80" }],
        },
        {
          id: "v_3",
          make: "2024 Honda",
          title: "Civic Sport Hatchback",
          stockNumber: "H24-1180",
          year: 2024,
          mileage: 6200,
          listPrice: 29500,
          price: 28250,
          photoCount: 31,
          photos: [{ url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1000&q=80" }],
        },
      ],
    },
    visibility: {
      home: { hero: true, about: true, inventory: true, contact: true },
    },
  },
];
