/* eslint-disable @typescript-eslint/no-unused-vars */
import { listEmails } from "@/libs/gmail/list-emails";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = await headers();

  const params = await req.json();

  const pageToken = params?.pageToken || "";
  const q = params?.q || "";

  const authToken = headersList.get("authorization") || "";

  try {
    const emails = await listEmails({ accessToken: authToken, pageToken, q });

    return Response.json(emails);
  } catch (err) {
    // return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw err;
  }
}
