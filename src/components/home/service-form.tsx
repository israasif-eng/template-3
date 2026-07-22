"use client";

import { useState } from "react";

// Service appointment lead form for the Maintenance & Repairs page — a Next.js
// clone of the powersports dealer service request. Self-contained demo (no live
// endpoint): it validates the required fields and shows a confirmation on submit.

const inputClass =
  "w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm text-main outline-none transition focus:border-primary";
const labelClass = "mb-1 block text-sm font-medium text-main-300";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  );
}

export function ServiceForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-black/10 bg-[#f8f8f8] p-8 text-center">
        <h2 className="text-2xl font-extrabold uppercase text-main">Request received</h2>
        <p className="mt-2 text-main-300">
          Thanks — your service request has been submitted. Our team will reach out shortly to
          confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/10 p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-3xl font-extrabold uppercase text-main sm:text-4xl">
          Service appointment
        </div>
        <div className="mt-1 text-lg text-main-300">Contact us to get your next service.</div>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4">
        <Field label="Full name" name="full_name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Vehicle concerned by the service" name="vehicle" />
        <Field label="Desired date (e.g., Tuesdays and Thursdays)" name="desired_appointment_date" />
        <Field label="Desired time (e.g., in the morning)" name="desired_appointment_time" />
        <div>
          <label htmlFor="message" className={labelClass}>
            Desired service (e.g., Oil change)
          </label>
          <textarea id="message" name="message" rows={4} className={inputClass} />
        </div>

        <div className="text-center">
          <button type="submit" className="btn-primary w-full">
            Submit
          </button>
          <p className="mt-4 text-xs text-main-300">
            By submitting this form you consent to be contacted about your service request.
          </p>
        </div>
      </form>
    </div>
  );
}
