"use client";

import React from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

type NextAuthProviderProps = {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
};

export const NextAuthProvider = ({
  children,
  session,
}: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
