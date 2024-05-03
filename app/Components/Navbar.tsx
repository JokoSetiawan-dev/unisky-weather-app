"use client"
import React from 'react'
import uniskyLogo from "../../public/unisky-logo.svg"
import searchIcon from "../../public/search.svg"
import Image from 'next/image'

function Navbar() {
  return (
    <>
      <div className='z-10 w-full top-0'>
      <div className='flex items-center top-0 bg-[#81ACDA] w-full h-[72px]'>
        <div className='flex flex-row items-center justify-between w-full px-5'>
          <Image className='w-[82px] h-auto' src={uniskyLogo} alt='unisky logo'/> 
          <Image className='w-[28px] h-auto' src={searchIcon} alt='search icon'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
