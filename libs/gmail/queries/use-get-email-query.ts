"use client";

import { useQuery } from "@tanstack/react-query";
import { getGoogleAccessToken } from "../utils/get-google-access-token";

export const listEmailsQueryKey = "get-email";

export const useGetEmailQuery = (messageId: string, options = {}) => {
  const authToken = getGoogleAccessToken();
  return useQuery({
    queryKey: [listEmailsQueryKey, messageId],
    queryFn: async () => {
      const resp = await fetch("/api/gmail/get-email", {
        method: "POST",
        headers: {
          Authorization: `${authToken}`,
        },
        body: JSON.stringify({ messageId }),
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
