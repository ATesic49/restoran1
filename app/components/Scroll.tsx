'use client';
import React, { useRef } from 'react';
import { inView, motion, useInView, useScroll } from 'framer-motion';
function Scroll() {
    const { scrollY } = useScroll()
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: '-50%' }}
            animate={isInView ? { opacity: 1, x: '-50%', transition: { repeat: Infinity, duration: 3, delay: .5, ease: 'easeInOut', repeatType: 'reverse' } } : { opacity: 0, x: '-50%' }}

            className='cursor-pointer  absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center w-full  flex-col '
        >
            <h3 className='text-white text-xl md:text-2xl drop-shadow-lg '>Scroll Down
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down w-8 inline drop-shadow-lg ">
                    <path d="M12 5v14M19 12l-7 7-7-7"></path>
                </svg>
            </h3>

        </motion.div>
    );
}

export default Scroll;
