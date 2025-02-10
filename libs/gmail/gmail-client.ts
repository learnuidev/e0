/* eslint-disable @typescript-eslint/ban-ts-comment */
import { google } from "googleapis";

export const gmailClient = (accessToken: string) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: "v1", auth });

  return gmail;
};
