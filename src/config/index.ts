import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
  title: {
    default: "Digitalia Solutions - Innovating Tech",
    template: `%s | Digitalia Solutions`,
  },
  description:
    "Digitalia Solutions specializes in IT development, AI, cloud, data, and consulting. We deliver innovative solutions to transform your business and drive success.",
  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        href: "/icons/favicon.ico",
      },
    ],
  },
  openGraph: {
    title: "Digitalia Solutions - Innovating Tech",
    description:
      "Digitalia Solutions specializes in IT development, AI, cloud, data, and consulting. We deliver innovative solutions to transform your business and drive success.",
    images: [
      {
        url: "/assets/og-image.png",
      },
    ],
  },
  metadataBase: new URL("https://digitalialandingpage.vercel.app/"),
};
