import { betterAuth } from "better-auth";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GMAIL_CLIENT_ID as string,
      clientSecret: process.env.GMAIL_CLIENT_SECRET as string,
    },
  },
});
