"use client";

import { useGetEmailQuery } from "@/libs/gmail/queries/use-get-email-query";
import { EvboxItemNavbar } from "./components/evbox-item-navbar";
import { useGetEmailId } from "./hooks/use-get-email-id";
import { EvContainer } from "../components/ev-container";
import { Loading } from "@/components/loading";

export default function EmailItem() {
  const emailId = useGetEmailId();
  const { data, isLoading } = useGetEmailQuery(emailId);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="relative">
      <EvboxItemNavbar />

      <div className="mt-36 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold max-w-5xl text-center">
          {data?.title}
        </h1>
      </div>

      <EvContainer className="mt-8">
        <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
        {/* <code>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </code> */}
      </EvContainer>
    </div>
  );
}
