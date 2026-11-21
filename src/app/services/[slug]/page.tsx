
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServicePage from "@/components/services/ServicePage";
import { getService, services } from "@/content/services";

const baseUrl = "https://purplerockwealthpartners.com";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const url = `${baseUrl}/services/${slug}/`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      title: service.seoTitle,
      description: service.seoDescription,
      url,
      siteName: "Purple Rock Wealth Partners",
      locale: "en_AU",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
