"use client";

import { useQuery } from "@tanstack/react-query";
import { getGoogleAccessToken } from "../utils/get-google-access-token";

export const listEmailsQueryKey = "list-emails";

export const useListEmailsQuery = (options = {}) => {
  const authToken = getGoogleAccessToken();
  return useQuery({
    queryKey: [listEmailsQueryKey],
    queryFn: async () => {
      const resp = await fetch("/api/gmail/list-emails", {
        headers: {
          Authorization: `${authToken}`,
        },
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
