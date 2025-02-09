"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation(["banner", "common"]);
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <div className="text-center my-32">
        <h1 className="text-8xl text-center font-bold">{t("banner:title")}</h1>
        <p className="text-2xl">{t("banner:description")}</p>

        <Link
          href="/evbox"
          className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
        >
          {t("common:login")}
        </Link>
      </div>
    </div>
  );
}
