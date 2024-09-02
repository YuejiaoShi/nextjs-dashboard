import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
} satisfies NextAuthConfig;
