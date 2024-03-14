import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='h-[20rem] w-full bg-black border-t flex justify-between'>
<div className="left w-1/4 h-full p-16 ">
    <div className="flex">
<img src="/Group192.png" className='h-24 w-24'  alt="" />
    <h1 className='text-white text-3xl p-8'>Swifting</h1>
    </div>
    <h1 className='text-gray-500 text-lg mt-4'>A product by iOS Developer</h1>
    
    <div className="flex space-x-4">
    <h1 className='text-gray-500 text-lg '>I want internship</h1>
<a href="https://twitter.com/pravalgautam001" className='text-blue-300'>@pravalgautam001</a>
    </div>
</div>

<div className="right py-20 px-44">
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