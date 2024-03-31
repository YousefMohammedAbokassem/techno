import "@/scss/index.scss";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Design from "./components/Design/Design";
import { useTranslation } from "../i18n";
import { Tajawal } from "next/font/google";
import { Providers } from "./components/Provider/Provider";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return {
    openGraph: {
      title: "Techno Plus",
      description: "Techno Plus Portfolio",
      url: "https://technoplus.dev/",
      siteName: "Techno Plus",
      images: [
        {
          url: "https://back.portfolio.technoplus.dev/images/App_images/J5uAtQ2OnKgCCrcs7AwXfODuqz4d6Ess2mk1DkFF.png", // Must be an absolute URL
          width: 200,
          height: 400,
        },
        {
          url: "https://back.portfolio.technoplus.dev/images/App_images/J5uAtQ2OnKgCCrcs7AwXfODuqz4d6Ess2mk1DkFF.png", // Must be an absolute URL
          width: 400,
          height: 600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    icons: {
      icon: "/logo.png",
    },

    description: "Techno Plus Portfolio",
    generator: "Techno Plus",
    applicationName: "Techno Plus Portfolio",
    authors: [
      { name: "Techno Plus" },
      { name: "Techno Plus", url: "https://technoplus.dev/" },
    ],
    keywords: [
      "Mobile Application",
      "web Application",
      "web design",
      "ui ux design",
      "portfolio",
      "flutter",
      "next.js",
      "react.js",
      "photoshop",
      "adobe.xd",
      "javascript",
      "gallery",
      "animation",
      "graphic designer",
    ],
    creator: "Techno Plus",
    publisher: "Techno Plus",
  };
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${tajawal.className}`}>
        <Providers>
          {children}
          <Design />
        </Providers>
      </body>
    </html>
  );
}
