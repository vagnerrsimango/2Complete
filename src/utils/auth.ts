import NextAuth from 'next-auth'
import Github from '@auth/core/providers/github'
import Google from '@auth/core/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from './db'


export const {auth,handlers:{GET,POST},signIn,signOut}=NextAuth({
    providers: [Github({
        clientId:"9b2e50166a21d930eb10",
        clientSecret:"1bfb624596f9a058c97c8827131ea770d39f8bed"
    }), Google({
        clientId:"379171637968-mjtlbol9c5dg4i3pgkko2dvm9qcbibp4.apps.googleusercontent.com",
        clientSecret:"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"
    })],
    
    adapter:PrismaAdapter(db),

    callbacks : {
        async session({ session, user }: any) {
            // Usually not needed, here we are fixing a bug in nextauth
            if (session && user) {
              // Id is not assigned to the session propely
              session.user.id = user.id;
            }
            return session;
        }
    }
})