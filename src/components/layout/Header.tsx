
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { services } from "@/content/services";

const navigation = [
  { href: "/about/", label: "About" },
  { href: "/our-approach/", label: "Our Approach" },
  { href: "/insights/", label: "Insights" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] =
    useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesRoute = pathname.startsWith("/services");

  useEffect(() => {
    setMobileOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  function navLinkClass(href: string) {
    const active = pathname === href;

    return [
      "text-sm font-medium transition-colors",
      "hover:text-[#80549A]",
      "focus-visible:outline-2",
      "focus-visible:outline-offset-4",
      "focus-visible:outline-[#80549A]",
      active ? "text-[#80549A]" : "text-[#211D25]",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#211D25]/10 bg-[#FAF8F5]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[84px] max-w-7xl items-center justify-between gap-6 px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Purple Rock Wealth Partners — Homepage"
          onClick={closeMobile}
          className="relative z-10 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A]"
        >
          <Image
            src="/images/branding/logo-colour.png"
            alt="Purple Rock Wealth Partners"
            width={220}
            height={75}
            priority
            className="h-auto w-[170px] object-contain sm:w-[195px] lg:w-[220px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          <Link
            href="/"
            className={navLinkClass("/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              aria-haspopup="true"
              onClick={() =>
                setDesktopServicesOpen((previous) => !previous)
              }
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A] ${
                isServicesRoute
                  ? "text-[#80549A]"
                  : "text-[#211D25]"
              }`}
            >
              Services

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`size-4 transition-transform ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {desktopServicesOpen && (
              <div
                id="desktop-services-menu"
                className="absolute left-1/2 top-full z-50 mt-6 w-[min(760px,calc(100vw-48px))] -translate-x-1/2 border border-[#211D25]/10 bg-white p-7 shadow-xl lg:left-auto lg:right-[-220px] lg:translate-x-0"
              >
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#211D25]/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#80549A]">
                    Strategic Expertise
                  </span>

                  <Link
                    href="/services/"
                    onClick={() =>
                      setDesktopServicesOpen(false)
                    }
                    className="text-sm font-semibold text-[#39264B] underline underline-offset-4 hover:text-[#80549A]"
                  >
                    All Services
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      onClick={() =>
                        setDesktopServicesOpen(false)
                      }
                      className="px-3 py-3 text-sm font-medium text-[#211D25] transition-colors hover:bg-[#F4EFF7] hover:text-[#80549A] focus-visible:outline-2 focus-visible:outline-[#80549A]"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href)}
              aria-current={
                pathname === link.href ? "page" : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop contact CTA */}
        <Link
          href="/contact/"
          className="hidden min-h-11 shrink-0 items-center justify-center bg-[#39264B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A] lg:inline-flex"
        >
          Let's Connect
          <span aria-hidden="true" className="ml-2">
            ↗
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative z-10 inline-flex size-11 items-center justify-center border border-[#211D25]/20 text-[#211D25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80549A] lg:hidden"
          aria-label={
            mobileOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((previous) => !previous)}
        >
          {mobileOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-6"
            >
              <path
                d="M5 5 19 19M19 5 5 19"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-6"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-84px)] overflow-y-auto border-t border-[#211D25]/10 bg-[#FAF8F5] px-6 pb-8 pt-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link
              href="/"
              onClick={closeMobile}
              className="border-b border-[#211D25]/10 py-4 text-lg font-medium"
            >
              Home
            </Link>

            <div className="border-b border-[#211D25]/10">
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                onClick={() =>
                  setMobileServicesOpen((previous) => !previous)
                }
                className="flex w-full items-center justify-between py-4 text-left text-lg font-medium"
              >
                Services

                <span
                  aria-hidden="true"
                  className="text-[#80549A]"
                >
                  {mobileServicesOpen ? "−" : "+"}
                </span>
              </button>

              {mobileServicesOpen && (
                <div
                  id="mobile-services-list"
                  className="flex flex-col gap-1 pb-4 pl-4"
                >
                  <Link
                    href="/services/"
                    onClick={closeMobile}
                    className="py-2 text-sm font-semibold text-[#80549A]"
                  >
                    All Services
                  </Link>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      onClick={closeMobile}
                      className="py-2 text-sm text-[#211D25] hover:text-[#80549A]"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="border-b border-[#211D25]/10 py-4 text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact/"
              onClick={closeMobile}
              className="mt-6 inline-flex min-h-12 items-center justify-center bg-[#39264B] px-6 text-sm font-semibold text-white"
            >
              Let's Connect ↗
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
