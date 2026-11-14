
import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Financial Advice Business Consulting | Purple Rock",
  description:
    "Melbourne-based strategic consultancy supporting financial advice businesses across Australia with growth, acquisitions, succession, licensing and capital solutions.",
  alternates: {
    canonical: "/",
  },
};

const challenges = [
  {
    number: "01",
    title: "Accelerating Growth",
    description:
      "Identify commercial opportunities, improve business performance and establish strategies for sustainable growth.",
  },
  {
    number: "02",
    title: "Navigating Ownership Change",
    description:
      "Explore acquisitions, mergers, business sales and succession arrangements with greater clarity.",
  },
  {
    number: "03",
    title: "Optimising Business Structure",
    description:
      "Evaluate licensee relationships, self-licensing options and business structures against long-term objectives.",
  },
  {
    number: "04",
    title: "Accessing Capital & Expertise",
    description:
      "Explore funding pathways, specialist providers and relationships that support business development.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Assess your business position, objectives, commercial performance and strategic challenges.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Explore opportunities, assess alternatives and consider the risks and benefits of different pathways.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Establish a practical strategy aligned with your business goals and available resources.",
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
      "Support agreed initiatives, monitor progress and adapt strategies as circumstances change.",
  },
];

const insights = [
  {
    category: "Business Growth",
    title: "Financial Advice Business Growth in Australia",
  },
  {
    category: "Mergers & Acquisitions",
    title: "Practice Valuations and Ownership Transitions",
  },
  {
    category: "Licensing",
    title: "AFSL, Licensee Transitions and Structural Change",
  },
];

