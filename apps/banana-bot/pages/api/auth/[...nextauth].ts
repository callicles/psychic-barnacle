import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { Client as FaunaClient } from "faunadb";
import { FaunaAdapter } from "@next-auth/fauna-adapter";

const client = new FaunaClient({
  secret: process.env.FAUNA_SECRET || "",
  scheme: "https",
  domain: "db.us.fauna.com",
});

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID || "",
      clientSecret: process.env.DISCORD_SECRET || "",
    }),
    // ...add more providers here
  ],
  adapter: FaunaAdapter(client),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn =
        !!user.id && (profile.email?.endsWith("nicolasjoseph.com") || false);
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
