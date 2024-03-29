import React from 'react'
import slika1 from '@/public/imgs/Galerija1.jpeg'
import Image from 'next/image'
import Dotted from './Patterns/Dotted'
import Link from 'next/link'
function Galerija() {
    return (
        <div className='grid sm:grid-cols-3 px-10 md:px-[7.5%] gap-10 pb-10 '>
            <div className=' w-full aspect-square max-w-[75vw] mx-auto rounded relative group '>
                <Dotted klasa='sm:top-20 -top-5 -left-5 sm:-left-20  sm:scale-75' />
                <div className='absolute top-0 left-0  w-full h-full group z-50 overflow-hidden rounded-b-lg '>
                    <div className='w-full flex flex-col gap-2 absolute bottom-0 translate-y-full bg-red-400   p-4 bg-opacity-70 group-hover:translate-y-0 duration-200 '>
                        <h2 className='text-neutral-50 font-bold md:text-2xl text-xl z-20 '>Glavna sala</h2>
                        <p className='text-neutral-100 font-extralight text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. .</p>

                    </div>


                </div>
                <Image src={slika1} alt='' objectFit='cover' fill className='rounded-lg'  ></Image>

            </div>
            <div className=' w-full aspect-square max-w-[75vw] mx-auto  rounded relative group '>
                <Dotted klasa='sm:-top-20 sm:left-20 -top-5 -left-5   sm:scale-75' />
                <div className='absolute top-0 left-0  w-full h-full group z-50 overflow-hidden rounded-b-lg'>
                    <div className='w-full flex flex-col gap-2 absolute bottom-0  translate-y-full bg-red-400   p-4 bg-opacity-70 group-hover:translate-y-0 duration-200 '>
                        <h2 className='text-neutral-50 font-bold md:text-2xl text-xl z-20 '>Glavna sala</h2>
                        <p className='text-neutral-100 font-extralight text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. .</p>

                    </div>


                </div>
                <Image src={slika1} alt='' objectFit='cover' fill className='rounded-lg'  ></Image>

            </div>

            <div className='flex  justify-center md:justify-end items-center '>
                <Link href={'/galerija'} className='rounded bg-red-600 md:mr-10 text-neutral-100 px-4 py-2 text-lg md:text-xl '>Vidi još...</Link>
            </div>
        </div>
    )
}

export default Galerija