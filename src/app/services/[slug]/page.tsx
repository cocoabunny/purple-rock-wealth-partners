
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getService, services } from "@/content/services";

type Props = {
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
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  const url = `https://purplerockwealthpartners.com/services/${slug}/`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url,
      siteName: "Purple Rock Wealth Partners",
      locale: "en_AU",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return <ServicePage service={service} />;
}
