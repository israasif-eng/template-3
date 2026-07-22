import type { TemplateProps } from "@/features/dealer-site/types";
import { sanitizeColor } from "@/features/dealer-site/lib/sanitize-color";
import { sanitizeUrl } from "@/features/dealer-site/lib/sanitize-url";
import { ContactForm } from "@/features/dealer-site/components/contact-form";

export function ContactSection({ site }: TemplateProps) {
  const primary = sanitizeColor(site.branding.primaryColor);
  const { contact, landingContent } = site;
  const mapUrl = sanitizeUrl(contact.mapEmbedUrl);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950">{landingContent.contactTitle}</h2>
      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-neutral-700">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Address</div>
            <p className="mt-1">
              {contact.addressLine1}
              <br />
              {contact.city}, {contact.region} {contact.postalCode}
            </p>
            {mapUrl && (
              <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-medium" style={{ color: primary }}>
                Get directions →
              </a>
            )}
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Phone</div>
            <a href={`tel:${contact.phone}`} className="mt-1 block hover:underline">{contact.phone}</a>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Email</div>
            <a href={`mailto:${contact.email}`} className="mt-1 block hover:underline">{contact.email}</a>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Hours</div>
            <p className="mt-1">{contact.hours}</p>
          </div>
        </div>
        <ContactForm slug={site.slug} />
      </div>
    </section>
  );
}
