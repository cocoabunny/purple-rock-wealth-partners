
"use client";

import {
  useRef,
  useState,
  type FormEvent,
} from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { services } from "@/content/services";

/* ============================================================
   PURPLE ROCK WEALTH PARTNERS
   Contact Form — Static Hosting Compatible
   ============================================================ */

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() ?? "";

const FORM_ENDPOINT = FORM_ID
  ? `https://formspree.io/f/${FORM_ID}`
  : "";

const inputClassName = [
  "mt-3 w-full min-h-12",
  "border border-[#211D25]/20",
  "bg-white px-4 py-3",
  "text-base text-[#211D25]",
  "placeholder:text-[#211D25]/40",
  "outline-none transition-colors",
  "focus:border-[#80549A]",
  "focus:ring-2 focus:ring-[#80549A]/20",
  "disabled:cursor-not-allowed",
  "disabled:opacity-60",
].join(" ");

const labelClassName =
  "block text-sm font-semibold text-[#211D25]";

export default function ContactForm() {
  const searchParams = useSearchParams();

  const formRef = useRef<HTMLFormElement>(null);

  const requestedService =
    searchParams.get("service") ?? "";

  const validRequestedService = services.some(
    (service) => service.slug === requestedService
  )
    ? requestedService
    : "";

  const [selectedService, setSelectedService] = useState(
    validRequestedService
  );

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const [privacyAcknowledged, setPrivacyAcknowledged] =
    useState(false);

  const configured = /^[a-zA-Z0-9]+$/.test(FORM_ID);

  const isSubmitting = status === "submitting";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isSubmitting) return;

    if (!configured) {
      setErrorMessage(
        "The enquiry form is not currently available."
      );
      setStatus("error");
      return;
    }

    if (!privacyAcknowledged) {
      setErrorMessage(
        "Please acknowledge the Privacy Policy before submitting."
      );
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Basic spam honeypot.
    // Automated submissions may fill this hidden field.
    if (formData.get("_gotcha")) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Submission failed with status ${response.status}`
        );
      }

      formRef.current?.reset();

      setSelectedService("");
      setPrivacyAcknowledged(false);
      setStatus("success");
    } catch {
      setErrorMessage(
        "We couldn't send your enquiry. Please check your connection and try again."
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-t-4 border-[#80549A] bg-[#FAF8F5] p-8 md:p-12"
      >
        <span className="mb-6 inline-flex size-12 items-center justify-center rounded-full bg-[#39264B] text-2xl text-white">
          ✓
        </span>

        <h3 className="text-3xl font-semibold tracking-tight text-[#39264B]">
          Thank you for getting in touch.
        </h3>

        <p className="mt-6 max-w-lg leading-8 text-[#68636c]">
          Your enquiry has been submitted successfully.
          Purple Rock Wealth Partners will review your
          message.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
          className="mt-10 inline-flex min-h-12 items-center bg-[#39264B] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A]"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-label="Purple Rock Wealth Partners enquiry form"
    >
      {/* NAME */}
      <div>
        <label
          htmlFor="contact-name"
          className={labelClassName}
        >
          Full Name <span aria-hidden="true">*</span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="Your full name"
        />
      </div>

      {/* EMAIL AND TELEPHONE */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="contact-email"
            className={labelClassName}
          >
            Email Address <span aria-hidden="true">*</span>
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={isSubmitting}
            className={inputClassName}
            placeholder="you@company.com.au"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className={labelClassName}
          >
            Telephone
            <span className="ml-2 font-normal text-[#68636c]">
              (Optional)
            </span>
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            disabled={isSubmitting}
            className={inputClassName}
            placeholder="Your contact number"
          />
        </div>
      </div>

      {/* COMPANY */}
      <div>
        <label
          htmlFor="contact-company"
          className={labelClassName}
        >
          Company or Practice Name
          <span aria-hidden="true"> *</span>
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          maxLength={160}
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="Your business name"
        />
      </div>

      {/* SERVICE SELECTION */}
      <div>
        <label
          htmlFor="contact-service"
          className={labelClassName}
        >
          Service of Interest
        </label>

        <select
          id="contact-service"
          name="service"
          value={selectedService}
          onChange={(event) =>
            setSelectedService(event.target.value)
          }
          disabled={isSubmitting}
          className={inputClassName}
        >
          <option value="">
            General Business Enquiry
          </option>

          {services.map((service) => (
            <option
              key={service.slug}
              value={service.slug}
            >
              {service.title}
            </option>
          ))}
        </select>

        <p className="mt-3 text-xs leading-6 text-[#68636c]">
          Select the area most relevant to your enquiry.
          You can also leave this as a general enquiry.
        </p>
      </div>

      {/* ENQUIRY MESSAGE */}
      <div>
        <label
          htmlFor="contact-message"
          className={labelClassName}
        >
          Tell Us About Your Enquiry
          <span aria-hidden="true"> *</span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={7}
          required
          minLength={10}
          maxLength={5000}
          disabled={isSubmitting}
          className={inputClassName}
          placeholder="Tell us about your business, your objectives and what you would like to discuss."
        />

        <p className="mt-3 text-xs leading-6 text-[#68636c]">
          Please do not include account passwords,
          financial account numbers or other sensitive
          personal information.
        </p>
      </div>

      {/* FORM SUBJECT */}
      <input
        type="hidden"
        name="_subject"
        value="Purple Rock Wealth Partners — Website Enquiry"
      />

      {/* SPAM HONEYPOT */}
      <div
        className="absolute -left-[10000px] top-auto size-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">
          Leave this field empty
        </label>

        <input
          id="contact-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* PRIVACY ACKNOWLEDGEMENT */}
      <div className="border-t border-[#211D25]/15 pt-7">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            name="privacy_acknowledged"
            value="yes"
            checked={privacyAcknowledged}
            onChange={(event) =>
              setPrivacyAcknowledged(
                event.target.checked
              )
            }
            required
            disabled={isSubmitting}
            className="mt-1 size-5 shrink-0 accent-[#80549A]"
          />

          <span className="text-sm leading-7 text-[#68636c]">
            I acknowledge that the information provided
            will be used to respond to my enquiry in
            accordance with the{" "}
            <Link
              href="/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#80549A] underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            . <span aria-hidden="true">*</span>
          </span>
        </label>
      </div>

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div
          role="alert"
          className="border-l-4 border-red-700 bg-red-50 p-5 text-sm leading-7 text-red-800"
        >
          {errorMessage}
        </div>
      )}

      {/* CONFIGURATION NOTICE */}
      {!configured && (
        <div
          role="status"
          className="border-l-4 border-amber-600 bg-amber-50 p-5 text-sm leading-7 text-amber-900"
        >
          The enquiry form is awaiting configuration.
          Online submissions are not yet available.
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isSubmitting || !configured}
        className="inline-flex min-h-14 w-full items-center justify-center gap-5 bg-[#39264B] px-9 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting
          ? "Submitting Enquiry..."
          : "Submit Enquiry"}

        {!isSubmitting && (
          <span aria-hidden="true">↗</span>
        )}
      </button>

      <p className="text-xs leading-6 text-[#68636c]">
        Fields marked * are required.
      </p>
    </form>
  );
}
