"use client";

import { BookIcon, CatIcon, ReceiptEuro, TreesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Navigator() {
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
              Press <span className="font-bold">V</span> to load this menu from
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
      </DialogContent>
    </Dialog>
  );
}
