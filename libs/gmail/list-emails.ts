/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { gmailClient } from "./gmail-client";
import { formatEmail } from "./utils/format-email";

export const listEmails = async (accessToken: string) => {
  const gmail = gmailClient(accessToken);

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 10, // Adjust as needed
  });

  const messages = res.data.messages || [];
  //   return messages;
  const emailDetails = await Promise.all(
    messages.map(async (message) => {
      // @ts-ignore
      const msg = await gmail.users.messages.get({
        userId: "me",
        id: message.id,
        q: "-from:npm <support@npmjs.com>",
      });
      // @ts-ignore
      return msg.data;
    })
  );

  return emailDetails?.map((emailDetail: any) => {
    return formatEmail(emailDetail);
  });
};
