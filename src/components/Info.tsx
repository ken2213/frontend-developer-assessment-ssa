import React from 'react'

const Info = () => {
  return (
    <div className='bg-white text-gray-900 w-full'>
      <div className='flex justify-center'>
        <div className=' w-[60%] text-center py-12 md:py-16'>
          <h1 className='text-[1.4rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold'>Last Call to Action</h1>
          <p className='text-[0.9rem] md:text-[1.3rem]'>Another section content goes here</p>
        </div>
      </div>

      <div className='bg-white text-white min-h-[70vh] flex flex-col justify-center items-center'>
        <div className='w-[90%] xl:w-[1200px] grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-x-10 gap-y-12 justify-items-center py-5 md:py-10'>
          <div className='bg-yellow-primary w-[90%] md:w-[550px] min-h-[300px] flex p-[1rem] gap-x-4 rounded-xl shadow-lg'>
            <div className='w-[40%] flex flex-col items-center justify-center md:justify-start gap-y-4 py-4'>
              <div className='flex justify-center w-[75%]'>
                <img 
                  src="/assets/badge.laravel-mix.svg" 
                  alt="" 
                  className='w-full'
                />
              </div>
              <div className='text-center'>
                <div className='uppercase text-xs bg-black px-3 py-1 rounded-full bg-opacity-60 font-bold'>
                  automation
                </div>
              </div>
            </div>
            <div className='w-[60%] flex flex-col gap-y-4 py-4'>
              <div>
                <p className='uppercase text-xs md:text-md leading-8'>roll out</p>
                <h1 className='font-bold text-[1rem] md:text-[1.6rem] leading-5 md:leading-8'>Automatic <br /> Prototyping</h1>
              </div>
              <div>
                <p className='text-sm md:text-md'>
                  Webpack is the most powerful and flexible
                  asset compilation tool available today. With that
                  power, however, comes a certain level of complexity.
                </p>
              </div>
            </div>
          </div>


          <div className='bg-green-primary w-[90%] md:w-[550px] min-h-[300px] flex p-[1rem] gap-x-4 rounded-xl shadow-lg'>
            <div className='w-[40%] flex flex-col items-center justify-center md:justify-start gap-y-4 py-4'>
              <div className='flex justify-center w-[75%]'>
                <img 
                  src="/assets/badge.how-to-read-code.svg" 
                  alt="" 
                  className='w-full'
                />
              </div>
              <div className='text-center'>
                <div className='uppercase text-xs bg-black px-3 py-1 rounded-full bg-opacity-60 font-bold'>
                  simplicity
                </div>
              </div>
            </div>
            <div className='w-[60%] flex flex-col gap-y-4 py-4'>
              <div>
                <p className='uppercase text-xs leading-8'>roll out</p>
                <h1 className='font-bold text-[1rem] md:text-[1.6rem] leading-5 md:leading-8'>Complexity <br /> Simplified</h1>
              </div>
              <div>
                <p className='text-sm md:text-md'>
                  I know too many backend developer who are stifled by one glaring phobia: CSS. How do you construct a layout when nothing lines up?
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full'>
          <div className=' flex justify-end'>
            <img 
              src="/assets/bg-decals3.svg" 
              alt=""
              className='w-full'
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Info