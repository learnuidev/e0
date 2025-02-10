/* eslint-disable @typescript-eslint/no-unused-vars */
import { getEmailById } from "@/libs/gmail/get-email-by-id";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = await headers();

  const { messageId } = await req.json();

  const accessToken = headersList.get("authorization") || "";

  try {
    const email = await getEmailById({ accessToken, messageId });

    return Response.json(email);
  } catch (err) {
    // return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw err;
  }
}
