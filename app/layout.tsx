import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { I18NextHtmlProvider } from "@/libs/i18n-next/i18n-next-html-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { MyelinLink } from "@/components/myelin/components/myelin-link";
import { NextAuthProvider } from "@/components/next-auth-provider";
import { getServerSession } from "next-auth";
// import { getCookie } from "better-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e0",
  description: "evbox v0",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <I18NextHtmlProvider>
      <NextAuthProvider session={session}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

            <Toaster />

            <MyelinLink />
          </ThemeProvider>
        </body>
      </NextAuthProvider>
    </I18NextHtmlProvider>
  );
}
