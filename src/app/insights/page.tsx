
import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights | Purple Rock Wealth Partners",
  description:
    "Perspectives on financial advice business growth, succession, acquisitions and strategic opportunities in the Australian financial services industry.",
  alternates: {
    canonical: "https://purplerockwealthpartners.com/insights/",
  },
};

export default function InsightsPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-28 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            Perspectives
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Insights into the business of financial advice.
          </h1>

          <p className="mt-9 max-w-3xl text-xl leading-9 text-white/75">
            Exploring the commercial decisions, industry
            developments and strategic considerations shaping
            financial advice businesses.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Latest Perspectives
            </h2>

            <p className="max-w-md leading-7 text-[#211D25]/65">
              Strategic thinking for owners, advisers and
              participants in the financial advice industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {insights.map((insight) => (
              <article
                key={insight.slug}
                className="flex flex-col justify-between border-t border-[#211D25]/20 py-8"
              >
                <div>
                  <div className="mb-7 flex flex-wrap gap-4 text-sm">
                    <span className="text-[#80549A]">
                      {insight.category}
                    </span>
                    <span className="text-[#211D25]/50">
                      {insight.readingMinutes} min read
                    </span>
                  </div>

                  <h3 className="max-w-xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
                    <Link
                      href={`/insights/${insight.slug}/`}
                      className="hover:text-[#80549A]"
                    >
                      {insight.title}
                    </Link>
                  </h3>

                  <p className="mt-6 max-w-xl leading-8 text-[#211D25]/70">
                    {insight.description}
                  </p>
                </div>

                <Link
                  href={`/insights/${insight.slug}/`}
                  className="mt-10 inline-flex min-h-11 items-center font-semibold text-[#80549A]"
                >
                  Read Article ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
