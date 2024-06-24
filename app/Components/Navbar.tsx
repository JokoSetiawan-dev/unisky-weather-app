"use client"
import React, { useEffect, useState } from 'react'
import uniskyLogo from "../../public/unisky-logo.svg"
import Image from 'next/image'
import Search from './Ui/Search'

function Navbar() {
  const [isDayTime, setIsDayTime] = useState(true)

  useEffect(() => {
    const determineDayOrNight = () => {
      const hours = new Date().getHours()
      const dayTime = hours >= 6 && hours < 18
      setIsDayTime(dayTime)
    }

    determineDayOrNight()

    const intervalId = setInterval(determineDayOrNight, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const backgroundColor = isDayTime ? '#81ACDA' : '#322660'

  return (
    <div className='z-10 w-full top-0' style={{ backgroundColor }}>
      <div className='flex items-center top-0 w-full h-[72px]'>
        <div className='flex flex-row items-center justify-between w-full px-5'>
          <Image className='w-[82px] h-auto' src={uniskyLogo} alt='unisky logo'/> 
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
