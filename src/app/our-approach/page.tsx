
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Approach | Purple Rock Wealth Partners",
  description:
    "Discover Purple Rock's approach to understanding business objectives, evaluating opportunities and supporting strategic decisions in financial advice.",
  alternates: {
    canonical: "https://purplerockwealthpartners.com/our-approach/",
  },
};

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Establish a clear picture of the business, its ownership objectives, operating environment and commercial priorities.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Examine potential opportunities, constraints, commercial considerations and alternative pathways.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Define a strategic direction informed by business objectives, available capabilities and practical requirements.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Identify and engage relevant industry participants, commercial counterparties and professional specialists where appropriate.",
  },
  {
    number: "05",
    title: "Implement",
    description:
      "Support coordination and progress toward agreed business outcomes, with appropriate professional expertise involved.",
  },
];

export default function OurApproachPage() {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <section className="bg-[#39264B] px-6 py-28 text-white md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
            Our Approach
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            From strategic thinking to meaningful action.
          </h1>

          <p className="mt-9 max-w-3xl text-xl leading-9 text-white/75">
            Effective business decisions start with a clear
            understanding of where you are, where you want
            to go and what it will take to get there.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#80549A] md:col-span-4">
            A Practical Perspective
          </p>

          <div className="space-y-7 md:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Every business has its own set of decisions.
            </h2>

            <p className="text-lg leading-9 text-[#211D25]/75">
              The opportunities facing an established financial
              advice practice may be very different from those
              facing a growing business, a prospective buyer or
              an owner preparing for succession.
            </p>

            <p className="text-lg leading-9 text-[#211D25]/75">
              Our approach places commercial context, strategic
              priorities and relevant industry relationships at
              the centre of each discussion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#80549A]">
              The Strategic Journey
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Five considerations. One clear direction.
            </h2>
          </div>

          <div className="border-t border-[#211D25]/20">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-6 border-b border-[#211D25]/20 py-10 md:grid-cols-12"
              >
                <span className="text-sm text-[#80549A] md:col-span-2">
                  {stage.number}
                </span>

                <h3 className="text-3xl font-semibold tracking-tight md:col-span-4">
                  {stage.title}
                </h3>

                <p className="max-w-xl leading-8 text-[#211D25]/75 md:col-span-6">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#211D25] px-6 py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
              Relationships Matter
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Strategy is strengthened by the right connections.
            </h2>
          </div>

          <div>
            <p className="mb-8 text-lg leading-9 text-white/75">
              Business growth, acquisitions, succession and
              structural change can involve multiple stakeholders
              and specialist disciplines. A connected approach
              helps bring the right expertise into the
              conversation at the right time.
            </p>

            <Link
              href="/services/"
              className="inline-flex min-h-12 items-center border border-white/40 px-8 py-4 font-semibold transition hover:bg-white hover:text-[#211D25]"
            >
              Explore Our Services ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Every meaningful change begins with a conversation.
          </h2>

          <Link
            href="/contact/"
            className="mt-10 inline-flex min-h-12 items-center bg-[#39264B] px-8 py-4 font-semibold text-white"
          >
            Get in Touch ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
