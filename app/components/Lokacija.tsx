import Image from 'next/image'
import React from 'react'
import image from '@/public/imgs/HeroBackground.jpeg'
import fish from '@/public/svgs/fish.svg'
function Lokacija() {
    return (
        <div className=' py-2 relative md:py-10 px-[5%] flex justify-center items-center flex-col gap-10 md:gap-20 '>
            <h2 className='text-2xl md:text-4xl text-orange-200 font-bold'>Naša Lokacija</h2>
            <div className='grid md:grid-cols-2 gap-5 md:gap-10 items-center w-full'>
                <div className='w-full flex  flex-col gap-5 md:gap-10 items-start justify-start'>
                    <div className='gap-10 md:gap-5 flex flex-col items-start justify-start'>
                        <h3 className='text-2xl font-bold max-w-[16em] underline' >Kako do nas?</h3>
                        <p className='text-neutral-400 text-sm md:text-base max-w-[28em] font-light'>Nalazimo se na samom ulazu u zemunski kej. Prodjes ono jedno pa skrenes desno i eto nas.</p>
                    </div>
                    <div className='gap-1 md:gap-2 w-fit  flex flex-col items-start justify-start'>
                        <h3 className='text-2xl font-bold max-w-[16em] underline' >Da li vrsite dostavu?</h3>
                        <p className='text-neutral-400 font-light text-sm md:text-base max-w-[28em]'>Ovaj restoran vrsi dostavu na kucnu adresu. Da porucis hranu potrevno je da klijnes na dugme ispod.</p>
                        <button className='text-white   px-2 py-1 rounded-md  bg-red-500 duration-200 focus:scale-95 hover:underline text-xl  ml-auto mr-2 '>Poruči.</button>

                    </div>
                    <div className='gap-1 md:gap-2 flex flex-col items-start justify-start'>
                        <h3 className='text-2xl font-bold max-w-[16em] underline' >Rezervacija stolova</h3>
                        <p className='text-neutral-400 font-light text-sm md:text-base max-w-[28em]'>A i stolove mozete rezervisati jednostavnim kikom na dugme rezervisi.</p>
                        <button className='text-white   px-2 py-1 rounded-md  bg-red-500 duration-200 focus:scale-95 hover:underline text-xl  ml-auto mr-2 '>Rezervisi.</button>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full md:gap-5 gap-2'>
                    <div className='flex justify-center items-center'>
                        <h3 className='font-bold text-xl'>Pronadji nas:</h3>
                    </div>
                    <div className='relative h-full w-full z-10'>


                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4004.7343515615903!2d20.47870019155595!3d44.785395951785645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1705602467868!5m2!1ssr!2srs" width="600" height="450" className='absolute top-0 left-0  w-full h-full z-20   ' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lokacija