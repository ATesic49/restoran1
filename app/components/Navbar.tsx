import React, { useState } from 'react'
import { Lobster } from 'next/font/google'
import Link from 'next/link'
import NavOptions from './NavOptions';
const lobstet = Lobster({ subsets: ['latin'], weight: ['400'] })
function Navbar() {
    return (
        <div className='z-[51] bg-blend-overlay bg-opacity-10 backdrop-blur-sm  fixed top-0  md:w-[90%] mx-auto border-b px-8 py-4 flex justify-between lg:left-[5%]  w-full  '>
            <div className={`${lobstet.className} font-extrabold text-red-500 text-lg md:text-2xl`}>Najbolji Restoran</div>



            <div className='hidden sm:flex items-center  justify-between  gap-2 md:gap-20 '>

                <nav className=' flex gap-4 md:gap-10 justify-center items-center  font-medium'>
                    <Link href="/" className='text-base md:text-lg '>O nama</Link>
                    <Link href="" className='text-base md:text-lg '>Galerija</Link>
                    <Link href="" className='text-base md:text-lg '>Meni</Link>
                </nav>
                <button className='bg-red-600 px-4 py-1 text-lg text-white rounded-lg '>Rezerviši.</button>
            </div>
            <NavOptions />
        </div>
    )
}

export default Navbar