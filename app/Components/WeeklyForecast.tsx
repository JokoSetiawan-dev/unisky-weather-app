import React from 'react'
import Image from 'next/image'
import arrowUp from "../../public/arrow-up.png"
import arrowDown from "../../public/arrow-down.png"
import clearWeather from "../../public/clear-weather-icon.png"

export default function WeeklyForecast() {
  return (
    <div className='w-full px-5'>
      <div className='flex flex-col px-5 py-6 shadow-lg rounded-3xl h-[300px] gap-6'>
        <div>
            <h1 className='text-xs font-bold'>5 Days Forecast for Pekanbaru</h1>
        </div>
        <div className='text-xs flex flex-col gap-6'>
            <div className='font-bold flex justify-between'>
                <p>Saturday</p>
                <Image src={clearWeather} alt=''/>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowUp} alt=''/>
                    <p>35°</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowDown} alt=''/>
                    <p>26°</p>
                </div>
            </div>
            <div className='font-bold flex justify-between'>
                <p>Saturday</p>
                <Image src={clearWeather} alt=''/>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowUp} alt=''/>
                    <p>35°</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowDown} alt=''/>
                    <p>26°</p>
                </div>
            </div>
            <div className='font-bold flex justify-between'>
                <p>Saturday</p>
                <Image src={clearWeather} alt=''/>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowUp} alt=''/>
                    <p>35°</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowDown} alt=''/>
                    <p>26°</p>
                </div>
            </div>
            <div className='font-bold flex justify-between'>
                <p>Saturday</p>
                <Image src={clearWeather} alt=''/>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowUp} alt=''/>
                    <p>35°</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowDown} alt=''/>
                    <p>26°</p>
                </div>
            </div>
            <div className='font-bold flex justify-between'>
                <p>Saturday</p>
                <Image src={clearWeather} alt=''/>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowUp} alt=''/>
                    <p>35°</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src={arrowDown} alt=''/>
                    <p>26°</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
