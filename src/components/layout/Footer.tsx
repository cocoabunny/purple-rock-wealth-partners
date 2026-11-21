
import Image from "next/image";
import Link from "next/link";

import { services } from "@/content/services";

const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Purple Rock",
    href: "/about/",
  },
  {
    label: "Our Services",
    href: "/services/",
  },
  {
    label: "Our Approach",
    href: "/our-approach/",
  },
  {
    label: "Insights",
    href: "/insights/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#211D25] text-white">
      {/* FOOTER INTRODUCTION */}
      <section className="border-b border-white/15 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
              Purple Rock Wealth Partners
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-5xl">
              Rock Solid Connections.
              <span className="block text-white/60">
                Strategic Business Outcomes.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start justify-between gap-9">
            <p className="max-w-xl text-lg leading-8 text-white/70">
              Connecting financial advice and accounting
              practices with institutional capital, strategic
              partnerships and commercial opportunities.

              Led by Managing Director Peter Purpura, Purple
              Rock supports businesses navigating growth,
              acquisitions, succession and ownership change.
            </p>

            <Link
              href="/contact/"
              className="inline-flex min-h-12 items-center gap-5 bg-[#D2B650] px-7 py-4 text-sm font-semibold text-[#211D25] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Connect with Peter
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER NAVIGATION */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Purple Rock Wealth Partners — Home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
            >
              <Image
                src="/images/branding/logo-horizontal-colour.png"
                alt="Purple Rock Wealth Partners"
                width={240}
                height={80}
                className="h-auto w-[210px] object-contain"
              />
            </Link>

            <p className="mt-8 max-w-xs leading-8 text-white/65">
              Strategic business consulting for financial
              advice and wealth management businesses.
            </p>

            <div className="mt-9 border-t border-white/15 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D2B650]">
                Based in
              </p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Melbourne, Victoria, Australia
              </p>

              <p className="mt-3 text-sm leading-7 text-white/50">
                Engaging with opportunities across Australia
                and the wider Asia-Pacific region.
              </p>
            </div>
          </div>

          {/* PRIMARY NAVIGATION */}
          <nav
            aria-label="Footer navigation"
            className="lg:col-span-3"
          >
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
              Explore
            </h2>

            <ul className="space-y-4">
              {mainNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES NAVIGATION */}
          <nav
            aria-label="Footer services"
            className="lg:col-span-3"
          >
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
              Our Expertise
            </h2>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-sm leading-7 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT COLUMN */}
          <div className="lg:col-span-2">
            <h2 className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
              Get in Touch
            </h2>

            <p className="text-sm leading-7 text-white/70">
              Have a question about growth, acquisitions,
              funding or succession?
            </p>

            <Link
              href="/contact/"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#D2B650] pb-2 text-sm font-semibold text-[#D2B650] transition-all hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B650]"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/15 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} Purple Rock Wealth Partners.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
