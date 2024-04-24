import React from 'react'

const CallToAction = () => {
  return (
    <div className='py-28 bg-blue-primary text-white'>
      <div className='absolute right-0 top-[263vh]'>
        <img 
          src="/assets/bg-decals2.svg"
          alt="" 
          className='relative z-10 top-0'
        />
      </div>
      <div className='flex flex-col justify-center gap-y-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[2.8rem] font-bold'>
            Deep dive. Ready?
          </h1>
          <p className='text-[1.3rem] font-normal'>
            So are we. Unless. You're. Not. Word filler.
          </p>
        </div>

        <div className='w-full flex justify-center'>
          <div className='w-[70%] h-[10vh] flex justify-center flex-row gap-x-12'>
            <div>
              <img 
                src="/assets/badge.play-store.svg" 
                alt="" 
              />
            </div>
            <div>
              <img 
                src="/assets/badge.app-store.svg" 
                alt="" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction