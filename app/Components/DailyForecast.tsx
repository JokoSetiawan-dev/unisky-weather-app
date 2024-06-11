"use client"
import React from 'react'
import Image from 'next/image'
import clearWeather from "@/public/clear-day.png"


export default function DailyForecast() {
  return (
    <div className='m-5'>
      <div className='flex flex-col justify-center h-[90px] w-full shadow-md rounded-3xl'>
        <div className='flex text-xs justify-around mx-3'>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
            <div className='flex flex-col items-center gap-1 font-bold'>
                <p>12:00</p>
                <Image className='w-[27px] h-auto' src={clearWeather} alt='weather icon'/>
                <p>35°</p>
            </div>
        </div>
      </div>
    </div>
  )
}
