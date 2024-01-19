import { NextAuthOptions } from "next-auth";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import GoogleProvider from "next-auth/providers/google"


function getGoogleCredentials() {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET


    if(!clientId || clientId.length === 0) {
        throw new Error("missing GOOGLE_CLIENT_ID")
    }

    if(!clientSecret || clientSecret.length === 0) {
        throw new Error("missing GOOGLE_CLIENT_ID")
    }

    return {clientId, clientSecret}
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        })
    ],
    callbacks: {
        redirect() {
            return "/"
        }
    }
}