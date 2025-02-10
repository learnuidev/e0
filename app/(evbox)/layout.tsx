"use client";

import { ReactQueryProvider } from "@/libs/react-query/react-query-provider";
import { Navbar } from "./evbox/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ReactQueryProvider>
        <div className="relative">
          <Navbar />
          {children}
        </div>
      </ReactQueryProvider>
    </div>
  );
}
