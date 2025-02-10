/* eslint-disable @typescript-eslint/ban-ts-comment */
import { gmailClient } from "./gmail-client";

export const listEmails = async (accessToken: string) => {
  const gmail = gmailClient(accessToken);

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 1000, // Adjust as needed
  });

  const messages = res.data.messages || [];
  //   return messages;
  const emailDetails = await Promise.all(
    messages.map(async (message) => {
      // @ts-ignore
      const msg = await gmail.users.messages.get({
        userId: "me",
        id: message.id,
      });
      // @ts-ignore
      return msg.data;
    })
  );

  return emailDetails;
};
