"use client";

import { useQuery } from "@tanstack/react-query";

export const listEmailsQueryKey = "list-emails";

const googleAccessTokenKey = "google-access-token";

export const useListEmailsQuery = (options = {}) => {
  const authToken = localStorage.getItem(googleAccessTokenKey);
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
    // retry: false,
    ...options,
  });
};
