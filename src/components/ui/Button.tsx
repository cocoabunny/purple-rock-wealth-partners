
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles = `
    inline-flex min-h-12 items-center justify-center
    gap-3 rounded-sm px-6 py-3
    text-sm font-semibold
    transition-colors duration-200
  `;

  const variants = {
    primary: `
      bg-brand-dark text-white
      hover:bg-brand-purple
    `,
    secondary: `
      border border-brand-dark
      text-brand-dark
      hover:bg-brand-dark hover:text-white
    `,
  };

  return (
    <Link
      href={href}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
