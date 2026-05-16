import "../../styles/globals.css";
import { Inter as MaintFont, Caveat } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import { getDictionary, Locale } from "../i18n/get-dictionary";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  SITE_NAME,
  SITE_URL,
} from "@/app/lib/seo";

const mainFont = MaintFont({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const canonicalUrl = getAbsoluteUrl(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    applicationName: SITE_NAME,
    category: "portfolio",
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(),
    },
    authors: [{ name: "Javier Muñoz Rodelgo", url: SITE_URL }],
    creator: "Javier Muñoz Rodelgo",
    publisher: "Javier Muñoz Rodelgo",
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang === "es" ? "es_ES" : "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: "/avatar.png",
          width: 1200,
          height: 630,
          alt: "Javier Muñoz - Front-end Manager y UI Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      creator: "@javiermunoz",
      images: ["/avatar.png"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${mainFont.variable} ${caveat.variable} font-sans bg-white text-gray-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
