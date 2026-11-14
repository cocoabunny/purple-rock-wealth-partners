
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple">
              Melbourne-Based · Australia-Wide · Asia-Pacific
            </p>
<div className="bg-red-500 p-8 text-white">
  TAILWIND COLOUR TEST
</div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(5rem,7vw,8rem)]">
              Accelerating
              <br />
              <span className="text-brand-purple">
                Growth &amp; Value
              </span>
              <br />
              in Financial Advice
              <br />
              Businesses.
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#68636c] md:text-xl">
              Strategic advisory for Australian financial advice
              and wealth management businesses seeking sustainable
              growth, succession clarity, acquisition opportunities,
              capital solutions and effective licensing arrangements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={siteConfig.primaryCTA.href}>
                {siteConfig.primaryCTA.label}
              </Button>

              <Button href="/services/" variant="secondary">
                Explore Our Services
              </Button>
            </div>

            <p className="mt-16 text-sm font-medium tracking-wide text-brand-purple">
              {siteConfig.tagline}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