export default function Home() {
  return (
    <main>
      {/* SECTION 01 — HERO */}
      <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-canvas py-24 md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-16 h-[450px] w-[450px] rotate-45 border border-brand-purple/15 md:right-12"
        />

        <Container>
          <div className="relative z-10 max-w-6xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple">
              Melbourne-Based · Australia-Wide · Asia-Pacific
            </p>

            <h1 className="max-w-6xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-ink">
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
              Strategic advisory for Australian financial advice
              and wealth management businesses seeking sustainable
              growth, succession clarity, acquisition opportunities,
              capital solutions and effective licensing arrangements.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#68636c]">
              Connecting business strategy, industry expertise and
              opportunities across Melbourne, Australia and the
              wider Asia-Pacific region.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact/">
                Book a Strategic Consultation
              </Button>

              <Button href="/services/" variant="secondary">
                Explore Our Services
              </Button>
            </div>

            <p className="mt-20 text-sm font-medium tracking-[0.12em] text-brand-purple">
              Rock Solid Connections.
            </p>
          </div>
        </Container>
      </section>

      {/* SECTION 02 — INTRODUCTION */}
      <section className="border-t border-black/10 bg-white py-24 md:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                01 / Your Strategic Growth Partner
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.04em] md:text-6xl">
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
                  From Melbourne and Victoria to the broader
                  Australian financial services market, business
                  owners must navigate evolving industry structures,
                  regulatory requirements and opportunities for
                  consolidation.
                </p>

                <p>
                  Purple Rock Wealth Partners provides strategic
                  consultancy services focused on helping financial
                  advice practices and wealth management businesses
                  identify opportunities, evaluate commercial decisions
                  and pursue long-term enterprise value.
                </p>

                <p>
                  Our approach connects business strategy, transaction
                  support, licensing considerations and access to
                  specialist industry relationships.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/our-approach/"
                  className="inline-flex gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6"
                >
                  Discover Our Approach
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — SERVICES */}
      <section className="bg-[#211d25] py-24 text-white md:py-36">
        <Container>
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                02 / Our Expertise
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
                Strategic Solutions for Australian Financial Advice Businesses.
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-lg leading-8 text-white/65">
                From independent financial advice practices to
                established wealth management firms, Purple Rock
                supports businesses navigating growth, transactions,
                succession and structural change.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/15 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group flex min-h-72 flex-col justify-between border-b border-r border-white/15 p-7 transition-colors duration-300 hover:bg-brand-purple/20 md:p-10"
              >
                <span className="text-sm font-medium text-brand-gold">
                  {service.number}
                </span>

                <div className="mt-12">
                  <h3 className="max-w-sm text-2xl font-semibold tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                    {service.description}
                  </p>

                  <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-gold transition-all group-hover:gap-5">
                    Explore Service <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 04 — CHALLENGES */}
      <section className="bg-canvas py-24 md:py-36">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                03 / Navigating the Australian Advice Landscape
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                The Right Strategy Changes Everything.
              </h2>
            </div>

            <p className="max-w-xl self-end text-lg leading-8 text-[#68636c]">
              Australia's financial advice sector continues to evolve
              as businesses navigate regulatory change, ownership
              transitions, operational pressures and industry
              consolidation. For practice owners in Melbourne,
              Victoria and across Australia, these developments
              create important decisions and opportunities.
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

                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-lg leading-7 text-[#68636c]">
                  {item.description}
                </p>
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

      {/* SECTION 05 — OUR APPROACH */}
      <section className="bg-[#ece6f0] py-24 md:py-36">
        <Container>
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
            04 / From Strategy to Execution
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
            Clarity in Strategy.
            <br />
            <span className="text-brand-purple">
              Confidence in Action.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#68636c]">
            Every financial advice business has unique ambitions,
            commercial circumstances and operational requirements.
            Our approach combines strategic assessment with
            practical planning and access to relevant industry
            relationships.
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

          <div className="mt-14">
            <Button href="/our-approach/">
              Explore Our Approach
            </Button>
          </div>
        </Container>
      </section>

      {/* SECTION 06 — ABOUT */}
      <section className="bg-white py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                05 / About Purple Rock
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] md:text-6xl">
                Rock Solid Connections.
                <span className="text-brand-purple">
                  {" "}Strategic Business Outcomes.
                </span>
              </h2>
            </div>

            <div className="space-y-7 text-lg leading-8 text-[#68636c]">
              <p>
                Based in Melbourne, Australia, Purple Rock Wealth
                Partners focuses on helping financial advice and
                wealth management businesses navigate decisions
                influencing growth, ownership, structure and
                long-term enterprise value.
              </p>

              <p>
                With a focus on Australia's financial advice
                industry and connections across the wider Asia-Pacific
                region, our approach brings together business
                strategy, transaction considerations, licensing
                options and strategic partnerships.
              </p>

              <p>
                We believe successful business decisions begin with
                understanding each firm's commercial position,
                its people and its long-term ambitions.
              </p>

              <Link
                href="/about/"
                className="inline-flex gap-4 border-b border-brand-purple pb-3 text-sm font-semibold text-brand-purple transition-all hover:gap-6"
              >
                About Purple Rock Wealth Partners
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 07 — INSIGHTS */}
      <section className="bg-canvas py-24 md:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple">
                06 / Australian Financial Services Insights
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                Ideas, Insights &amp; Opportunities.
              </h2>
            </div>

            <Link
              href="/insights/"
              className="inline-flex items-center gap-4 text-sm font-semibold text-brand-purple"
            >
              Explore Insights <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#68636c]">
            Explore strategic perspectives on the Australian
            financial advice and wealth management industry,
            including growth, transactions, succession and licensing.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {insights.map((insight, index) => (
              <div
                key={insight.title}
                className="flex min-h-64 flex-col justify-between border border-black/15 bg-white p-8"
              >
                <span className="text-xs uppercase tracking-[0.15em] text-brand-purple">
                  {insight.category}
                </span>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                    {insight.title}
                  </h3>

                  <p className="mt-6 text-sm text-[#68636c]">
                    Featured topic {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 08 — CONTACT */}
      <section className="bg-brand-dark py-24 text-white md:py-36">
        <Container>
          <div className="max-w-5xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              07 / Let's Connect
            </p>

            <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-7xl">
              Your Next Chapter Starts with a Conversation.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/70">
              Whether you're planning growth, considering an
              acquisition, preparing for succession or evaluating
              licensing arrangements, Purple Rock Wealth Partners
              can help you explore the strategic options ahead.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Based in Melbourne, Victoria, and focused on supporting
              financial advice businesses across Australia and the
              wider Asia-Pacific region.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center gap-5 bg-brand-gold px-7 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-white"
              >
                Book a Strategic Consultation
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact/"
                className="inline-flex min-h-12 items-center gap-5 border border-white/50 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact Purple Rock
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
