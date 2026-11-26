
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Peter Purpura, Managing Director of Purple Rock Wealth Partners. Over 25 years of executive experience across funds management, capital markets and financial advice.",
  alternates: {
    canonical:
      "https://purplerockwealthpartners.com/about/",
  },
  openGraph: {
    title: "About Purple Rock Wealth Partners",
    description:
      "Learn about Peter Purpura's experience in institutional capital, financial advice business growth and succession planning.",
    url: "https://purplerockwealthpartners.com/about/",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Institutional Capital",
    description:
      "Connecting advice business owners with capital pathways, funding opportunities and relevant institutional relationships.",
    href: "/services/funding-capital/",
  },
  {
    number: "02",
    title: "Business Growth",
    description:
      "Supporting commercial expansion, acquisitions and strategic investment decisions for financial advice practices.",
    href: "/services/growth-strategy/",
  },
  {
    number: "03",
    title: "Succession & Ownership",
    description:
      "Exploring minority equity partnerships and succession funding pathways designed around business ownership objectives.",
    href: "/services/succession-planning/",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      {/* SECTION 01 — HERO */}
      <section className="bg-[#39264B] px-6 py-24 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
            About Purple Rock Wealth Partners
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
            Rock Solid Connections.
            <span className="mt-3 block text-white/65">
              Strategic Business Outcomes.
            </span>
          </h1>

          <p className="mt-10 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            Connecting independent financial advice and accounting
            practices with institutional capital, strategic
            partnerships and opportunities for sustainable growth.
          </p>
        </div>
      </section>

      {/* SECTION 02 — WHO WE ARE */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80549A]">
              01 / Who We Are
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Institutional connections.
              <span className="text-[#80549A]">
                {" "}Practical advice industry experience.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-[#68636c]">
              <p>
                Purple Rock Wealth Partners (PRWP) was
                founded by Peter Purpura to connect independent
                advisory practices with institutional capital
                and strategic growth pathways.
              </p>

              <p>
                The consultancy brings together experience
                in capital markets, investment structuring
                and financial advice practice management
                to support business owners navigating
                growth, acquisitions and succession.
              </p>

              <p>
                Based in Melbourne, Purple Rock works
                with opportunities across Australia,
                drawing on relevant institutional and
                industry relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — LEADERSHIP */}
      <section className="bg-[#39264B] px-6 py-24 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D2B650]">
                02 / Leadership
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Peter
                <br />
                Purpura
              </h2>

              <p className="mt-5 text-sm uppercase tracking-[0.15em] text-white/75">
                Managing Director
              </p>

              <p className="mt-8 border-t border-white/25 pt-6 text-sm font-medium text-[#F0D874]">
                25+ Years of Executive Experience
              </p>

              {/* EDUCATION */}
              <div className="mt-12 border-t border-white/25 pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0D874]">
                  Education
                </p>

                <ul className="space-y-3 text-sm leading-7 text-white/85">
                  <li>University of Melbourne</li>
                  <li>Melbourne Business School</li>
                </ul>

                <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                  Postgraduate and honours qualifications
                  in management and commerce.
                </p>
              </div>
            </div>

            {/* APPROVED BIOGRAPHY */}
            <div className="space-y-7 text-lg leading-9 text-white/85">
              <p>
                With over 25 years of executive experience
                across funds management, capital markets,
                and financial advice, Peter Purpura founded
                Purple Rock Wealth Partners (PRWP) to connect
                independent advisory practices with
                institutional capital and strategic growth
                pathways.
              </p>

              <p>
                Throughout his career in asset management
                and capital markets, Peter built deep
                expertise in investment structuring,
                distribution, and capital raising. Alongside
                this, his extensive background as a people
                manager—leading teams of financial advisers
                and managing advisory practices—gives him
                a practical, ground-level understanding of
                what it takes to run and scale a successful
                advice business.
              </p>

              <p>
                At PRWP, Peter combines his institutional
                capital networks with hands-on advice
                knowledge to empower financial advisers and
                accounting principals. Through minority
                equity partnerships, succession funding,
                and tailored investment access, he helps
                practice owners unlock capital, fund
                acquisitions, and execute succession plans
                while retaining operational control of
                their businesses.
              </p>

              <p>
                Peter holds postgraduate and honours degrees
                in management and commerce. He studied at
                the University of Melbourne and Melbourne
                Business School.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — CAPABILITIES */}
      <section className="bg-[#FAF8F5] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#80549A]">
            03 / Strategic Capabilities
          </p>

          <h2 className="mb-16 max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Connecting business ambition
            <span className="text-[#80549A]">
              {" "}with opportunity.
            </span>
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {capabilities.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group flex flex-col justify-between border-t border-[#211D25]/20 pt-7 transition-colors hover:border-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A]"
              >
                <div>
                  <span className="text-sm text-[#80549A]">
                    {item.number}
                  </span>

                  <h3 className="mt-7 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#68636c]">
                    {item.description}
                  </p>
                </div>

                <span className="mt-10 text-sm font-semibold text-[#80549A]">
                  Explore Service ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — CONTACT */}
      <section className="bg-[#80549A] px-6 py-24 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            04 / Connect with Peter
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-6xl">
            Your next phase of growth starts with
            the right connection.
          </h2>

          <p className="mt-9 max-w-3xl text-lg leading-8 text-white/90">
            Looking to unlock capital, fund an acquisition
            or plan your practice succession? Connect with
            Peter to explore how a strategic partnership
            with PRWP can support your next phase of growth.
          </p>

          <Link
            href="/contact/"
            className="mt-10 inline-flex min-h-12 items-center gap-5 bg-[#D2B650] px-8 py-4 text-sm font-semibold text-[#211D25] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Connect with Peter
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
