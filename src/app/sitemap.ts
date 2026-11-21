
import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { insights } from "@/content/insights";

export const dynamic = "force-static";

const SITE_URL =
  "https://purplerockwealthpartners.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about/",
    "/services/",
    "/our-approach/",
    "/insights/",
    "/contact/",
    "/privacy-policy/",
  ];

  const staticPages: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency: "monthly",
      priority: route === "/" ? 1 : 0.7,
    }));

  const servicePages: MetadataRoute.Sitemap =
    services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const insightPages: MetadataRoute.Sitemap =
    insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}/`,
      lastModified: new Date(
        `${insight.publishedAt}T00:00:00Z`
      ),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...insightPages,
  ];
}
