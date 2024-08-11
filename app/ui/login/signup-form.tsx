'use client'

import { signup } from '@/app/lib/actions'
import { useActionState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

export default function SignupForm() {
  const [message, formAction, isPending] = useActionState(
    signup,
    undefined
  )

  return (
    <div className='flex gap-x-20'>
      <form action={formAction}>
        <div>
          <div>
            <label htmlFor="pseudonim" className="text-slate-300">
              pseudonim
            </label>
          </div>
          <div className="mb-3">
            <input
              className="rounded py-0.5 px-2 bg-[#202020]"
              type="text"
              id="pseudonim"
              name="pseudonim"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-slate-300">
              password
            </label>
          </div>
          <div className="mb-3">
            <input
              className="rounded py-0.5 px-2 bg-[#202020]"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="pl-2">
            <button className="inline-flex jusitfy-center items-center py-1 px-2 rounded-lg bg-green-700 gap-2">
              signup
              <MdArrowForwardIos className="text-lg" />
            </button>
          </div>
        </div>
      </form>
      <div>
        { message?.message && <p className='text-green-400 mb-4'>{message.message}</p>}
        { message?.error?.credentials && <p className='text-red-500 mb-4'>{message.error.credentials}</p>}
        { message?.error?.pseudonimIsTaken && <p className='text-red-500 mb-4'>{message.error.pseudonimIsTaken}</p>}
      </div>
    </div>
  )
}
