
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Financial Advice Business Consulting | Purple Rock",
    template: "%s | Purple Rock Wealth Partners",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}