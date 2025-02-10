"use client";

import {
  BookIcon,
  CatIcon,
  LayoutDashboardIcon,
  ReceiptEuro,
  ThumbsDown,
  ThumbsUp,
  TreesIcon,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

function NavigatorItemContainer({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="dark:bg-[rgb(31,32,33)] h-32 bg-gray-100 rounded-2xl p-8 flex justify-center flex-col items-center"
    >
      {children}
    </Link>
  );
}

export function Navigator() {
  const { t } = useTranslation(["inbox", "navigator"]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-3xl font-bold">e0</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Navigator</DialogTitle>
          <DialogDescription>
            <span>
              Press <span className="font-bold">V</span> to load this menu from
              anywhere
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <NavigatorItemContainer href="/evbox">
            <TreesIcon />

            <p>{t("the.evbox")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer href="/feed">
            <BookIcon />

            <p>{t("navigator:the.feed")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer href="/chat">
            <CatIcon />

            <p>{t("navigator:le.chat")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer href="/trail">
            <ReceiptEuro />

            <p>{t("navigator:paper.trail")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer href="/screener">
            <div className="space-x-4">
              <ThumbsUp />
              <ThumbsDown />
            </div>

            <p>{t("navigator:the.filter")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer href="/filter">
            <LayoutDashboardIcon />

            <p>{t("navigator:the.dashboard")}</p>
          </NavigatorItemContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
