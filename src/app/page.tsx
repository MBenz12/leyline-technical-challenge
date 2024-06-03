'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!username) {
      toast.error('Username cannot be blank')
      return
    }

    router.push(`/${username}`)
  }

  return (
    <div className='container'>
      <form
        className='mx-auto mt-20 flex w-full max-w-sm flex-col'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold text-red-600'>
          LeyLine Technical Challenge
        </h1>
        <input
          type='text'
          className='mt-8 w-full rounded border border-gray-500 p-2 text-sm'
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className='mt-2 w-full rounded bg-purple-600 p-2 text-sm text-white'>
          Submit
        </button>
      </form>
    </div>
  )
}
