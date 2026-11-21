
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static website.
  output: "export",

  // Produce /about/index.html instead of /about.html.
  trailingSlash: true,

  // GitHub Pages does not provide a Next.js image server.
  images: {
    unoptimized: true,
  },

  // Keep Turbopack rooted in this project.
  turbopack: {
    root: process.cwd(),
  },

  // Production compiler options.
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
