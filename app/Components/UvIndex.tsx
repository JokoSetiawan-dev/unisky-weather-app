import React from 'react'
import Image from 'next/image'
import uvImage from "../../public/uv-image.png"

export default function UvIndex() {
  return (
    <div className="relative w-[170px] h-[170px]">
      <Image src={uvImage} alt="UV Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center mt-[4.7rem]">
        <h1 className='text-white font-extrabold text-sm'>Uv Index</h1>
        <p className='text-white text-xs'>Moderate</p>
      </div>
    </div>
  )
}
