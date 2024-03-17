import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='h-full w-full bg-black border-t flex justify-between'>
<div className="left w-1/4 h-full sm:p-16 p-8 ">
    <div className="flex">
<img src="/Group192.png" className=' sm:h-24 sm:w-24 h-10 w-16'  alt="" />
    <h1 className='text-white text-3xl p-2'>Swifting</h1>
    </div>
    <h1 className='text-gray-500 text-xs sm:text-lg mt-4'>A product by iOS Developer</h1>
    
    <div className="flex space-x-4">
    <h1 className='text-gray-500  text-xs sm:text-lg '>I want internship</h1>
<a href="https://twitter.com/pravalgautam001" className='text-blue-300'>@pravalgautam001</a>
    </div>
</div>

<div className="right sm:py-20 py-10 px-44">
    <div className="flex flex-col text-gray-500 space-y-4">
        <button>Components</button>
        <button>Twitter</button>
        <button>Discord</button>
        <button>Pricing</button>
        
    </div>
</div>
    </div>
    </>
  )
}

export default Footer