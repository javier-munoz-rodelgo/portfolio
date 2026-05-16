import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/es`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${SITE_URL}/es`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: `${SITE_URL}/es`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/es/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${SITE_URL}/es/about`,
          en: `${SITE_URL}/en/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${SITE_URL}/es/about`,
          en: `${SITE_URL}/en/about`,
        },
      },
    },
  ];
}
