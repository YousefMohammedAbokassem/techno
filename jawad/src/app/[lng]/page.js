import Link from "next/link";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
// import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import SwiperComp from "./components/Swiper/SwiperSlider";
import Social from "./components/Social/Social";
import Motion from "./components/Motion/Motion";
import Mobile from "./components/Mobile/Mobile";
import Footer from "./components/Foot/Footer";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Up from "./components/Up/Up";
// import { Main } from "next/document";
// import Carousel from "./components/Carousel";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t("portfolio") };
}

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <div className="pb-12">
      <Nav lng={lng} />
      <Main lng={lng} />
      <div className="  relative">
        <Services lng={lng} />
        <Social lng={lng} />
        <Motion lng={lng} />
        <Mobile lng={lng} />
        <Footer lng={lng} />
      </div>
      <Up />
    </div>
  );
}
