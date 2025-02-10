import { isClient } from "@/libs/i18n-next/cookie-utils";

export const googleAccessTokenKey = "google-access-token";

export const getGoogleAccessToken = () => {
  if (isClient()) {
    const authToken = localStorage?.getItem(googleAccessTokenKey);

    return authToken;
  }
};
