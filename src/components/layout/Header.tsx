
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Our Approach", href: "/our-approach/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile navigation after changing routes.
    // The client effect runs whenever the pathname changes.
    // No manual event listener is required.
    // 
    // 
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href.slice(0, -1) ||
        pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-canvas/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center"
            aria-label="Purple Rock Wealth Partners home"
          >
            <Image
              src="/images/branding/logo-colour.png"
              alt="Purple Rock Wealth Partners"
              width={250}
              height={100}
              priority
              className="h-auto w-40 object-contain md:w-48"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  isActive(item.href) ? "page" : undefined
                }
                className={`
                  text-xs font-semibold uppercase
                  tracking-[0.12em] transition-colors
                  hover:text-brand-purple
                  ${
                    isActive(item.href)
                      ? "text-brand-purple"
                      : "text-ink"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={siteConfig.primaryCTA.href}
            className="hidden shrink-0 items-center gap-3 bg-brand-dark px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-brand-purple xl:inline-flex"
          >
            Let's Connect <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            className="relative z-50 flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-canvas lg:hidden"
          style={{ height: "calc(100dvh - 5rem)" }}
        >
          <Container className="flex flex-col py-10">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  isActive(item.href) ? "page" : undefined
                }
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-5 text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-brand-purple"
              >
                <span className="mr-5 text-xs text-brand-purple">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact/"
              onClick={() => setMenuOpen(false)}
              className="mt-10 bg-brand-dark px-6 py-4 text-center font-semibold text-white"
            >
              Book a Consultation ↗
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
