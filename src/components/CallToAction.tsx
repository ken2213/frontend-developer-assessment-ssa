import React from 'react'

const CallToAction = () => {
  return (
    <div className='py-14 md:py-28 bg-blue-primary text-white'>
      <div className='absolute right-[-40px] sm:right-[-60px] md:right-0 top-[185vh] sm:top-[190vh] md:top-[263vh]'>
        <img 
          src="/assets/bg-decals2.svg"
          alt="" 
          className='relative z-10 top-0 w-[70%] sm:w-[90%] md:w-full'
        />
      </div>
      <div className='flex flex-col justify-center gap-y-10 md:gap-y-15'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold'>
            Deep dive. Ready?
          </h1>
          <p className='text-[1rem] md:text-[1.3rem] font-normal'>
            So are we. Unless. You&apos;re. Not. Word filler.
          </p>
        </div>

        <div className='w-full flex justify-center'>
          <div className='w-[70%] h-[5vh] md:h-[10vh] flex justify-center flex-row gap-x-6 md:gap-x-12'>
            <div>
              <img 
                src="/assets/badge.play-store.svg" 
                alt="" 
                className='w-[100px] md:w-[150px]'
              />
            </div>
            <div>
              <img 
                src="/assets/badge.app-store.svg" 
                alt=""
                className='w-[100px] md:w-[150px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction