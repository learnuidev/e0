/* eslint-disable @typescript-eslint/no-unused-vars */
import { listEmails } from "@/libs/gmail/list-emails";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = await headers();

  const { pageToken } = await req.json();

  const authToken = headersList.get("authorization") || "";

  try {
    const emails = await listEmails(authToken, pageToken);

    return Response.json(emails);
  } catch (err) {
    // return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw err;
  }
}
