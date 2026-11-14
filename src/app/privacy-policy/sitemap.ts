
import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { insights } from "@/content/insights";

const baseUrl = "https://purplerockwealthpartners.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/our-approach",
    "/insights",
    "/contact",
    "/privacy-policy",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}/`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const insightPages = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}/`,
    lastModified: new Date(
      `${insight.publishedAt}T00:00:00Z`
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...insightPages];
}
