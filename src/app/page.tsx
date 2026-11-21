
import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { services } from "@/content/services";
import { insights } from "@/content/insights";

/* ============================================================
   PURPLE ROCK WEALTH PARTNERS
   Homepage
   ============================================================ */

export const metadata: Metadata = {
  title: "Financial Advice Business Consulting",
  description:
    "Purple Rock Wealth Partners connects Australian financial advice businesses with institutional capital, growth strategies, acquisition opportunities and succession solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Financial Advice Business Consulting | Purple Rock Wealth Partners",
    description:
      "Strategic growth, institutional capital, acquisitions and succession planning for Australian financial advice businesses.",
    url: "https://purplerockwealthpartners.com/",
    type: "website",
  },
};

/* ============================================================
   HOMEPAGE DATA
   ============================================================ */

const challenges = [
  {
    number: "01",
    title: "Accelerating Growth",
    description:
      "Identify commercial opportunities, strengthen business performance and develop strategies for sustainable growth.",
    href: "/services/growth-strategy/",
    linkLabel: "Explore Growth Strategy",
  },
  {
    number: "02",
    title: "Navigating Ownership Change",
    description:
      "Explore acquisitions, mergers, minority equity partnerships and succession arrangements with greater clarity.",
    href: "/services/succession-planning/",
    linkLabel: "Explore Succession Planning",
  },
  {
    number: "03",
    title: "Optimising Business Structure",
    description:
      "Evaluate licensing arrangements, ownership structures and operating models against long-term commercial objectives.",
    href: "/services/licensing-solutions/",
    linkLabel: "Explore Licensing Solutions",
  },
  {
    number: "04",
    title: "Accessing Capital & Expertise",
    description:
      "Explore institutional capital, funding pathways and strategic relationships that support acquisitions and business development.",
    href: "/services/funding-capital/",
    linkLabel: "Explore Capital Solutions",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Assess your business position, ownership objectives, commercial performance and strategic challenges.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Explore opportunities, assess alternatives and consider the commercial implications of different pathways.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Establish a practical strategy aligned with your business objectives, capital requirements and available resources.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Identify suitable capital providers, professional specialists, technology solutions and strategic partners.",
  },
  {
    number: "05",
    title: "Implement",
    description:
      "Support agreed initiatives, coordinate relevant stakeholders and adapt strategies as circumstances change.",
  },
];

/* ============================================================
   HOMEPAGE COMPONENT
   ============================================================ */

