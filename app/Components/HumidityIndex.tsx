import React from 'react'
import humidityImage from "../../public/humidity-inage.png"
import Image from 'next/image'

export default function HumidityIndex() {
  return (
    <div className="relative w-[170px] h-[170px]">
      <Image src={humidityImage} alt="Humidity Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-[4.7rem]">
        <h1 className='text-white font-extrabold text-sm'>Humidity</h1>
        <p className='text-white text-xs'>50%</p>
      </div>
    </div>
  )
}
