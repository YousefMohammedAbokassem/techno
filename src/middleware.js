import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
// import { fallbackLng } from "./app/i18n/settings";
// import { languages, fallbackLng, cookieName } from "./app/[lng]/i18n/settings";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|syria.png|amirca.png|dark-background.png|whats.png|instagram.png|facebook.png|graphic-design-01.png|logoSmall2.png|Group-20.png|Group-13.png|Repeat-Grid-1.png|motion-graphic-01.png|Logo.json|1.png|2.png|3.png|mobile1.png|logo.png|Group-43.png|Group-46.png|Group-48.png|logoSmall.png|screenshot1.png|screenshot3.png|screenshot5.png|screenshot6.png|spider.png|spider2.png|shape.png|polygon.png).*)",
  ],
};

export function middleware(req) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
