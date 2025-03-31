// app/page.js
'use client'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen flex-col space-y-4'>
      <Button onClick={() => window.location.href = '/components/namegenerator'}>Generate Random Names</Button>
      <Button onClick={() => window.location.href = '/components/clock'}>Clock</Button>
      <Button onClick={() => window.location.href = '/components/user/login'}>Premium Features</Button>
      <Button onClick={() => window.location.href = '/components/portfolio'}>Portfolio</Button>
    </div>
  )
}