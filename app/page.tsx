"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

import { signIn, useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { AnimatedLoadingText } from "@/components/animated-loading-text";
import { useRouter } from "next/navigation";
import {
  getGoogleAccessToken,
  googleAccessTokenKey,
} from "@/libs/gmail/utils/get-google-access-token";

export default function Home() {
  const { t } = useTranslation(["banner", "common"]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session: any = useSession();

  const router = useRouter();

  const accessToken = getGoogleAccessToken() || session?.data?.accessToken;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem(googleAccessTokenKey, accessToken);
    }
  }, [accessToken]);

  if (session?.data?.user && !accessToken) {
    return (
      <div className="flex justify-center mt-32">
        <AnimatedLoadingText
          className="text-xl font-light"
          message="Fetching access token. Please wait..."
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* <Navbar /> */}
      <div className="text-center my-32">
        <h1 className="text-8xl text-center font-bold">{t("banner:title")}</h1>
        <p className="text-2xl">{t("banner:description")}</p>

        {!session?.data?.user ? (
          <Button
            onClick={() => {
              signIn();
            }}
            // href="/evbox"
            className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
          >
            {t("common:signin.with.google")}
          </Button>
        ) : (
          <div className="space-x-4">
            <Button
              onClick={() => {
                router.push("/evbox");
              }}
              className="border-[1px] py-[8px] inline-block px-4 mt-8 text-sm rounded-full"
            >
              {t("common:proceed.to.evbox")}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                signOut();
                localStorage.setItem(googleAccessTokenKey, "");
              }}
              className="border-[1px] inline-block px-4 py-[4px] mt-8 text-sm rounded-full"
            >
              {t("common:logout")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
