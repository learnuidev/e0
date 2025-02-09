"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { t } = useTranslation(["banner", "common"]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session = useSession();

  const accessToken = session?.data?.accessToken;

  console.log("session", session);

  return (
    <div className="relative">
      {/* <Navbar /> */}
      <div className="text-center my-32">
        <h1 className="text-8xl text-center font-bold">{t("banner:title")}</h1>
        <p className="text-2xl">{t("banner:description")}</p>

        <div>
          <h1>Access Token: {accessToken || "N/A"}</h1>

          <code>
            <pre>{JSON.stringify(session, null, 4)}</pre>
          </code>
        </div>

        {!session?.data?.user ? (
          <Button
            onClick={() => {
              signIn();
            }}
            // href="/evbox"
            className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
          >
            {t("common:login")}
          </Button>
        ) : (
          <Button
            onClick={() => {
              signOut();
            }}
            // href="/evbox"
            className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
          >
            {t("common:logout")}
          </Button>
        )}

        {/* <Link
          href="/evbox"
          className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
        >
          {t("common:login")}
        </Link> */}
      </div>
    </div>
  );
}
