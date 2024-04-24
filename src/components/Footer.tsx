import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-footer-color px-10 md:px-20 lg:px-32 xl:px-80 py-20'>
      <div className='sm:w-[70%] md:w-[60%] xl:w-[500px] flex flex-col gap-y-12'>
        <div className='h-[70%] flex gap-x-4'>
          <div className='w-[50px] md:w-[10%]'>
            <img 
              src="/assets/logo1.svg" 
              alt=""
              className=''
            />
          </div>
          <div className='w-[90%] flex flex-col gap-y-2'>
            <div>
              <h1 className='font-bold text-[1.2rem] md:text-[1.4rem]'>
                Protoapp
              </h1>
              
              <p className='text-[0.9rem] md:text-[1.05rem]'>
                Camp One Inc, LLC
              </p>
            </div>

            <div>
              <p className='text-[0.7rem] md:text-[0.94rem] leading-5 md:leading-7'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas natus reiciendis, libero amet ipsum ipsa veniam deleniti ad consectetur repellendus, perferendis, ut odit! Voluptatibus commodi tempora consectetur 
              </p>
            </div>
          </div>
        </div>

        <div className='text-xs sm:text-sm md:text-md'>
          &copy; 2019 Protoapp. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer