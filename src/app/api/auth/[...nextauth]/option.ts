import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PostUser, GetUserBy } from "@/app/lib/firebase/users";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;
        const response = await fetch(`${process.env.HOSTNAME_P1}/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const { status, data }: any = await response.json();
        console.log("response option status:", status);
        if (status) {
          return data;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (user != undefined && "id" in user) {
        token.id = user.id;
      }
      if (user != undefined && "name" in user) {
        token.fullname = user.name;
      }
      if (user != undefined && "email" in user) {
        token.email = user.email;
      }
      if (user != undefined && "role" in user) {
        token.role = user.role;
      }
      if (account != undefined && "provider" in account) {
        token.provider = account.provider;
      }
      if (account && account.provider == "google") {
        const { status, data } = await GetUserBy({ email: token.email });
        if (!status) {
          const response = await PostUser({
            email: token.email,
            fullname: token.fullname,
            role: "user",
            verified: true,
          });
          if (response.status) {
            const { status, data } = await GetUserBy({ email: token.email });
            if (status) {
              token.id = data.id;
              token.fullname = data.fullname;
              token.role = data.role;
            }
          }
        } else {
          token.id = data.id;
          token.fullname = data.fullname;
          token.role = data.role;
        }
      }
      return token;
    },
    async session({ session, user, token }: any) {
      if (token != undefined && "id" in token) {
        session.user.id = token.id;
      }
      if (token != undefined && "fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if (token != undefined && "email" in token) {
        session.user.email = token.email;
      }
      if (token != undefined && "role" in token) {
        session.user.role = token.role;
      }
      if (token != undefined && "provider" in token) {
        session.user.provider = token.provider;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default authOptions;
