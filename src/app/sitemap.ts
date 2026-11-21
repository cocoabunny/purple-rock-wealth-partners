
import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { insights } from "@/content/insights";

const SITE_URL =
  "https://purplerockwealthpartners.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      path: "/",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about/",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services/",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/our-approach/",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/insights/",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/contact/",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy/",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  const pages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}/`,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const insightPages: MetadataRoute.Sitemap =
    insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}/`,
      lastModified: new Date(
        `${insight.publishedAt}T00:00:00Z`
      ),
      changeFrequency: "monthly",
      priority: 0.65,
    }));

  return [
    ...pages,
    ...servicePages,
    ...insightPages,
  ];
}
