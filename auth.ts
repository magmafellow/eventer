import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
// import type { User } from '@/app/lib/definitions'
import bcrypt from 'bcrypt'
import { pool } from '@/database.mjs'

async function getUserByEmail(email: string): Promise<any | undefined> {
  try {
    const user = await pool.query(`SELECT * FROM person WHERE email=$1`, [
      email,
    ])
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch person:', error)
    throw new Error('Failed to fetch person.')
  }
}

async function getUserById(id: string): Promise<any | undefined> {
  try {
    const user = await pool.query(`SELECT * FROM person WHERE id=$1`, [id])
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch person:', error)
    throw new Error('Failed to fetch person.')
  }
}

async function getUserByPseudonim(pseudonim: string): Promise<any | undefined> {
  try {
    const users = await pool.query(`SELECT * FROM person WHERE pseudonim=$1`, [
      pseudonim,
    ])
    return users.rows[0]
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ pseudonim: z.string().min(3), password: z.string().min(4) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { pseudonim, password } = parsedCredentials.data
          const user = await getUserByPseudonim(pseudonim)
          if (!user) return null
          // const passwordsMatch = await bcrypt.compare(password, user.password)
          const passwordsMatch = password === user.password

          console.log(user)
          if (passwordsMatch) return user
        }

        console.log('Invalid Credentials')
        return null
      },
    }),
  ],
})
