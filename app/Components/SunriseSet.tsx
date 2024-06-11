"use client"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react'
import Image from 'next/image'
import sunriseIcon from "../../public/sunrise-icon.png"
import sunsetIcon from "../../public/sunset-icon.png"
import { useGlobalContext } from '../context/globalContext'
import { getTimeFromTimestamp } from '../utils/misc'


export default function SunriseSet() {

  const {forecast} = useGlobalContext()

  const {sys} = forecast

  console.log(sys?.sunrise)

  const sunriseTime = getTimeFromTimestamp(sys?.sunrise)
  const sunsetTime = getTimeFromTimestamp(sys?.sunset)

  return (
    <div className='flex w-[230px] h-[110px] justify-around bg-white rounded-3xl shadow-lg'>
      <div className='flex flex-row items-center gap-10'>
        <div className='flex flex-col items-center justify-center'>
          <Image src={sunriseIcon} alt='sunrise icon'/>
          <h1 className='font-bold text-sm mt-2'>Sunrise</h1>
          <p className='text-sm'>{sunriseTime}</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src={sunsetIcon} alt='sunrise icon'/>
          <h1 className='font-bold text-sm mt-2'>Sunset</h1>
          <p className='text-sm'>{sunsetTime}</p>
        </div>
      </div>
    </div>
  )
}
