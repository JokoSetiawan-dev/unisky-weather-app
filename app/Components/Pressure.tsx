import React from 'react'

export default function Pressure() {
  return (
    <div className='h-[110px] w-[130px] px-3 flex flex-col justify-center items-center gap-2 shadow-lg rounded-3xl'>
      <h1 className='text-sm'>Pressure</h1>
      <p className='f font-extrabold'>1033 hpa</p>
      <p className='text-[8px] text-center'>High pressure, expect weather changes</p>
    </div>
  )
}
