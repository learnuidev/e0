/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Extend the DefaultSession interface to include custom properties
interface CustomSession extends DefaultSession {
  accessToken?: string;
}

const options: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GMAIL_CLIENT_ID || "",
      clientSecret: process.env.GMAIL_CLIENT_SECRET || "",
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/gmail.readonly",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("REDIRECT", { url, baseUrl });
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

      // console.log("TOKEN", token);

      return token;
      // return {
      //   accessToken: account?.access_token,
      // };
    },

    session: async ({ session, token, user }: any) => {
      console.log("USER", user);
      // const { session, token } = props;
      // console.log("UPDATE SESSION", props);
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      session.sub = token.sub;
      return session as CustomSession;
    },

    // async jwt({ token, account }: any) {
    //   if (account && account.access_token) {
    //     token.accessToken = account.access_token;
    //   }

    //   return token;
    // },

    // async session(props: any) {
    //   console.log("SESSION PROPS");
    //   const { session, token } = props;
    //   console.log("TOKEN YOO", token);
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken;

    //   return session as CustomSession;
    // },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
