import React from 'react'
import Image from 'next/image'
import lines from "../assets/lines.svg"


function HeroSection() {
  return (
    <div className='bg-black text-white h-screen flex flex-col items-center'>
        <h1 data-scroll data-scroll-speed="-0.4" className='text-9xl my-10'>Sony Bravia XR</h1>
        <Image className='absolute inset-0 h-full w-full opacity-30' src={lines} />
        <div data-scroll data-scroll-speed="0.4" className='h-[350px] w-[600px] border'>
          
        </div>
    </div>
  )
}

export default HeroSection