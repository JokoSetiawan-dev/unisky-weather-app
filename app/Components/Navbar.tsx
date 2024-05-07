"use client"
import React from 'react'
import uniskyLogo from "../../public/unisky-logo.svg"
import searchIcon from "../../public/search.svg"
import Image from 'next/image'
import locationIcon from "../../public/location-icon.svg"
import Search from './Ui/Search'

function Navbar() {
  return (
    <>
      <div className='z-10 w-full top-0'>
      <div className='flex items-center top-0 bg-[#81ACDA] w-full h-[72px]'>
        <div className='flex flex-row items-center justify-between w-full px-5'>
          <Image className='w-[82px] h-auto' src={uniskyLogo} alt='unisky logo'/> 
          <Search/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
