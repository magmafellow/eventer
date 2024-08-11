'use server'

import { signIn, signOut } from '@/auth'
import { pool } from '@/database.mjs'
import { AuthError } from 'next-auth'
import { z } from 'zod'

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

export async function signup(
  prevState:
    | { message: string }
    | { error: { pseudonimIsTaken: string } }
    | { error: { credentials: string } }
    | undefined,
  formData: FormData
) {
  const formObj = {
    pseudonim: formData.get('pseudonim'),
    password: formData.get('password'),
  }
  const parsedData = z
    .object({
      pseudonim: z.string().min(3),
      password: z.string().min(4),
    })
    .safeParse(formObj)

  if (parsedData.success) {
    const { pseudonim, password } = parsedData.data
    const isPseudonimAvailable = await pseudonimIsAvailable(pseudonim)
    if (isPseudonimAvailable) {
      const r = await createPerson(pseudonim, password)
      return {
        message: 'Success! You are ready to go',
      }
    } else {
      return {
        error: {
          pseudonimIsTaken: 'The pseudonim you provided is already taken.',
        },
      }
    }
  } else {
    return {
      error: {
        credentials: 'Provided credentials has not passed checks.',
      },
    }
  }
}

export async function createPerson(pseudonim: string, password: string) {
  try {
    const r = await pool.query(
      'INSERT INTO person (pseudonim, password) VALUES ($1, $2)',
      [pseudonim, password]
    )
  } catch (error) {
    console.log('Failed to create person')
  }
}

export async function pseudonimIsAvailable(pseudonim: string) {
  try {
    const r = await pool.query(
      'SELECT pseudonim FROM person WHERE pseudonim=$1',
      [pseudonim]
    )
    if (r.rows.length > 1) {
      console.log('There are duplicate pseudonims!\nFatal. Must be fixed')
      return false
    } else if (r.rows.length === 1) {
      return false
    } else if (r.rows.length === 0) {
      return true
    }
  } catch (error) {
    console.log('Failed to check pseudonimIsAvailable')
    console.log(error)
  }
  return false
}


export async function logout(){
  await signOut()
  
}
