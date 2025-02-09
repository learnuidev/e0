/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Extend the DefaultSession interface to include custom properties
interface CustomSession extends DefaultSession {
  accessToken?: string;
  user: any;
  sub?: string;
}

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/gmail.readonly",
          access_type: "offline", // Ensures refresh token is returned (if needed)
          prompt: "consent", // Forces consent screen to ensure token freshness
        },
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },

    async jwt(props) {
      const { token, user, account } = props;

      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      console.log("JWT TOKENS", token);
      return token;
    },

    async session(props: any) {
      const { session, token } = props;

      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.sub = token.sub;

      console.log("SESSION TOKEN", session);
      return session as CustomSession;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
