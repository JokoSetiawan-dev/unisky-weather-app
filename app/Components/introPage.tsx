import React from 'react'
import Image from 'next/image'
import uniskyLogo from "@/public/unisky-logo.svg"
import loading from "@/public/loading.gif"

export default function introPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-[#81ACDA]'>
      <Image className='ml-2' src={uniskyLogo} alt="Humidity Image" />
      <Image className='w-[50px] h-auto' src={loading} alt="loading Image" unoptimized />
    </div>
  )
}
