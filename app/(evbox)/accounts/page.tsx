"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { EvContainer } from "../evbox/components/ev-container";

export default function Accounts() {
  const { t } = useTranslation("accounts");
  return (
    <div>
      <div className="mt-36 text-center">
        <h1 className="text-4xl font-bold">{t("accounts.and.settings")}</h1>
      </div>

      <EvContainer className="mt-12">Hello</EvContainer>
    </div>
  );
}
