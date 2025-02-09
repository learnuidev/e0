"use client";

import {
  BookIcon,
  CatIcon,
  PlusIcon,
  ReceiptEuro,
  SearchIcon,
  TreesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "@/libs/i18n-next/use-translation";

function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-3xl font-bold">
          e0
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Navigator</DialogTitle>
          <DialogDescription>
            <span>
              Press <span className="font-bold">R</span> to load this menu from
              anywhere
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="dark:bg-[rgb(31,32,33)] p-8 flex justify-center flex-col items-center">
            <TreesIcon />

            <p>the inbox</p>
          </div>
          <div className="dark:bg-[rgb(31,32,33)] p-8 flex justify-center flex-col items-center">
            <BookIcon />

            <p>the feed</p>
          </div>
          <div className="dark:bg-[rgb(31,32,33)] p-8 flex justify-center flex-col items-center">
            <CatIcon />

            <p>le chat</p>
          </div>
          <div className="dark:bg-[rgb(31,32,33)] p-8 flex justify-center flex-col items-center">
            <ReceiptEuro />

            <p>paper trail</p>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-[rgb(11,12,13)] shadow-sm z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 p-4 items-center">
        {/* Left Logo */}
        <div className="relative flex items-center">
          <input
            type="text"
            className="w-full py-2 pl-4 pr-10 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Ask me anything..."
          />
          <button
            type="submit"
            className="absolute right-2 p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
          >
            <SearchIcon size={20} />
          </button>
        </div>

        <div className="flex justify-center">
          <DialogCloseButton />
        </div>

        <div className="flex justify-end">Account</div>
      </div>
    </nav>
  );
}

export default function Mail() {
  const { t } = useTranslation("inbox");
  return (
    <div className="relative">
      <Navbar />

      <main className="mt-24 p-4 dark:bg-[rgb(11,12,16)]">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-center text-2xl font-bold">{t("the.inbox")}</h1>
          <Button className="rounded-full">
            <PlusIcon />

            <p>{t("write")}</p>
          </Button>
        </div>

        <hr className="my-12" />

        <section>
          <h4 className="uppercase text-xl font-semibold">{t("new.inbox")}</h4>

          <div className="mt-8 grid gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-xl"> Getting around with the 👋e0 Menu</h5>
                <p className="text-gray-500">
                  The e0 Team - Welcome to the club
                </p>
              </div>

              <p>1:03am</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-xl"> Getting around with the 👋e0 Menu</h5>
                <p className="text-gray-500">
                  The e0 Team - Welcome to the club
                </p>
              </div>

              <p>1:03am</p>
            </div>
          </div>
        </section>

        <hr className="my-12" />
        <section>
          <h4 className="uppercase text-xl font-semibold">
            {t("recently.seen")}
          </h4>

          <div className="mt-8 grid gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-xl"> Getting around with the 👋e0 Menu</h5>
                <p className="text-gray-500">
                  The e0 Team - Welcome to the club
                </p>
              </div>

              <p>1:03am</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5 className="text-xl"> Getting around with the 👋e0 Menu</h5>
                <p className="text-gray-500">
                  The e0 Team - Welcome to the club
                </p>
              </div>

              <p>1:03am</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
