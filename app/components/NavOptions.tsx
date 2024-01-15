'use client';
import React, { useState } from 'react'
import imageFrame from '@/public/imgs/woodenFrame.jpeg'
import papir from '@/public/imgs/papir.jpeg'
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
function NavOptions() {
    const [show, setShow] = useState('100%')
    return (

        <>
            <div className='ml-auto flex flex-col gap-2 sm:hidden w-8' onClick={() => setShow('0')}>
                <div className='w-full h-1 rounded bg-black'></div>
                <div className='w-full h-1 rounded bg-black'></div>
                <div className='w-full h-1 rounded bg-black'></div>
            </div>
            <motion.div className={`fixed pr-5 pl-2 top-0 bottom-0 max-h-[100svh] h-[100vh]  bg-red-500 bg-opacity-50 sm:hidden flex flex-col gap-4 left-1/2 right-0 w-full justify-center items-center `} animate={
                { scaleX: show === '0' ? 1 : 0, x: '-50%' }
            }>

                <div className='fixed top-2 right-6 flex flex-col sm:hidden w-6 py-4 duration-300' onClick={() => setShow('100%')}>
                    <div className='w-full h-1 rotate-45 rounded bg-black' ></div>
                    <div className='w-full h-1 -rotate-45 rounded -mt-[3.5px] bg-black'></div>
                </div >


                <div className=' relative flex justify-center items-center w-9/12 aspect-[1/1.61] overflow-hidden rounded'>
                    <Image className='-z-10' src={imageFrame} alt='frame' fill objectFit='cover' />
                    <div className='flex flex-col py-2 px-4 justify-start gap-4 relative w-10/12 aspect-[1/1.61] items-center'>
                        <Image src={papir} fill alt='papir' className='-z-10'></Image>
                        <h2 className='italic text-2xl pb-2  border-b border-black'>Navbar</h2>
                        <div className='flex flex-col gap-4 justify-start items-start' >
                            <Link href={''} className='italic hover:border-b border-black pb-px'>Pocetna </Link>
                            <Link href={''} className='italic hover:border-b border-black pb-px'>Pocetna </Link>
                            <Link href={''} className='italic hover:border-b border-black pb-px'>Pocetna </Link>
                        </div>
                    </div>
                </div>
            </motion.div >
        </>
    )
}

export default NavOptions