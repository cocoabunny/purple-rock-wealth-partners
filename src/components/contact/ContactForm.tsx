
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { services } from "@/content/services";

type Status = "idle" | "sending" | "success" | "error";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const configured = /^[a-zA-Z0-9]+$/.test(formId);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!configured) {
      setStatus("error");
      setErrorMessage("The enquiry form is not yet configured.");
      return;
    }

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please confirm the privacy acknowledgement.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: ignore submissions from basic automated bots.
    if (data.get("_gotcha")) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formspree.io/f/${formId}`,
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to submit the enquiry.");
      }

      setStatus("success");
      form.reset();
      setConsent(false);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Your enquiry could not be sent. Please try again later."
      );
    }
  }

  const inputClass =
    "mt-3 w-full rounded-none border border-[#211D25]/20 bg-white px-4 py-4 text-[#211D25] outline-none transition focus:border-[#80549A] focus:ring-2 focus:ring-[#80549A]/25";

  const labelClass = "block text-sm font-semibold";

  if (status === "success") {
    return (
      <div role="status" className="bg-white p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-[#39264B]">
          Thank you for your enquiry.
        </h2>

        <p className="mt-5 leading-8 text-[#211D25]/70">
          Your message has been submitted. Purple Rock Wealth
          Partners will review your enquiry.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 min-h-12 bg-[#39264B] px-7 py-3 font-semibold text-white"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full Name *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          className={inputClass}
        />
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Telephone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Company or Practice *
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          required
          maxLength={160}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-service" className={labelClass}>
          Service of Interest
        </label>
        <select
          id="contact-service"
          name="service"
          defaultValue={
            services.some((s) => s.slug === selectedService)
              ? selectedService
              : ""
          }
          className={inputClass}
        >
          <option value="">General Enquiry</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          How Can We Help? *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={7}
          required
          minLength={10}
          maxLength={5000}
          className={inputClass}
          placeholder="Tell us a little about your business and what you would like to discuss."
        />
      </div>

      <div
        className="absolute -left-[10000px]"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">
          Leave this field empty
        </label>
        <input
          id="contact-website"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="flex items-start gap-3 leading-7">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
          className="mt-1.5 size-4 accent-[#80549A]"
        />
        <span className="text-sm text-[#211D25]/75">
          I acknowledge that my information will be used
          to respond to this enquiry, as described in the{" "}
          <Link
            href="/privacy-policy/"
            className="font-semibold text-[#80549A] underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      {!configured && (
        <p className="border border-amber-600/30 bg-amber-50 p-4 text-sm text-amber-900">
          The enquiry form is awaiting configuration.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !configured}
        className="inline-flex min-h-14 items-center justify-center bg-[#39264B] px-9 py-4 font-semibold text-white transition hover:bg-[#80549A] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "sending"
          ? "Sending Enquiry..."
          : "Submit Enquiry ↗"}
      </button>
    </form>
  );
}
