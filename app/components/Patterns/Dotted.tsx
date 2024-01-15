'use client'
import { useScroll } from 'framer-motion'
import React, { useState } from 'react'

function Dotted({ klasa }: { klasa: string }) {

    return (
        <div className={`dotted grid gap-5 md:gap-10 absolute ${klasa ? klasa : 'top-0 left-0'} h-full  md:grid-cols-[repeat(8,10px)] grid-cols-[repeat(9,5px)] w-full opacity-20 -z-10 `} >
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
            <div className='rounded-full bg-neutral-800 aspect-square'></div>
        </div>
    )
}

export default Dotted