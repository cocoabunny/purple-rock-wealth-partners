
export const siteConfig = {
  name: "Purple Rock Wealth Partners",
  shortName: "Purple Rock",
  tagline: "Rock Solid Connections",

  url: "https://purplerockwealthpartners.com",

  description:
    "Melbourne-based strategic consultancy for Australian financial advice businesses. Specialist support for growth, acquisitions, succession, licensing and capital solutions.",

  location: {
    city: "Melbourne",
    state: "Victoria",
    country: "Australia",
    region: "Asia-Pacific",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Our Approach", href: "/our-approach/" },
    { label: "Insights", href: "/insights/" },
    { label: "Contact", href: "/contact/" },
  ],

  primaryCTA: {
    label: "Book a Consultation",
    href: "/contact/",
  },
};

export type SiteConfig = typeof siteConfig;
