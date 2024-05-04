import React from 'react'
import Image from 'next/image'
import sunriseIcon from "../../public/sunrise-icon.png"

export default function SunriseSet() {
  return (
    <div>
      <div className='flex justify-center'>
        <Image src={sunriseIcon} alt='sunrise icon'/>
        <h1 className='font-bold'>Sunrise</h1>
        <p className='text-sm'>06:00</p>
      </div>
    </div>
  )
}
