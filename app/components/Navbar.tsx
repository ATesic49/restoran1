import React, { useState } from 'react'
import { Lobster } from 'next/font/google'
import Link from 'next/link'
import NavOptions from './NavOptions';
const lobstet = Lobster({ subsets: ['latin'], weight: ['400'] })
function Navbar() {
    return (
        <div className='z-50 fixed top-0  md:w-[90%] mx-auto border-b px-4 py-4 flex justify-between items- md:left-[5%]  w-full '>
            <div className={`${lobstet.className} font-extrabold text-red-500 text-lg md:text-2xl`}>Najbolji Restoran</div>



            <div className='hidden sm:flex items-center  justify-between w-6/12 gap-10 md:gap-10 '>

                <nav className=' flex gap-4 md:gap-10 justify-center items-center'>
                    <Link href="" className='text-base md:text-lg '>Pocetna</Link>
                    <Link href="" className='text-base md:text-lg '>Pocetna</Link>
                    <Link href="" className='text-base md:text-lg '>Pocetna</Link>
                </nav>
                <button className='bg-orange-200 px-4 py-1 text-lg text-white rounded-lg '>Poruči</button>
            </div>
            <NavOptions/>
        </div>
    )
}

export default Navbar