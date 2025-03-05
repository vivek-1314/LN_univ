import React from 'react'
import Slider from '../components/slider'

const Landing = () => {
  return (
    <div className='w-full'>

        <div className="w-full py-6 ">
        <svg className="w-full h-[100px]" viewBox="0 0 300 100">
  <path
    d="M20,20 C10,20 100,100 180,20" 
    stroke="black"
    strokeWidth="1"
    fill="transparent"
  />
</svg>
        </div>


        <div className="w-full flex justify-evenly items-center mt-20 mb-50 ">
            <div className="h-44 w-44 bg-[#a6a7a7] border border-1/2  border-black  shadow-[-15px_-10px_30px_rgba(128,128,128,0.9)] rounded-2xl"></div>
            <div className="h-44 w-44 bg-[#a6a7a7] border border-1/2  border-black shadow-[-15px_-10px_30px_rgba(128,128,128,0.9)] rounded-2xl"></div>
            <div className="h-44 w-44 bg-[#a6a7a7] border border-1/2  border-black shadow-[-15px_-10px_30px_rgba(128,128,128,0.9)] rounded-2xl"></div>
        </div>
        <div className="space-y-30 mb-30">
            <Slider />
            <Slider />
        </div>
    </div>
  )
}

export default Landing
