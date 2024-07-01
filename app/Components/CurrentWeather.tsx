"use client"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useGlobalContext } from '../context/globalContext'
import { kelvinToCelsius, toProperCase } from '../utils/misc'
import {
  broken,
  dayClear,
  dayRain,
  drizzleCond,
  fewCloudDay,
  fewCloudNight,
  nightClear,
  nightRain,
  scattered,
  thunder,
} from '../utils/weatherIcon'
import elipse from "@/public/elipse.png"

export default function CurrentWeather() {
  const { forecast } = useGlobalContext()

  if (!forecast || !forecast.weather) {
    return <div>Loading...</div>
  }

  const { main, name, weather } = forecast
  const { main: weatherMain, description } = weather[0]

  const temp = kelvinToCelsius(main?.temp)
  const minTemp = kelvinToCelsius(main?.temp_min)
  const maxTemp = kelvinToCelsius(main?.temp_max)

  const [localTime, setLocalTime] = useState(true)
  const [dayName, setDayName] = useState("")
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState("")
  const [year, setYear] = useState(0)

  useEffect(() => {
    const determineDayOrNight = () => {
      const date = new Date()
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const dayName = days[date.getDay()]

      const day = date.getDate()

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      const monthName = months[date.getMonth()]

      const year = date.getFullYear()
      const hours = date.getHours()
      const dayTime = hours >= 6 && hours < 18

      setLocalTime(dayTime)
      setDayName(dayName)
      setDay(day)
      setMonth(monthName)
      setYear(year)
    }

    determineDayOrNight()

    const intervalId = setInterval(determineDayOrNight, 60000)

    return () => clearInterval(intervalId)
  }, [])

  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleCond
      case "Clear":
        return localTime ? dayClear : nightClear
      case "Clouds":
        if (description === "few clouds") {
          return localTime ? fewCloudDay : fewCloudNight
        } else if (description === "scattered clouds") {
          return scattered
        } else if (description === "broken clouds" || description === "overcast clouds") {
          return broken
        }
        break
      case "Rain":
        return localTime ? dayRain : nightRain
      case "Thunderstorm":
        return thunder
      default:
        return drizzleCond
    }
  }

  const formattedDescription = toProperCase(description)
  const weatherIcon = getIcon()

  const backgroundColor = localTime ? '#81ACDA' : '#322660'

  return (
    <div className='h-[497.6px] w-full px-5 relative' style={{ backgroundColor }}>
      <Image className='absolute inset-0 z-0 w-full mt-3 opacity-80 h-auto' src={elipse} alt="" />
      <div className='flex flex-col h-full justify-between py-3'>
        <div className='pt-5'>
          <p className='font-bold text-white text-base'>{name}</p>
          <p className='text-[12px] text-white'>{dayName}, {day} {month} {year}</p>
        </div>
        <div className='flex justify-center items-center'>
          <Image className='items-center' src={weatherIcon ?? ""} alt={`Weather Condition ${weatherMain}`} />
        </div>
        <div className='flex justify-between items-center px-3'>
          <h1 className='text-[80px] font-bold text-white'>{temp}°</h1>
          <div className='flex flex-col justify-end items-end text-white'>
            <p className='font-bold text-[18px]'>{formattedDescription}</p>
            <p className='text-[12px]'>Low: {minTemp}°  High: {maxTemp}°</p>
          </div>
        </div>
      </div>
    </div>
  )
}
