// The single data contract every template consumes.
//
// Per the conversion guide (§0, §2): the builder does NOT render arbitrary
// HTML/CSS. It renders React template components fed by this structured shape.
// Every piece of text/color/image/link a template shows MUST trace back to a
// field here — nothing hardcoded in a template component.

export interface Branding {
  businessName: string;
  tagline: string;
  logoUrl: string;
  primaryColor: string; // sanitized via sanitize-color before use
  accentColor: string; // sanitized via sanitize-color before use
}

export interface Contact {
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  region: string;
  postalCode: string;
  hours: string;
  mapEmbedUrl: string; // sanitized via sanitize-url before use
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  x?: string;
  youtube?: string;
  tiktok?: string;
}

export interface Vehicle {
  id: string;
  title: string;
  price: number;
  mileage: number;
  year: number;
  photos: { url: string }[];
  // Optional dealer-inventory fields used by richer templates.
  make?: string;
  stockNumber?: string;
  listPrice?: number; // pre-discount price; savings = listPrice - price
  photoCount?: number; // total gallery count when photos[] holds only the cover
}

// Free-form-ish marketing copy that dealers edit in the SiteEditor. New
// template copy needs should extend THIS shape (guide §6/§7), not be hardcoded
// into a template component.
export interface LandingContent {
  heroHeadline: string;
  heroSubtext: string;
  heroCtaLabel: string;
  aboutTitle: string;
  aboutBody: string;
  inventoryTitle: string;
  inventorySubtitle: string;
  contactTitle: string;
  featuredVehicles: Vehicle[];
}

// Page -> Section -> shown/hidden. Drives PagesPanel / SectionsPanel and what a
// template actually renders. Keys must match section ids in the manifest.
export type Visibility = Record<string, Record<string, boolean>>;

export interface DealerSite {
  id: string;
  slug: string;
  customDomain: string | null;
  templateId: string; // -> lib/templates.ts registry
  published: boolean;
  publishedAt: string | null;

  branding: Branding;
  contact: Contact;
  socialLinks: SocialLinks;
  landingContent: LandingContent;
  visibility: Visibility;
}

// Props every template root component receives. Templates are pure functions of
// the site data — they never fetch, never hold editable literals.
export interface TemplateProps {
  site: DealerSite;
}
