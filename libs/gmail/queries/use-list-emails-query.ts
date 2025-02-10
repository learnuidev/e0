"use client";

import { useQuery } from "@tanstack/react-query";
import { getGoogleAccessToken } from "../utils/get-google-access-token";

export const listEmailsQueryKey = "list-emails";

export const useListEmailsQuery = (
  params: { pageToken?: string; q?: string },
  options = {}
) => {
  const pageToken = params?.pageToken || "";
  const q = params?.q || "";
  const authToken = getGoogleAccessToken();
  return useQuery({
    queryKey: [listEmailsQueryKey, pageToken, q],
    queryFn: async () => {
      const resp = await fetch("/api/gmail/list-emails", {
        method: "POST",
        headers: {
          Authorization: `${authToken}`,
        },
        body: JSON.stringify({
          pageToken,
          q,
        }),
      });

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    },
    retry: false,
    ...options,
  });
};
