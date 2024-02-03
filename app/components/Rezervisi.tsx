import React from 'react'

function Rezervisi() {
    return (
        <div className='flex felx-col justify-start items-start px-[7.5%] py-20'>
            <div className='grid grid-cols-[1fr_1fr]'>
                <div className='relative flex-col items-start flex jusify-start  gap-2 md:gap-4  '>
                    <h3 className='relative before:absolute before:top-0 before:left-0 before:-translate-x-full   before:w-2 pl-4 before:h-full max-w-[10em] before:bg-red-400 block  text-xl font-bold  md:text-2xl  '>Rezerviši kod nas za manje od 5 minuta.</h3>
                    <p className='md:mr-[5%] max-w-[23em] font-light text-sm md:text-base  text-neutral-600 '>Naš restoran otvoren je 2010. godine i od tada je postao omiljeno mjesto za ljubitelje dobre hrane i ugodne atmosfere. Naša kreativna kuhinja nudi širok izbor jela, od tradicionalnih specijaliteta do modernih fusion kombinacija. Uz vrhunsku uslugu i pažljivo odabrane sastojke, svaki obrok u našem restoranu je pravo gastronomsko iskustvo. Dobrodošli!</p>
                </div>
                <div className='relative flex-col items-start flex jusify-start  gap-4 md:gap-8  '>
                    <h2 className='relative before:absolute before:top-0 before:left-0 before:-translate-x-full   before:w-2 pl-4 before:h-full max-w-[32em] before:bg-red-400 block  text-2xl font-bold md:text-2xl '>Ili nas jednostavno pozovi</h2>
                    <button className=''>064-473-7375</button>
                </div>
            </div>
        </div>
    )
}

export default Rezervisi