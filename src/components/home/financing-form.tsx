"use client";

import { useState } from "react";

// Pre-approval lead form for the Financing page — a Next.js clone of the
// powersports dealer financing request. Self-contained demo (no live endpoint):
// it validates the required fields and shows a confirmation on submit.

const inputClass =
  "peer w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm text-main outline-none transition focus:border-primary";
const labelClass = "mb-1 block text-sm font-medium text-main-300";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className={inputClass}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Legend({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="col-span-full mt-2 border-b border-black/10 pb-1 text-lg font-extrabold uppercase text-main">
      {children}
    </h2>
  );
}

const grid = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3";

export function FinancingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-black/10 bg-[#f8f8f8] p-8 text-center">
        <h2 className="text-2xl font-extrabold uppercase text-main">Request received</h2>
        <p className="mt-2 text-main-300">
          Thanks — your financing request has been submitted. Our team will reach out shortly to
          walk you through your pre-approval.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/10 p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-3xl font-extrabold uppercase text-main sm:text-4xl">
          Financing Request
        </div>
        <div className="mt-1 text-lg text-main-300">Get a pre-approval</div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <fieldset className={grid}>
          <Legend>Information</Legend>
          <Field label="First name" name="first_name" required autoComplete="given-name" />
          <Field label="Last name" name="last_name" required autoComplete="family-name" />
          <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
          <Field label="Email" name="email" type="email" required autoComplete="email" />
          <SelectField
            label="Marital status"
            name="marital_status"
            options={[
              { value: "Single", label: "Single" },
              { value: "Common law", label: "Common law" },
              { value: "Married", label: "Married" },
              { value: "Widow(er)", label: "Widow(er)" },
            ]}
          />
          <Field label="Date of birth" name="birth_date" type="date" autoComplete="bday" />
          <Field label="Social insurance number" name="social_insurance_number" />
          <Field label="Driver's licence number" name="driver_licence_number" />
          <Field
            label="Driver's licence expiration date"
            name="driver_licence_expiration_date"
            type="date"
          />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Desired vehicle</Legend>
          <Field label="Make" name="vehicle_make" />
          <Field label="Model" name="vehicle_model" />
          <Field label="Year" name="vehicle_year" type="number" />
          <Field label="Stock number" name="stock_number" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Home</Legend>
          <Field label="Address" name="address" autoComplete="street-address" />
          <Field label="City" name="city" autoComplete="address-level2" />
          <Field label="Province" name="province" autoComplete="address-level1" />
          <Field label="Postal code" name="postal_code" autoComplete="postal-code" />
          <Field label="At this address since" name="address_since" />
          <SelectField
            label="Housing status"
            name="is_owner"
            options={[
              { value: "true", label: "Owner" },
              { value: "false", label: "Renter" },
            ]}
          />
        </fieldset>

        <fieldset className={grid}>
          <Legend>If owner</Legend>
          <Field label="Monthly mortgage payment" name="mortgage_monthly_payment" />
          <Field label="Mortgage balance" name="mortgage_balance" />
          <Field label="Mortgage lender" name="mortgage_lender" />
          <Field label="Property value" name="property_value" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>If renter</Legend>
          <Field label="Monthly rent payment" name="rent_monthly_payment" />
          <Field label="Landlord name" name="landlord_name" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Previous address (if less than 2 years at your current address)</Legend>
          <Field label="Address" name="previous_address" />
          <Field label="City" name="previous_city" />
          <Field label="Province" name="previous_province" />
          <Field label="Postal code" name="previous_postal_code" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Work</Legend>
          <Field label="Employer's name" name="employer" />
          <Field label="Address" name="employer_address" />
          <Field label="City" name="employer_city" />
          <Field label="Province" name="employer_province" />
          <Field label="Postal code" name="employer_postal_code" />
          <Field label="Phone" name="employer_phone" type="tel" />
          <Field label="Job title" name="employee_position" />
          <SelectField
            label="Employment status"
            name="employee_status"
            options={[
              { value: "Full time", label: "Full time" },
              { value: "Part time", label: "Part time" },
              { value: "Seasonal", label: "Seasonal" },
              { value: "On contract", label: "On contract" },
            ]}
          />
          <Field label="At this job since" name="employee_since" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Previous employer (if less than 2 years at your current job)</Legend>
          <Field label="Previous employer name" name="previous_employer_name" />
          <Field label="Address" name="previous_employer_address" />
          <Field label="City" name="previous_employer_city" />
          <Field label="Province" name="previous_employer_province" />
          <Field label="Postal code" name="previous_employer_postal_code" />
          <Field label="Phone" name="previous_employer_phone" type="tel" />
        </fieldset>

        <fieldset className={grid}>
          <Legend>Income</Legend>
          <Field label="Annual gross salary" name="annual_gross_salary" />
          <SelectField
            label="Have you filed for bankruptcy in the last 7 years?"
            name="undischarged_bankruptcy"
            options={[
              { value: "false", label: "No" },
              { value: "true", label: "Yes" },
            ]}
          />
        </fieldset>

        <div className="text-center">
          <button type="submit" className="btn-primary w-full">
            Submit
          </button>
          <p className="mt-4 text-xs text-main-300">
            By submitting this form you consent to be contacted about your financing request.
          </p>
        </div>
      </form>
    </div>
  );
}
