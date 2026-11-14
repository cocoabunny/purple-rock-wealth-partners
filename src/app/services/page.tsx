
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Our Services | Purple Rock Wealth Partners",
  description:
    "Explore strategic consulting services for financial advice businesses, including growth, acquisitions, succession, capital and business valuation.",
  alternates: {
    canonical: "https://purplerockwealthpartners.com/services/",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            Our Expertise
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Strategic solutions for stronger businesses.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
            From business growth and ownership transitions to
            capital strategy and industry partnerships, Purple Rock
            Wealth Partners helps financial advice businesses
            navigate important commercial decisions.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[#80549A]">
              Eight Areas of Expertise
            </p>

            <p className="max-w-xl text-xl leading-8">
              Every business has different ambitions, challenges
              and opportunities. Our services are designed to
              connect strategic thinking with practical commercial
              action.
            </p>
          </div>

          <div className="border-t border-[#211D25]/20">
            {services.map((service, index) => (
              <Link
                href={`/services/${service.slug}/`}
                key={service.slug}
                className="group grid gap-6 border-b border-[#211D25]/20 py-10 transition hover:pl-3 md:grid-cols-12"
              >
                <span className="text-sm text-[#80549A] md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="md:col-span-5">
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {service.title}
                  </h2>
                </div>

                <div className="md:col-span-5">
                  <p className="leading-7 text-[#211D25]/70">
                    {service.description}
                  </p>
                </div>

                <span className="text-2xl text-[#80549A] md:col-span-1 md:text-right">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211D25] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            The right strategy begins with the right conversation.
          </h2>

          <Link
            href="/contact/"
            className="mt-10 inline-flex min-h-12 items-center bg-[#D2B650] px-8 py-4 font-semibold text-[#211D25]"
          >
            Contact Purple Rock ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
