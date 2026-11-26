
import Image from "next/image";
import Link from "next/link";

import { services } from "@/content/services";

const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "About Purple Rock", href: "/about/" },
  { label: "Our Services", href: "/services/" },
  { label: "Our Approach", href: "/our-approach/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

const LOGO_PATH = "/images/branding/logo-colour.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#39264B] text-white">
      {/* ====================================================
          SECTION 01 — CONTACT CTA
          ==================================================== */}
      <section className="bg-[#80549A] px-5 py-14 sm:px-8 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
              Purple Rock Wealth Partners
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Rock Solid Connections.
              <span className="mt-2 block text-white/75">
                Strategic Business Outcomes.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-white/90 md:text-lg">
              Connecting financial advice and accounting
              practices with institutional capital, strategic
              partnerships and commercial opportunities.
            </p>

            <Link
              href="/contact/"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-4 bg-[#D2B650] px-7 py-4 text-sm font-semibold text-[#211D25] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Connect with Peter
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 02 — BRAND & NAVIGATION
          ==================================================== */}
      <div className="px-5 py-12 sm:px-8 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* MOBILE BRAND INTRODUCTION */}
          <div className="border-b border-white/20 pb-9 lg:hidden">
            <Link
              href="/"
              aria-label="Purple Rock Wealth Partners — Home"
              className="inline-block max-w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
            >
              <Image
                src={LOGO_PATH}
                alt="Purple Rock Wealth Partners"
                width={420}
                height={168}
                className="block h-auto w-[235px] max-w-full object-contain sm:w-[285px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Strategic business consulting for financial
              advice and wealth management businesses.
            </p>

            <p className="mt-4 text-xs leading-6 text-white/60">
              Melbourne, Victoria · Australia-wide
            </p>
          </div>

          {/* MOBILE ACCORDION NAVIGATION */}
          <nav
            aria-label="Mobile footer navigation"
            className="lg:hidden"
          >
            <details className="group border-b border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874] marker:content-none focus-visible:outline-2 focus-visible:outline-[#F0D874] [&::-webkit-details-marker]:hidden">
                Explore
                <span
                  aria-hidden="true"
                  className="text-xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <ul className="space-y-1 pb-6">
                {mainNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-sm text-white/85 transition-colors hover:text-[#F0D874]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group border-b border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874] marker:content-none focus-visible:outline-2 focus-visible:outline-[#F0D874] [&::-webkit-details-marker]:hidden">
                Our Expertise
                <span
                  aria-hidden="true"
                  className="text-xl font-normal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <ul className="space-y-1 pb-6">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="block py-2 text-sm text-white/85 transition-colors hover:text-[#F0D874]"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>

          {/* MOBILE CONTACT */}
          <div className="border-b border-white/20 py-8 lg:hidden">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874]">
              Have a Business Enquiry?
            </p>

            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 text-base font-semibold text-white transition-colors hover:text-[#F0D874]"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* =================================================
              DESKTOP FOOTER GRID
              ================================================= */}
          <div className="hidden gap-12 lg:grid lg:grid-cols-12">
            {/* BRAND */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                aria-label="Purple Rock Wealth Partners — Home"
                className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
              >
                <Image
                  src={LOGO_PATH}
                  alt="Purple Rock Wealth Partners"
                  width={420}
                  height={168}
                  className="block h-auto w-[265px] max-w-full object-contain"
                />
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-8 text-white/80">
                Strategic business consulting for financial
                advice and wealth management businesses.
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0D874]">
                  Based In
                </p>

                <p className="text-sm text-white/85">
                  Melbourne, Victoria, Australia
                </p>

                <p className="mt-3 max-w-xs text-sm leading-7 text-white/60">
                  Engaging with opportunities across Australia
                  and the wider Asia-Pacific region.
                </p>
              </div>
            </div>

            {/* MAIN NAVIGATION */}
            <nav
              aria-label="Footer navigation"
              className="lg:col-span-3"
            >
              <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874]">
                Explore
              </h2>

              <ul className="space-y-4">
                {mainNavigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/85 transition-colors hover:text-[#F0D874] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0D874]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SERVICES */}
            <nav
              aria-label="Footer services"
              className="lg:col-span-3"
            >
              <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874]">
                Our Expertise
              </h2>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="text-sm leading-7 text-white/85 transition-colors hover:text-[#F0D874] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0D874]"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CONTACT */}
            <div className="lg:col-span-2">
              <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0D874]">
                Get in Touch
              </h2>

              <p className="text-sm leading-7 text-white/85">
                Questions about growth, acquisitions,
                funding or succession?
              </p>

              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-3 border-b border-[#F0D874] pb-2 text-sm font-semibold text-[#F0D874] transition-all hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0D874]"
              >
                Start a Conversation ↗
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          SECTION 03 — COPYRIGHT & LEGAL
          ==================================================== */}
      <div className="border-t border-white/15 bg-[#30203E] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Purple Rock Wealth Partners.
            All rights reserved.
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            <Link
              href="/privacy-policy/"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact/"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Back to Home
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
