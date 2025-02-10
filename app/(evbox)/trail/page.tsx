/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MessageCircleIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/libs/i18n-next/use-translation";

// import { EvItem } from "./components/ev-item";
// import { Navbar } from "./components/navbar";
// import { mailList } from "./modules/mail/mail.constants";
import { useListEmailsQuery } from "@/libs/gmail/queries/use-list-emails-query";
import { Navbar } from "../evbox/components/navbar";
import { EvContainer } from "../evbox/components/ev-container";
import { mailList } from "../evbox/modules/mail/mail.constants";
import { EvItem } from "../evbox/components/ev-item";
import { Mail } from "../evbox/modules/mail/mail.types";
// import { Mail } from "./modules/mail/mail.types";
// import { EvContainer } from "./components/ev-container";

export default function MailPage() {
  const { t } = useTranslation("inbox");

  const { data } = useListEmailsQuery({ q: "has:attachment" });

  console.log("data", data);

  return (
    <div className="relative">
      <Navbar />

      <EvContainer>
        <div className="flex w-full justify-between items-center mb-12">
          <h1 className="text-center text-3xl font-bold">{t("the.evbox")}</h1>
          <div className="space-x-4">
            <Button className="rounded-full" variant="ghost">
              <PlusIcon />

              <p>{t("write")}</p>
            </Button>

            <Button className="rounded-full">
              <MessageCircleIcon />

              <p>{t("chat")}</p>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
            {t("new.evbox")}
          </h2>
          <Button
            variant="ghost"
            className="text-purple-400 text-sm hover:text-purple-300 rounded-full"
          >
            {t("power.through.new")}
          </Button>
        </div>

        <div className="sm:px-4 px-0">
          <section>
            <div className="mt-8 grid gap-4">
              {data?.emails?.map((mail: any) => {
                return <EvItem key={mail.id} mail={mail as Mail} />;
              })}

              {/* {mailList.map((mail) => {
                return <EvItem key={mail.id} mail={mail} />;
              })} */}
            </div>
          </section>
        </div>

        <hr className="my-12" />
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              {t("recently.seen")}
            </h2>
          </div>

          <div className="sm:px-4 px-0">
            <div className="mt-8 grid gap-4">
              {mailList.map((mail) => {
                return <EvItem key={mail.id} mail={mail} />;
              })}
            </div>
          </div>
        </section>
      </EvContainer>
    </div>
  );
}
