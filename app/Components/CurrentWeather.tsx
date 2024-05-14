"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/globalContext'
import { kelvinToCelsius } from '../utils/misc'
import { broken, dayClear, drizzleCond, fewCloudDay, fewCloudNight, nightClear, scattered } from '../utils/weatherIcon'

export default function CurrentWeather() {

  const {forecast} = useGlobalContext()

  const {main, timezone, name, weather} = forecast

  if (!forecast || !weather) {
    return <div>Loading...</div>
  }

  const temp = kelvinToCelsius(main?.temp)
  const minTemp = kelvinToCelsius(main?.temp_min)
  const maxTemp = kelvinToCelsius(main?.temp_max)

  const [localTime, setLocalTime] = useState(true)
  const [currentDate, setCurrentDate] = useState<string>("")

  useEffect(() => {
    const determineDayOrNight = () => {
      const now = new Date();
      const hours = now.getHours();
      const dayTime = hours >= 6 && hours < 18; 
      setLocalTime(dayTime);
    };

    determineDayOrNight();

    const intervalId = setInterval(determineDayOrNight, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const {main: weatherMain, description} = weather[0]

  const getIcon = () => {
    switch (weatherMain) {
        case "Drizzle":
            return drizzleCond;
        case "Clear":
            return localTime ? dayClear : nightClear;
        case "Clouds":
            if (description === "few clouds") {
                return localTime ? fewCloudDay : fewCloudNight;
            } else if (description === "scattered clouds") {
                return scattered;
            } else if (description === "broken clouds" || description === "overcast clouds") {
                return broken;
            }
        
    }
};


  return (
    <div className='relative bg-[#81ACDA] h-[497.6px] w-full px-5'>
      <div className='flex flex-col h-full justify-between py-3'>
        <div className='pt-5'>
            <p className='font-bold text-white text-base'>Pekanbaru</p>
            <p className='text-[12px] text-white'>Friday, 3 May 2024</p>
        </div>
        <div>
            {/* <Image className='absolute top-0 left-0 px-5 mt-16' src={drizzleCond} alt='Weather Condition Clear'/> */}
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
