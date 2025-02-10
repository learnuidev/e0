/* eslint-disable @typescript-eslint/no-unused-vars */
import { listEmails } from "@/libs/gmail/list-emails";
import { headers } from "next/headers";

export async function GET(req: Request) {
  const headersList = await headers();

  const authToken = headersList.get("authorization") || "";

  try {
    const emails = await listEmails(authToken);

    return Response.json(emails);
  } catch (err) {
    // return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw err;
  }
}
