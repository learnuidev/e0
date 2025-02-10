import { gmailClient } from "./gmail-client";
import { formatEmail } from "./utils/format-email";

// Initialize Gmail API client
export async function getEmailById({
  accessToken,
  messageId,
}: {
  accessToken: string;
  messageId: string;
}) {
  const gmail = gmailClient(accessToken);

  try {
    // Fetch the email by ID
    const response = await gmail.users.messages.get({
      userId: "me", // 'me' refers to the authenticated user
      id: messageId,
      format: "full", // Options: 'full', 'metadata', 'minimal', 'raw'
    });

    const message = response.data;

    // Extract details from the email

    return formatEmail(message);
  } catch (error) {
    console.error("Error fetching email:", error);
  }
}
