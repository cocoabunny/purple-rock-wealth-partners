
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import ContactForm from "@/components/contact/ContactForm";
import { services } from "@/content/services";

/* ============================================================
   PURPLE ROCK WEALTH PARTNERS
   Contact Page
   ============================================================ */

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Peter Purpura at Purple Rock Wealth Partners to discuss institutional capital, business growth, acquisitions, succession funding and strategic partnerships.",
  alternates: {
    canonical:
      "https://purplerockwealthpartners.com/contact/",
  },
  openGraph: {
    title: "Contact Purple Rock Wealth Partners",
    description:
      "Connect with Peter Purpura to explore strategic funding, growth and ownership opportunities for your financial advice business.",
    url: "https://purplerockwealthpartners.com/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      {/* SECTION 01 — HERO */}
      <section className="relative overflow-hidden bg-[#39264B] px-6 py-24 text-white md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[420px] rotate-45 border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
            Contact Purple Rock
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
            Your next chapter starts with a conversation.
          </h1>

          <p className="mt-9 max-w-3xl text-lg leading-9 text-white/75 md:text-xl">
            Looking to unlock capital, fund an acquisition
            or plan your practice succession? Connect
            with Purple Rock Wealth Partners to explore
            the opportunities ahead.
          </p>
        </div>
      </section>

      {/* SECTION 02 — CONTACT & ENQUIRY FORM */}
      <section
        aria-labelledby="contact-form-heading"
        className="px-6 py-20 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-4">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#80549A]">
              01 / Get in Touch
            </p>

            <h2
              id="contact-form-heading"
              className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl"
            >
              Let's discuss your business objectives.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#68636c]">
              Every practice has its own ambitions,
              challenges and commercial circumstances.
              Share a little about your business and
              the opportunities you would like to explore.
            </p>

            {/* LEADERSHIP */}
            <div className="mt-12 border-t border-[#211D25]/15 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#80549A]">
                Managing Director
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Peter Purpura
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#68636c]">
                Over 25 years of executive experience
                across funds management, capital markets
                and financial advice.
              </p>

              <Link
                href="/about/"
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#80549A] transition-all hover:gap-5"
              >
                About Peter
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* GEOGRAPHIC POSITIONING */}
            <div className="mt-10 border-t border-[#211D25]/15 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#80549A]">
                Based in
              </p>

              <p className="mt-4 text-base font-medium">
                Melbourne, Victoria, Australia
              </p>

              <p className="mt-4 text-sm leading-7 text-[#68636c]">
                Working with opportunities across
                Australia and the wider Asia-Pacific
                region.
              </p>
            </div>

            {/* PRIVACY */}
            <div className="mt-10 border-t border-[#211D25]/15 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#80549A]">
                Your Information
              </p>

              <p className="mt-4 text-sm leading-7 text-[#68636c]">
                Information submitted through this form
                is intended to help Purple Rock respond
                to your enquiry.
              </p>

              <Link
                href="/privacy-policy/"
                className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#80549A]"
              >
                Read Our Privacy Policy
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white p-7 shadow-sm md:p-12 lg:col-span-8">
            <div className="mb-10 border-b border-[#211D25]/15 pb-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#80549A]">
                Enquiry Form
              </p>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Tell us how we can help.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[#68636c]">
                Complete the fields below and outline
                what you would like to discuss.
              </p>
            </div>

            <Suspense
              fallback={
                <p className="py-10 text-sm text-[#68636c]">
                  Loading enquiry form...
                </p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* SECTION 03 — EXPLORE SERVICES */}
      <section
        aria-labelledby="contact-services"
        className="bg-white px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#80549A]">
            02 / Explore Our Expertise
          </p>

          <h2
            id="contact-services"
            className="mb-12 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Not sure where to begin?
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-8 text-[#68636c]">
            Discover the different ways Purple Rock
            supports financial advice businesses in
            navigating commercial decisions and
            strategic opportunities.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex min-h-44 flex-col justify-between border border-[#211D25]/15 p-6 transition-colors hover:border-[#80549A] hover:bg-[#F4EFF7] focus-visible:outline-2 focus-visible:outline-[#80549A]"
              >
                <span className="text-xs font-semibold text-[#80549A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold">
                    {service.shortTitle}
                  </h3>

                  <span className="mt-4 inline-block text-sm font-semibold text-[#80549A]">
                    Learn More ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — CLOSING MESSAGE */}
      <section className="bg-[#211D25] px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
            Rock Solid Connections
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Stronger connections.
            <span className="block text-white/65">
              Greater opportunities.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Purple Rock Wealth Partners connects
            institutional capital, commercial expertise
            and practical advice industry experience
            to support the next stage of your business.
          </p>
        </div>
      </section>
    </main>
  );
}
