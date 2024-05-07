import React from 'react'
import Image from 'next/image'
import sunriseIcon from "../../public/sunrise-icon.png"
import sunsetIcon from "../../public/sunset-icon.png"

export default function SunriseSet() {
  return (
    <div className='flex w-[185.2px] h-[110px] justify-around bg-white rounded-3xl shadow-lg'>
      <div className='flex flex-col items-center justify-center'>
        <Image src={sunriseIcon} alt='sunrise icon'/>
        <h1 className='font-bold mt-2'>Sunrise</h1>
        <p className='text-sm'>06:00</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Image src={sunsetIcon} alt='sunrise icon'/>
        <h1 className='font-bold mt-2'>Sunset</h1>
        <p className='text-sm'>18:00</p>
      </div>
    </div>
  )
}
