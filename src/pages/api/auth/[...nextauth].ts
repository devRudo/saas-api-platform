import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../../../../prisma/prisma";

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: String(process.env.DISCORD_CLIENT_ID),
      clientSecret: String(process.env.DISCORD_CLIENT_SECRET),
    }),
  ],
  debug: true,
  logger: {
    error(code: any, metadata: any) {
      console.error("[NextAuth ERROR]", code, metadata);
    },
    warn(code: any) {
      console.warn("[NextAuth WARN]", code);
    },
    debug(code: any, metadata: any) {
      console.log("[NextAuth DEBUG]", code, metadata);
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      console.log("[signIn Callback] User:", user);
      console.log("[signIn Callback] Account:", account);
      console.log("[signIn Callback] Profile:", profile);
      return true;
    },
    async session({ session, user, token }: any) {
      console.log("[session Callback] Session:", session, "User:", user);
      return session;
    },
  },
};

export default NextAuth(authOptions);
