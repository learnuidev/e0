"use client";

import { useParams } from "next/navigation";

// import { useParams } from "next/navigation";

export const useGetEmailId = () => {
  const params = useParams<{ "email-id": string }>();
  return params["email-id"];
};
