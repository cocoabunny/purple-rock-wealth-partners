
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { services } from "@/content/services";

const LOGO_PATH = "/images/branding/logo-colour.png";

const navigation = [
  { href: "/about/", label: "About" },
  { href: "/our-approach/", label: "Our Approach" },
  { href: "/insights/", label: "Insights" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesRoute =
    pathname.startsWith("/services/");

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener(
      "pointerdown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  function navClass(href: string) {
    const active = pathname === href;

    return [
      "whitespace-nowrap text-sm font-medium",
      "transition-colors duration-200",
      "hover:text-[#80549A]",
      "focus-visible:outline-2",
      "focus-visible:outline-offset-4",
      "focus-visible:outline-[#80549A]",
      active
        ? "text-[#80549A]"
        : "text-[#211D25]",
    ].join(" ");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#39264B]/10 bg-[#FAF8F5]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[96px] max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:min-h-[106px] xl:px-10">

        {/* BRAND */}
        <Link
          href="/"
          onClick={closeMobile}
          aria-label="Purple Rock Wealth Partners — Home"
          className="flex min-w-0 shrink-0 flex-col items-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A]"
        >
          {/* Cropped logo image */}
          <div className="relative w-[210px] overflow-hidden sm:w-[265px] xl:w-[290px]">
            <Image
              src={LOGO_PATH}
              alt="Purple Rock Wealth Partners"
              width={420}
              height={168}
              priority
              className="block h-auto w-full object-contain"
              style={{
                clipPath: "inset(0 0 15% 0)",
                marginBottom: "-8%",
              }}
            />
          </div>

          {/* Readable tagline */}
          <span className="mt-0.5 block text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-[#80549A] sm:text-[12px] xl:text-[14px]">
            Rock Solid Connections.
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 xl:flex 2xl:gap-9"
        >
          <Link
            href="/"
            aria-current={
              pathname === "/" ? "page" : undefined
            }
            className={navClass("/")}
          >
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="desktop-services-menu"
              aria-haspopup="true"
              onClick={() =>
                setServicesOpen((previous) => !previous)
              }
              className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors hover:text-[#80549A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80549A] ${
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
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div
                id="desktop-services-menu"
                className="absolute right-[-220px] top-full z-50 mt-6 w-[680px] border border-[#39264B]/10 bg-white p-7 shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between border-b border-[#39264B]/10 pb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80549A]">
                    Our Expertise
                  </span>

                  <Link
                    href="/services/"
                    onClick={() => setServicesOpen(false)}
                    className="text-sm font-semibold text-[#80549A] hover:underline"
                  >
                    All Services ↗
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      onClick={() => setServicesOpen(false)}
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
              aria-current={
                pathname === link.href
                  ? "page"
                  : undefined
              }
              className={navClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CONTACT CTA */}
        <Link
          href="/contact/"
          className="hidden min-h-12 shrink-0 items-center justify-center gap-3 bg-[#39264B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#80549A] xl:inline-flex"
        >
          Let's Connect
          <span aria-hidden="true">↗</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          onClick={() =>
            setMobileOpen((previous) => !previous)
          }
          className="flex size-11 shrink-0 items-center justify-center border border-[#39264B]/20 text-[#39264B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80549A] xl:hidden"
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

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-96px)] overflow-y-auto border-t border-[#39264B]/10 bg-[#FAF8F5] px-5 py-5 xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <Link
              href="/"
              onClick={closeMobile}
              className="border-b border-[#39264B]/10 py-4 text-base font-medium"
            >
              Home
            </Link>

            {/* MOBILE SERVICES */}
            <div className="border-b border-[#39264B]/10">
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                onClick={() =>
                  setMobileServicesOpen(
                    (previous) => !previous
                  )
                }
                className="flex w-full items-center justify-between py-4 text-left text-base font-medium"
              >
                Services

                <span
                  aria-hidden="true"
                  className="text-xl text-[#80549A]"
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
                    View All Services
                  </Link>

                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      onClick={closeMobile}
                      className="py-2 text-sm text-[#39264B] hover:text-[#80549A]"
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
                className="border-b border-[#39264B]/10 py-4 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact/"
              onClick={closeMobile}
              className="mt-6 flex min-h-12 items-center justify-center gap-3 bg-[#39264B] px-6 py-3 text-sm font-semibold text-white"
            >
              Let's Connect
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
