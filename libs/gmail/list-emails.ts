/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { gmailClient } from "./gmail-client";
import { formatEmail } from "./utils/format-email";

const blackList = [
  "notifications@vercel.com",
  "workspacesupport@google.com",
  "team@elevenlabs.io",
  "news@sfmc.edx.org",
  "support@npmjs.com",
  // "receipts@vercel.com",
  "support@hey.com",
  "transat@mst.transatmemberservice.com",
  "flighthub@email.myflighthub.com",
  // "learnuidev@gmail.com",
  "composer@composer.trade",
  "info@talkpal.ai",
  "communications@mail.aircanada.com",
  "on@substack.com",
  "bram@baserow.io",
  // "jlook@notairelevy.com",
  "noreply@github.com",
  "vicbarryvlogs@227156446.mailchimpapp.com",
  "noreply@youtube.com",
  "hi@lovable.dev",
  "hello@skillshare.com",
  "systems@clerk.com",
  "teachable@news.teachable.com",
  "ant@supabase.com",
  "hello@theinformation.com",
  "contact@serverless.com",
  "noreply@lovable.dev",
  "pragmaticengineer@substack.com",
  "rotem@tavily.com",
  "pontus@emails.languine.ai",
  "subscalesaasguy@substack.com",
  "ship@info.vercel.com",
  "CloudPlatform-noreply@google.com",
  "pragmaticengineer+deepdives@substack.com",
  "learnuidev@substack.com",
  "no-reply@substack.com",
  "email@e.email-td.com",
  "viarail@message.viarail.ca",
  "cloud@qdrant.io",
  // "team@aliabdaal.com",
  "product-updates@poe.com",
  "support@codepen.io",
  "info@imlearningmandarin.com",
  "team@mail.perplexity.ai",
  "community@pinecone.io",
  "payments-noreply@google.com",
  "news@email.wolfram.com",
  "budgets@costalerts.amazonaws.com",
  "noreply@email.openai.com",
  "no-reply@verificationemail.com",
  "marketing@engage.canva.com",
  "hello@emails.languine.ai",
  "mail@convex.dev",
  "no-reply@accounts.google.com",
  "zeno@updates.resend.com",
  "info@407etr.com",
  "info@mail.surfshark.com",
  // "catch@payments.interac.ca",
  // "noreply-onlineaccess@td.com",
  // "noreply@td.com",
  // "sheldon.ho@thecmblueprint.com",
  "marketing@sourcegraph.com",
  "on+resources@substack.com",
  "retourdequipment@retoursdeservicesresidentielsbell.ca",
  "hello@linglingmandarin.com",
  // "invoice+statements@vercel.com",
  "hello@e.italki.com",
  "support@migaku.io",
  "welcome@frontendmentor.io",
  "olivier@baserow.io",
  "hello@pluralsightmail.com",
  "info@lumigo.io",
  // "syndicat.4280.bernardhubert@gmail.com",
  "hello@producthunt.com",
];

export const listEmails = async ({
  accessToken,
  pageToken,
  q,
}: {
  accessToken: string;
  pageToken?: string;
  q?: string;
}) => {
  const gmail = gmailClient(accessToken);

  const res = await gmail.users.messages.list({
    pageToken,
    // pageToken: "14692445521064012795",
    // pageToken: "13577725452329016039",
    userId: "me",
    // q: "-from:support@npmjs.com -from:notifications@vercel.com",
    maxResults: 200, // Adjust as needed
    q,
  });

  console.log("res", res);

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

  return {
    nextPageToken: res.data.nextPageToken,
    emails: emailDetails
      ?.map((emailDetail: any) => {
        return formatEmail(emailDetail);
      })
      ?.filter((item: any) => {
        // return true;
        return !blackList?.includes(item?.from?.email);
      }),
  };
};
