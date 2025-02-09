"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { useTranslation } from "@/libs/i18n-next/use-translation";

// import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const { t } = useTranslation(["banner", "common"]);
  return (
    <div className="text-center my-32">
      <h1 className="text-8xl text-center font-bold">{t("banner:title")}</h1>
      <p className="text-2xl">{t("banner:description")}</p>

      {false ? (
        <Button
          onClick={() => {
            // signOut();
          }}
          className="border-[1px] px-4 mt-8 text-sm"
        >
          {t("common:logout")}
        </Button>
      ) : (
        <Button
          onClick={() => {
            signIn();
          }}
          className="border-[1px] px-4 mt-8 text-sm rounded-full"
        >
          {t("common:login")}
        </Button>
      )}
    </div>
  );
}
