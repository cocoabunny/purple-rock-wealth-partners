
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" aria-label={siteConfig.name}>
              <Image
                src="/images/branding/logo-colour.png"
                alt="Purple Rock Wealth Partners"
                width={250}
                height={100}
                className="h-auto w-48"
              />
            </Link>

            <p className="mt-8 max-w-md text-2xl font-medium leading-snug tracking-tight">
              Rock Solid Connections.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Melbourne-based strategic consultancy supporting
              financial advice and wealth management businesses
              across Australia, with a broader Asia-Pacific focus.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Explore
            </h2>

            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Expertise
            </h2>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-7 text-xs text-white/55 md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <span>Melbourne · Australia · Asia-Pacific</span>
            <Link
              href="/privacy-policy/"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
