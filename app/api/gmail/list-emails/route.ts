/* eslint-disable @typescript-eslint/no-unused-vars */
import { listEmails } from "@/libs/gmail/gmail-client";
import { headers } from "next/headers";

export async function GET(req: Request) {
  const headersList = await headers();

  const authToken = headersList.get("authorization") || "";

  console.log("TOKEN", authToken);
  try {
    const customTranslations = await listEmails(authToken);

    return Response.json(customTranslations);
  } catch (err) {
    return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw new Error(process.env.NODE_ENV);
  }
}
