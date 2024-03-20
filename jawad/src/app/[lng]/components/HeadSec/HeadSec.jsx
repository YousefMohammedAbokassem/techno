"use client";
import { useTranslation } from "@/app/i18n/client";
import React from "react";

export default function HeadSec({ lng, info }) {
  const { t } = useTranslation(lng);
  return (
    <div className="text-center capitalize headSec mx-auto my-10 text-white w-fit px-6 py-2 cursor-pointer text-2xl font-semibold">
      {t(info)}
    </div>
  );
}
