"use client";

import { BookIcon, CatIcon, ReceiptEuro, TreesIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "@/libs/i18n-next/use-translation";

function NavigatorItemContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-[rgb(31,32,33)] bg-gray-100 rounded-2xl p-8 flex justify-center flex-col items-center">
      {children}
    </div>
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
          <NavigatorItemContainer>
            <TreesIcon />

            <p>{t("the.evbox")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer>
            <BookIcon />

            <p>{t("navigator:the.feed")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer>
            <CatIcon />

            <p>{t("navigator:le.chat")}</p>
          </NavigatorItemContainer>
          <NavigatorItemContainer>
            <ReceiptEuro />

            <p>{t("navigator:paper.trail")}</p>
          </NavigatorItemContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