export default function Home() {
  return (
    <main id="main-content">
      {/* ======================================================
          SECTION 01 — HERO
          ====================================================== */}

      <section
        aria-labelledby="hero-heading"
        className="relative flex min-h-[85svh] items-center overflow-hidden bg-canvas py-24 md:py-32"
      >
        {/* Decorative geometric accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-16 h-[450px] w-[450px] rotate-45 border border-brand-purple/15 md:right-12"
        />

        <Container>
          <div className="relative z-10 max-w-6xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple">
              Melbourne-Based · Australia-Wide · Asia-Pacific
            </p>

            <h1
              id="hero-heading"
              className="max-w-6xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-ink"
            >
              Accelerating
              <br />

              <span className="text-brand-purple">
                Growth &amp; Value
              </span>

              <br />
              in Financial Advice
              <br className="hidden lg:block" />
              Businesses.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#68636c] md:text-xl">
              Strategic business consulting for Australian financial
              advice and wealth management practices seeking
              sustainable growth, institutional capital,
              acquisition opportunities and succession solutions.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#68636c]">
              Connecting independent advisory practices with
              capital, commercial expertise and strategic
              opportunities across Australia and the wider
              Asia-Pacific region.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact/">
                Book a Strategic Consultation
              </Button>

              <Button
                href="/services/"
                variant="secondary"
              >
                Explore Our Services
              </Button>
            </div>

            <p className="mt-20 text-sm font-medium tracking-[0.12em] text-brand-purple">
              Rock Solid Connections.
            </p>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 02 — INTRODUCTION
          ====================================================== */}

      <section
        aria-labelledby="introduction-heading"
        className="border-t border-black/10 bg-white py-24 md:py-36"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                01 / Your Strategic Growth Partner
              </p>
            </div>

            <div>
              <h2
                id="introduction-heading"
                className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-6xl"
              >
                Building Stronger Businesses.

                <span className="text-brand-purple">
                  {" "}Creating Greater Opportunities.
                </span>
              </h2>

              <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[#68636c] md:text-lg">
                <p>
                  Financial advice businesses across Australia face
                  increasingly complex decisions about growth,
                  ownership, funding and their future.
                </p>

                <p>
                  From independent advisory practices to
                  established wealth management businesses,
                  owners must navigate evolving industry
                  structures, regulatory requirements and
                  opportunities for consolidation.
                </p>

                <p>
                  Purple Rock Wealth Partners brings together
                  strategic business consulting, institutional
                  capital connections and practical experience
                  within the financial advice industry.
                </p>

                <p>
                  Our focus is helping practice owners unlock
                  commercial opportunities, evaluate strategic
                  partnerships and pursue long-term business value.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <Link
                  href="/our-approach/"
                  className="inline-flex items-center gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
                >
                  Discover Our Approach
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/about/"
                  className="inline-flex items-center gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
                >
                  About Purple Rock
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 03 — SERVICES
          ====================================================== */}

      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-[#211d25] py-24 text-white md:py-36"
      >
        <Container>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                02 / Our Expertise
              </p>

              <h2
                id="services-heading"
                className="text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl"
              >
                Strategic Solutions for Australian Financial
                Advice Businesses.
              </h2>
            </div>

            <div className="flex flex-col items-start justify-end gap-8">
              <p className="max-w-xl text-lg leading-8 text-white/65">
                From independent financial advice practices to
                established wealth management firms, Purple Rock
                supports businesses navigating growth,
                transactions, capital requirements, succession
                and structural change.
              </p>

              <Link
                href="/services/"
                className="inline-flex items-center gap-4 border-b border-brand-gold pb-3 text-sm font-semibold text-brand-gold transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                View All Services
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="grid border-l border-t border-white/15 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                aria-label={`Explore ${service.title}`}
                className="group flex min-h-72 flex-col justify-between border-b border-r border-white/15 p-7 transition-colors duration-300 hover:bg-brand-purple/20 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-gold md:p-10"
              >
                <span className="text-sm font-medium text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-12">
                  <h3 className="max-w-sm text-2xl font-semibold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                    {service.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-gold transition-all group-hover:gap-5">
                    Explore Service
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 04 — CHALLENGES & OPPORTUNITIES
          ====================================================== */}

      <section
        aria-labelledby="challenges-heading"
        className="bg-canvas py-24 md:py-36"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                03 / Navigating the Australian Advice Landscape
              </p>

              <h2
                id="challenges-heading"
                className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl"
              >
                The Right Strategy Changes Everything.
              </h2>
            </div>

            <p className="max-w-xl self-end text-lg leading-8 text-[#68636c]">
              Australia's financial advice sector continues to
              evolve as businesses navigate regulatory change,
              ownership transitions, operational pressures and
              industry consolidation. For practice owners in
              Melbourne, Victoria and across Australia,
              these developments present important commercial
              decisions and opportunities.
            </p>
          </div>

          <div className="mt-16 border-t border-black/15">
            {challenges.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-black/15 py-10 md:grid-cols-[80px_1fr_1fr] md:gap-12"
              >
                <span className="text-sm text-brand-purple">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-lg leading-7 text-[#68636c]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand-purple transition-all hover:gap-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
                  >
                    {item.linkLabel}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/contact/">
              Discuss Your Business Objectives
            </Button>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 05 — OUR APPROACH
          ====================================================== */}

      <section
        aria-labelledby="approach-heading"
        className="bg-[#ece6f0] py-24 md:py-36"
      >
        <Container>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
            04 / From Strategy to Execution
          </p>

          <h2
            id="approach-heading"
            className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl"
          >
            Clarity in Strategy.
            <br />

            <span className="text-brand-purple">
              Confidence in Action.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#68636c]">
            Every financial advice business has unique ambitions,
            commercial circumstances and operational requirements.
            Our approach brings together strategic assessment,
            practical planning, institutional capital relationships
            and access to relevant industry expertise.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-t border-brand-purple/30 pt-6"
              >
                <span className="text-sm font-semibold text-brand-purple">
                  {step.number}
                </span>

                <h3 className="mt-7 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#68636c]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Button href="/our-approach/">
              Explore Our Approach
            </Button>

            <Button
              href="/contact/"
              variant="secondary"
            >
              Discuss Your Strategy
            </Button>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 06 — ABOUT & LEADERSHIP
          ====================================================== */}

      <section
        aria-labelledby="about-heading"
        className="bg-white py-24 md:py-36"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                05 / About Purple Rock
              </p>

              <h2
                id="about-heading"
                className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] md:text-6xl"
              >
                Rock Solid Connections.

                <span className="text-brand-purple">
                  {" "}Strategic Business Outcomes.
                </span>
              </h2>

              <div className="mt-10 border-t border-black/15 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                  Managing Director
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  Peter Purpura
                </h3>

                <p className="mt-3 text-sm text-[#68636c]">
                  25+ Years of Executive Experience
                </p>
              </div>
            </div>

            <div className="space-y-7 text-lg leading-8 text-[#68636c]">
              <p>
                Founded by Peter Purpura, Purple Rock Wealth
                Partners connects independent advisory practices
                with institutional capital and strategic growth
                pathways.
              </p>

              <p>
                With over 25 years of executive experience
                across funds management, capital markets and
                financial advice, Peter combines extensive
                institutional networks with practical experience
                leading teams of advisers and managing
                advisory practices.
              </p>

              <p>
                Through minority equity partnerships, succession
                funding and tailored investment access, Purple
                Rock helps practice owners unlock capital,
                fund acquisitions and execute succession
                plans while retaining operational control
                of their businesses.
              </p>

              <p>
                Peter holds postgraduate and honours degrees
                in management and commerce from the
                University of Melbourne.
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-6 pt-4">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
                >
                  Meet Peter Purpura
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
                >
                  Connect with Peter
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 07 — INSIGHTS
          ====================================================== */}

      <section
        aria-labelledby="insights-heading"
        className="bg-canvas py-24 md:py-36"
      >
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                06 / Australian Financial Services Insights
              </p>

              <h2
                id="insights-heading"
                className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl"
              >
                Ideas, Insights &amp; Opportunities.
              </h2>
            </div>

            <Link
              href="/insights/"
              className="inline-flex items-center gap-4 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
            >
              Explore Insights
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#68636c]">
            Explore strategic perspectives on the Australian
            financial advice and wealth management industry,
            including growth, acquisitions, capital,
            ownership transitions and succession.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {insights.slice(0, 4).map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}/`}
                aria-label={`Read ${insight.title}`}
                className="group flex min-h-72 flex-col justify-between border border-black/15 bg-white p-8 transition-colors duration-300 hover:border-brand-purple hover:bg-[#f4eff7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-purple">
                    {insight.category}
                  </span>

                  <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-brand-purple md:text-3xl">
                    {insight.title}
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-[#68636c]">
                    {insight.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 border-t border-black/10 pt-6">
                  <span className="text-xs text-[#68636c]">
                    {String(index + 1).padStart(2, "0")}
                    {" / "}
                    {insight.readingMinutes} min read
                  </span>

                  <span className="inline-flex items-center gap-3 text-sm font-semibold text-brand-purple transition-all group-hover:gap-5">
                    Read Article
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/insights/"
              className="inline-flex items-center gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-purple"
            >
              View All Insights
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ======================================================
          SECTION 08 — CONTACT
          ====================================================== */}

      <section
        aria-labelledby="contact-heading"
        className="bg-brand-dark py-24 text-white md:py-36"
      >
        <Container>
          <div className="max-w-5xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              07 / Let's Connect
            </p>

            <h2
              id="contact-heading"
              className="text-4xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-7xl"
            >
              Your Next Chapter Starts with a Conversation.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/70">
              Looking to unlock capital, fund an acquisition
              or plan your practice succession? Connect with
              Peter to explore how a strategic partnership
              with Purple Rock Wealth Partners can support
              your next phase of growth.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Based in Melbourne, Victoria, Purple Rock
              supports financial advice businesses and
              accounting principals across Australia,
              with connections throughout the wider
              Asia-Pacific region.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center gap-5 bg-brand-gold px-7 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Connect with Peter
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/services/"
                className="inline-flex min-h-12 items-center gap-5 border border-white/50 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Our Services
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
