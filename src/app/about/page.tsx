
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Purple Rock Wealth Partners",
  description:
    "Meet Purple Rock Wealth Partners, a Melbourne-based strategic consultancy supporting the growth and evolution of Australian financial advice businesses.",
  alternates: {
    canonical: "https://purplerockwealthpartners.com/about/",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-28 text-white md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            About Purple Rock
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Rock Solid Connections.
            <span className="block text-white/60">
              Strategic Business Outcomes.
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-white/75">
            Connecting financial advice businesses with the
            strategies, opportunities and relationships that
            support their next stage of development.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#80549A]">
              Who We Are
            </p>
          </div>

          <div className="space-y-7 md:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Business strategy grounded in industry relationships.
            </h2>

            <p className="text-lg leading-9 text-[#211D25]/75">
              Purple Rock Wealth Partners is a strategic financial
              services consultancy focused on helping financial
              advice businesses address complex commercial
              challenges and pursue meaningful opportunities.
            </p>

            <p className="text-lg leading-9 text-[#211D25]/75">
              Our work brings together business strategy,
              ownership planning, transaction considerations,
              capital solutions and industry connections.
              We recognise that financial advice businesses
              operate within a distinctive commercial and
              regulatory environment.
            </p>

            <p className="text-lg leading-9 text-[#211D25]/75">
              Based in Melbourne, Victoria, Purple Rock engages
              with opportunities across Australia and the wider
              Asia-Pacific region, where appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#80549A]">
            What Drives Us
          </p>

          <h2 className="mb-14 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Good business decisions begin with understanding.
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Clarity",
                text: "Understand the commercial realities, choices and implications before taking action.",
              },
              {
                title: "Connections",
                text: "Recognise the importance of relevant relationships and specialist expertise in advancing business objectives.",
              },
              {
                title: "Execution",
                text: "Bring practical implementation considerations into the strategic conversation from the outset.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="border-t border-[#211D25]/20 pt-7"
              >
                <span className="text-sm text-[#80549A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-[#211D25]/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211D25] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
              Leadership
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Peter Purpura
            </h2>

            <p className="mt-5 text-lg text-white/65">
              Managing Director
            </p>
          </div>

          <div className="space-y-7">
            <p className="text-xl leading-9 text-white/85">
              Purple Rock Wealth Partners is led by
              Managing Director Peter Purpura.
            </p>

            <p className="leading-8 text-white/70">
              The consultancy places strategic relationships,
              commercial understanding and business objectives
              at the centre of its engagement with financial
              advice businesses.
            </p>

            <p className="leading-8 text-white/70">
              A detailed professional biography, including
              verified experience and qualifications, can be
              incorporated following client approval.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#80549A]">
              Next Steps
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Explore the opportunities ahead.
            </h2>
          </div>

          <Link
            href="/contact/"
            className="inline-flex min-h-12 items-center bg-[#39264B] px-8 py-4 font-semibold text-white"
          >
            Start a Conversation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
