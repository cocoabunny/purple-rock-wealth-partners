
import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Financial Advice Business Consulting | Purple Rock",
    template: "%s | Purple Rock Wealth Partners",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  icons: {
    icon: [
      {
        url: "/images/branding/favicon.ico",
        sizes: "any",
      },
      {
        url: "/images/branding/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/branding/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/images/branding/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/images/branding/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: siteConfig.name,
    title:
      "Financial Advice Business Consulting | Purple Rock",
    description: siteConfig.description,
    url: siteConfig.url,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen antialiased">
        <OrganizationSchema />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
