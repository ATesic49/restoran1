import Image from 'next/image'
import React from 'react'
import hero from '@/public/imgs/hero.png'
import Button from './Button'
import Scroll from './Scroll'
import heroBg from '@/public/imgs/HeroBackground.jpeg'
import Fish from '@/public/svgs/fish.svg'
function Hero() {
    return (
        <div className='relative min-h-[100vh] bg-red-500 bg-opacity-40'>
            <Image src={Fish} alt='' className='stroke-2 stroke-white absolute top-full w-32 md:w-52 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
            <Scroll />
            <Image src={heroBg} fill alt='' objectFit='cover' objectPosition='center' className='-z-10  '></Image>

            <div className='z-30 absolute bg-opacity-90 bg-orange-100 left-0 py-4 top-0 bottom-0 right-1/4 flex justify-center items-center flex-col gap-10 pb-6'>
                <div className=' overflow-hidden z-[100] m-0 p-0 w-7/12 lg:w-96 -translate-x-1/2 -translate-y-1/2 top-1/2 absolute left-full ' >
                    <div className='dotted grid gap-5 md:gap-10 absolute top-0 left-0 h-full  md:grid-cols-[repeat(8,10px)] grid-cols-[repeat(9,5px)] w-full opacity-20 -z-10 transform rotate-y-45' >
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
                    <Image className='block  mx-auto z-20 ' width={350} height={350} alt='a' src={hero} ></Image>


                </div>
                <div className='flex flex-col gap-10 w-full md:w-2/3 ml-6 md:ml-0 md:mt-20 mt-20 justify-center md:mr-32 items-start'>
                    <h1 className='md:text-6xl text-2xl w-[10em] text-red-500 font-bold'>Najbolji Riblji Restoran Na Voždovcu</h1>
                    <p className='text-neutral-500 w-7/12  md:w-[25em]  font-extralight text-sm  md:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odit dolorem quam deserunt vero dicta nemo vel quibusdam.</p>
                    <Button text='Poruči.' color='bg-red-500' addClass=' text-orange-100 hover:scale-[105%] duration-200' />

                </div>



            </div>

        </div>
    )
}

export default Hero