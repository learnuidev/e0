import { gmailClient } from "./gmail-client";

export const sendEmail =
  (token: string) =>
  async ({
    recipient,
    sender,
    subject,
    body,
  }: {
    recipient: string;
    sender: string;
    subject: string;
    body: string;
  }) => {
    const gmail = gmailClient(token);

    const message = {
      raw: Buffer.from(
        `From: "Sender Name" <${sender}>\r\n` +
          `To: ${recipient}\r\n` +
          `Subject: ${subject}\r\n\r\n` +
          `${body}`
      )
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, ""),
    };

    try {
      const res = await gmail.users.messages.send({
        userId: "me",
        requestBody: message,
      });
      console.log("Email sent:", res.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
