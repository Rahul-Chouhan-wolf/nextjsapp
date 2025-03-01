// app/page.js
'use client' // Mark as client component
import NameGenerator from './components/NameGenerator'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen flex-col space-y-4'>
      <h1 className='text-center'>Random Name Generator</h1>
      <NameGenerator />
    </div>
  )
}