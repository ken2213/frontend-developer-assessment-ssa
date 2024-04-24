import React from 'react'

const Features = () => {
  return (
    <div className='text-gray-900 bg-white'>
      <div className=' w-full h-[20vh] md:h-[30vh] flex justify-center'>
        <div className='w-[70%] md:w-[720px] flex flex-col items-center'>
          <div>
            <h1 className='font-bold text-[1.5rem] md:text-[2.5rem]'>
              Meet Protoapp
            </h1>
          </div>

          <div className='w-full'>
            <p className="text-[0.85rem] sm:text-[0.95rem] md:text-[1.2rem] font-thin text-center">
              The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation
            </p>
          </div>

        </div>
      </div>

      <div className='flex flex-col'>
        <div className='w-full flex justify-center'>

          <div className='w-[80%] md:w-[700px] my-8 min-h-[20vh] md:min-h-[40vh] flex justify-center'>
            <div className='w-full flex flex-row items-center justify-between gap-x-4'>
              <div className='w-[55%] h-full text-end flex flex-col gap-y-4'>
                <h1 className='text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] font-bold'>Discover</h1>

                <div className='flex justify-end'>
                  <p className='text-[0.8rem] md:text-[1rem] w-full md:w-[80%]'>
                    Get information on using these guidelines whenever you are using therefore they have same style and quality.
                  </p>
                </div>
              </div>
              
              <div className='w-[45%] h-full'>
                <img 
                  src="/assets/product-search.svg" 
                  alt="" 
                />
              </div>
            </div>
          </div>

        </div>




        <div className='w-full flex justify-center'>

          <div className='w-[80%] md:w-[700px] my-8 min-h-[20vh] md:min-h-[40vh] flex justify-center'>
            <div className='w-full flex flex-row-reverse items-center justify-between gap-x-4'>
              <div className='w-[55%] h-full text-start flex flex-col gap-y-4'>
                <h1 className='text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] font-bold'>Augmented</h1>
                <div className='flex justify-start'>
                  <p className='text-[0.8rem] md:text-[1rem] w-full md:w-[80%]'>
                    Word salad often arouses curiosity due to its seemingly intelligent and tasteful play on words.
                  </p>
                </div>
              </div>
              
              <div className='w-[45%] h-full'>
                <img 
                  src="/assets/product-smartphone.svg" 
                  alt="" 
                />
              </div>
            </div>
          </div>

        </div>

        <div className='w-full flex justify-center'>

          <div className='w-[80%] md:w-[700px] my-8 min-h-[40vh] flex justify-center'>
            <div className=' w-full flex flex-row items-center justify-between gap-x-4'>
              <div className='w-[50%] h-full text-end flex flex-col gap-y-2'>
                <h1 className='text-[1.4rem] sm:text-[1.8rem] md:text-[2rem] font-bold'>
                  Endless <br />
                  Possibilities
                </h1>

                <div className='flex justify-end'>
                  <p className='text-[0.8rem] md:text-[1rem] w-full md:w-[80%]'>
                    Management Systems shouldn&apos;t be a bore. Run out of words? Here&apos;s some lorem ipsum: Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
              
              <div className='w-[50%] h-full'>
                <img 
                  src="/assets/product-work.svg" 
                  alt="" 
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Features