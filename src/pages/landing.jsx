import React from 'react'
import Slider from '../components/slider'

const Landing = () => {
  return (
    <div className='w-full mt-3'>
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
