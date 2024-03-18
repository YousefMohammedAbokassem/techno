import "@/scss/index.scss";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Design from "./components/Design/Design";
import { useTranslation } from "../i18n";
import { Tajawal } from "next/font/google";

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
    icons: {
      icon: "/logo.png",
    },
  };
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={`${tajawal.className}`}>
        <Design />
        {children}
      </body>
    </html>
  );
}
