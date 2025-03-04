'use client'
import React, { useState, useEffect } from 'react'
import './clock.css'
import { Button } from '@/components/ui/button'
import { ThickArrowLeftIcon } from '@radix-ui/react-icons'

const Clock = () => {
  const [clientTime, setClientTime] = useState(new Date())

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setClientTime(new Date())
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(timer)
  }, [])

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0')

  const hours = formatTimeUnit(clientTime.getHours())
  const minutes = formatTimeUnit(clientTime.getMinutes())
  const seconds = formatTimeUnit(clientTime.getSeconds())

  return (
    <div className='bg-black'><div className="w-full bg-black text-white py-2" >
      <Button onClick={() => window.location.href = '/'}><ThickArrowLeftIcon/></Button></div>
    <div className="bg-black flex flex-col items-center h-screen justify-center">
      <h1 className="text-5xl font-bold mb-4 text-white">Clock</h1>
			<div className='flex justify-center items-center space-x-2 text-4xl'>
        <div aria-label='hours' className='hours'>
            {hours}
        </div>
        <div className='colon'>:</div>
        <div aria-label='minutes' className='minutes'>
            {minutes}
        </div>
        <div className='colon'>:</div>
        <div aria-label='seconds' className='seconds'>
            {seconds}
        </div>
			</div>
    </div>
    </div>
  )
}

export default Clock