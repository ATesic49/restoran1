
'use client'
import React, { useRef } from 'react'
import { inView, motion, useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'


function Timeline({ nasaSlika }: { nasaSlika: StaticImageData }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: '-50%' })
    return (
        <motion.div
            initial={{ filter: 'grayscale(0)' }}
            animate={isInView ? { filter: 'grayscale(0)' } : { filter: 'grayscale(1)' }}
            transition={{ duration: .5 }}
            ref={ref} className='grid gap-5 md:grid-cols-3 justify-center md:gap-10 items-center'>
            <div className='relative py-10 md:py-20 h-full w-full'>
                <div className=' flex justify-center items-center absolute top-0 left-1/2 w-0.5 h-full -translate-x-1/2m bg-orange-200 '>
                    <h2 className='font-bold p-2 bg-white text-red-400 md:text-4xl text-2xl'>
                        1967.
                    </h2>
                </div>
            </div>
            <div className='flex w-full flex-col gap-2 md:gap-5  md:py-20 justify-center '>
                <h3 className=' text-red-400 text-xl font-bold md:text-2xl  '>Prvi put otvoren restoran.</h3>
                <p className='text-neutral-400 md:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem doloribus sapiente quam voluptas nihil culpa praesentium vero laboriosam fugiat nesciunt numquam suscipit, consectetur est nam odit enim placeat quos consequuntur.</p>
            </div>

            <Image className='rounded-2xl   shadow-md ' src={nasaSlika} alt=''></Image>
        </motion.div>
    )
}

export default Timeline