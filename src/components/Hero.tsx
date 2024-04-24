import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white text-gray-900 w-full h-[95vh] px-6 sm:px-12 md:px-24 lg:px-36 xl:px-80 opacity-9'>
        <div className=' w-full h-[75%] pt-32'>
          <div className='w-[60%] md:w-[500px]  flex flex-col gap-y-8'>
            <h1 className='text-[4rem] font-normal'>
              Protoapp
            </h1>
            <p className='text-[1.4rem] font-normal'>
              Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </p>

            <div className=''>
              <button className=' px-4 py-2 rounded-md bg-blue-primary text-white'>
                Get Started
              </button>
            </div>

          </div>

          <img
            src="/assets/bg-leaves.svg"
            className='absolute top-0 right-0 sm:w-[650px] md:w-[800px] lg:w-[1200px]'
          />

          <img 
            src='/assets/bg-decals.svg'
            className='absolute top-[40vh] left-[-45px] w-[1100px]'
          />
        </div>

        <div className='h-[25%]  gap-x-10'>
          <div className=' w-full flex justify-center py-8 gap-x-16 border border-y-2 border-x-0 border-gray-100 '>
            <div>
              <img 
                src="/assets/badge.play-store.svg" 
                alt="Play Store Logo"
                className='w-[150px]'
              />
            </div>

            <div>
              <img 
                src="/assets/badge.app-store.svg" 
                alt="Play Store Logo"
                className='w-[150px]'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero