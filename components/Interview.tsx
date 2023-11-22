'use client'

import {FaPlay} from 'react-icons/fa'
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { interviewData } from '@/constants/data';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Interview() {
    const {title, btnText} = interviewData

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <motion.section variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.1}} className='bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]' id='interview'>
            <div className='container mx-auto h-full'>
                <div className='flex flex-col justify-center h-full'>
                    <div className='flex flex-col items-start max-w-[880px]'>
                        <motion.h3 variants={fadeIn('down', 0)} className='text-white text-[40px] lg:text-[60px] leading-[1.1] font-rozhaOne -tracking-[1.5px] capitalize mb-8'>{title}</motion.h3>
                            <motion.div variants={fadeIn('down', 0)}  className='flex text-white items-center gap-x-5 hover:opacity-80 transition cursor-pointer'>
                            <div className='w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'>
                                <div className='bg-white w-full h-full rounded-full flex justify-center items-center'>
                                    <FaPlay className='pl-1 cursor-pointer' />
                                </div>
                            </div>
                            <button className='font-oswald uppercase text-lg'>{btnText}</button>
                            </motion.div>    
                    </div>
                </div>
            </div>
        </motion.section>
    )
}