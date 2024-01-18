import React, { useEffect, useRef } from 'react'
import NasaSlika from '@/public/imgs/NasaPrica.jpeg'
import Image from 'next/image'
import Dotted from './Patterns/Dotted'
import Timeline from './Timeline'
function NasRestoran() {

    return (


        <div className='flex flex-col md:gap-0 gap-12 p-10 md:p-20 justify-center items-center  '>
            <h2 className='md:text-4xl text-3xl text-orange-200 font-bold md:mb-10 md:m-20'>Naša Priča</h2>

            <Timeline godina='1997.' naslov='Prvi Put Otvoren Restoran' opis='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe est, odio repellendus nostrum facilis error assumenda ut quidem voluptatibus recusandae sunt! Facilis ratione nemo placeat libero tenetur magni accusamus?' nasaSlika={NasaSlika} />
            <Timeline godina='1997.' naslov='Prvi Put Otvoren Restoran' opis='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe est, odio repellendus nostrum facilis error assumenda ut quidem voluptatibus recusandae sunt! Facilis ratione nemo placeat libero tenetur magni accusamus?' nasaSlika={NasaSlika} />
            <Timeline godina='1997.' naslov='Prvi Put Otvoren Restoran' opis='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe est, odio repellendus nostrum facilis error assumenda ut quidem voluptatibus recusandae sunt! Facilis ratione nemo placeat libero tenetur magni accusamus?' nasaSlika={NasaSlika} />


        </div>
    )
}

export default NasRestoran