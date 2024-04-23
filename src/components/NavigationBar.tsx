"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
  return (
    <div className='w-full h-14 absolute z-10 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-80 opacity-9 text-gray-900'>
      <div className='h-full flex gap-x-6'>
        <div className='flex gap-x-3'>
          <div className='flex justify-center items-center'>
            <Image 
              src="./assets/logo1.svg"
              alt='Logo'
              height={40}
              width={40}
            />
          </div>

          <div className='flex items-center'>
            <h1 className='text-lg font-medium'>
              Protoapp
            </h1>
          </div>
        </div>

        <nav className='flex items-center'>
          <p className="text-[0.9rem]">Home</p>
        </nav>
      </div>


    </div>
  )
}

export default NavigationBar