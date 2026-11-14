
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/content/insights";
import { getService } from "@/content/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) return {};

  const url = `https://purplerockwealthpartners.com/insights/${slug}/`;

  return {
    title: insight.title,
    description: insight.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      url,
      publishedTime: insight.publishedAt,
      siteName: "Purple Rock Wealth Partners",
      locale: "en_AU",
    },
  };
}

export default async function InsightArticlePage({
  params,
}: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const formattedDate = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${insight.publishedAt}T00:00:00Z`));

  return (
    <main className="bg-[#FAF8F5] text-[#211D25]">
      <article>
        <header className="bg-[#39264B] px-6 py-24 text-white md:py-32">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/insights/"
              className="mb-12 inline-block text-sm text-white/70 hover:text-white"
            >
              ← Back to Insights
            </Link>

            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#D2B650]">
              {insight.category}
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {insight.title}
            </h1>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-white/65">
              <time dateTime={insight.publishedAt}>
                {formattedDate}
              </time>
              <span>{insight.readingMinutes} min read</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="mb-16 text-xl font-medium leading-9 md:text-2xl">
            {insight.introduction}
          </p>

          <div className="space-y-16">
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-7 text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>

                <div className="space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-9 text-[#211D25]/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 border-t border-[#211D25]/20 pt-8">
            <p className="text-sm leading-7 text-[#211D25]/60">
              This article provides general business information
              only. It does not constitute personal financial,
              legal, taxation or regulated financial product advice.
              Seek advice from appropriately qualified professionals
              concerning your circumstances.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#80549A]">
            Related Expertise
          </p>

          <h2 className="mb-10 text-3xl font-semibold md:text-4xl">
            Explore our services.
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {insight.relatedServices.map((slug) => {
              const service = getService(slug);

              if (!service) return null;

              return (
                <Link
                  href={`/services/${slug}/`}
                  key={slug}
                  className="border border-[#211D25]/15 p-7 transition hover:border-[#80549A]"
                >
                  <h3 className="text-xl font-semibold">
                    {service.shortTitle}
                  </h3>
                  <span className="mt-8 block text-[#80549A]">
                    Explore ↗
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#80549A] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Have a strategic business question?
          </h2>

          <Link
            href="/contact/"
            className="mt-9 inline-flex min-h-12 items-center bg-white px-8 py-4 font-semibold text-[#39264B]"
          >
            Start a Conversation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
