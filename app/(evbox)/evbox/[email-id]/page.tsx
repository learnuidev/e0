"use client";

import { useGetEmailQuery } from "@/libs/gmail/queries/use-get-email-query";
import { EvboxItemNavbar } from "./components/evbox-item-navbar";
import { useGetEmailId } from "./hooks/use-get-email-id";

export default function EmailItem() {
  const emailId = useGetEmailId();
  const { data } = useGetEmailQuery(emailId);
  return (
    <div className="relative">
      <EvboxItemNavbar />
      TODO
      <div>
        <code>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
}
