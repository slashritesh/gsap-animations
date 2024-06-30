"use client"

import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

function Navbar() {

    const nav = useRef(null)

    useLayoutEffect(()=>{
        
    },[])

  return (
    <div ref={nav} className='flex items-center justify-between px-20 py-10 text-sm'>
        <div>
        <h1 className='text-base'>Sony Tvs</h1>
        </div>
        <div className='flex gap-10'>
            <div>Specification</div>
            <div>Features</div>
            <div>Acessories</div>
            <div>Products</div>
        </div>
        <div className='p-2 px-8 border rounded-full'>
            Buy now
        </div>
    </div>
  )
}

export default Navbar