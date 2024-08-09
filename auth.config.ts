import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {},
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      if (isLoggedIn) return true
      else if (nextUrl.pathname === '/login') {
        return true
      }
      else {
        console.log('proteced in auth.config.ts')
        return Response.redirect(new URL('/login', nextUrl))
      }
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
