
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Purple Rock Wealth Partners",
    url: "https://purplerockwealthpartners.com",
    slogan: "Rock Solid Connections.",
    description:
      "A Melbourne-based strategic financial services consultancy supporting financial advice business growth, ownership transitions and industry partnerships.",
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
