"use client"
import React from 'react'
import Image from 'next/image'
import weatherRainy from "../../public/WeatherRainyCurrent.png"

export default function CurrentWeather() {
  return (
    <div className='relative bg-[#81ACDA] h-[450px] w-full px-5'>
      <div className='flex flex-col h-full justify-between py-3'>
        <div>
            <p className='font-bold text-white text-base'>Pekanbaru</p>
            <p className='text-[12px] text-white'>Friday, 3 May 2024</p>
        </div>
        <div>
            <Image className='absolute top-0 left-0 px-5 mt-8' src={weatherRainy} alt='Weather Condition Clear'/>
        </div>
        <div className='flex justify-between items-center px-3'>
            <h1 className='text-[80px] font-bold text-white'>24°</h1>
            <div className='flex flex-col justify-end items-end text-white'>
                <p className='font-bold text-[20px]'>Rainy</p>
                <p className='text-[12px]'>Low: 20°  High: 30°</p>
            </div>
        </div>
      </div>
    </div>
  )
}
