"use client"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react'
import humidityImage from "../../public/humidity-inage.png"
import Image from 'next/image'
import { useGlobalContext } from '../context/globalContext'

export default function HumidityIndex() {

  const {forecast} = useGlobalContext()

  const { main} = forecast

  const humidityPersentage = main?.humidity

  return (
    <div className="relative w-[190px] h-[190px]">
      <Image src={humidityImage} alt="Humidity Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-[4.7rem]">
        <h1 className='text-white font-extrabold text-sm'>Humidity</h1>
        <p className='text-white text-xs'>{humidityPersentage}%</p>
      </div>
    </div>
  )
}
