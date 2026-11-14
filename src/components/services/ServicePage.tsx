
import Link from "next/link";
import type { Service } from "@/content/services";
import { getService } from "@/content/services";

type Props = {
  service: Service;
};

export default function ServicePage({ service }: Props) {
  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      {/* Hero */}
      <section className="bg-[#39264B] px-6 py-24 text-white md:py-36">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services/"
            className="mb-12 inline-block text-sm text-white/70 transition hover:text-white"
          >
            ← All Services
          </Link>

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B650]">
            {service.eyebrow}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#80549A]">
              The Opportunity
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">
              A strategic perspective on what comes next.
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-[#211D25]/75">
              {service.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#80549A]">
              Business Considerations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The decisions that shape your future.
            </h2>
          </div>

          <div className="divide-y divide-[#211D25]/15 border-t border-[#211D25]/15">
            {service.challenges.map((challenge, index) => (
              <div
                key={challenge}
                className="grid gap-4 py-7 md:grid-cols-12 md:items-start"
              >
                <span className="text-sm text-[#80549A] md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-medium md:col-span-10 md:text-2xl">
                  {challenge}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#80549A]">
              How We Can Help
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Strategic support with a practical purpose.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {service.solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="border-t border-[#211D25]/20 pt-7"
              >
                <span className="text-sm text-[#80549A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {solution.title}
                </h3>

                <p className="mt-5 max-w-xl leading-8 text-[#211D25]/70">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#211D25] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
              Strategic Outcomes
            </p>

            <h2 className="max-w-lg text-3xl font-semibold tracking-tight md:text-5xl">
              Built around better business decisions.
            </h2>
          </div>

          <ul className="space-y-6">
            {service.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="border-b border-white/20 pb-6 text-lg text-white/85"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#80549A]">
            Explore Further
          </p>

          <h2 className="mb-12 text-3xl font-semibold tracking-tight md:text-5xl">
            Related expertise.
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {service.relatedServices.map((slug) => {
              const related = getService(slug);

              if (!related) return null;

              return (
                <Link
                  key={slug}
                  href={`/services/${slug}/`}
                  className="group flex min-h-52 flex-col justify-between border border-[#211D25]/15 p-7 transition hover:border-[#80549A] hover:bg-white"
                >
                  <h3 className="text-xl font-semibold">
                    {related.shortTitle}
                  </h3>

                  <span className="mt-10 text-[#80549A] transition group-hover:translate-x-1">
                    Explore service →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#80549A] px-6 py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-white/70">
              Start a Conversation
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Let's explore what's possible.
            </h2>
          </div>

          <Link
            href={`/contact/?service=${service.slug}`}
            className="inline-flex min-h-12 items-center justify-center bg-white px-8 py-4 font-semibold text-[#39264B] transition hover:bg-[#FAF8F5]"
          >
            Get in Touch ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
