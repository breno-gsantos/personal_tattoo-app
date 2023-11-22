'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { aboutData } from '@/constants/data';
import { Button } from './ui/button';
import {IoMdArrowForward} from 'react-icons/io'

export default function About() {
    const {btnText, subtitle1, subtitle2, title} = aboutData

    return (
        <section className='lg:py-16 xl:pb-[160px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
                    
                    <motion.div variants={fadeIn('right', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.7}} className='text-[360px] xl:text-[720px] leading-none font-rozhaOne flex flex-col lg:flex-row flex-1 lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>01</motion.div>
                    <motion.div variants={fadeIn('left', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.6}} className='flex-1 h-full xl:mt-48'>
                        <h2 className='h2'>{title}</h2>
                        <div className='flex flex-col items-end max-w-[530px] text-grey'>
                            <p className='mb-6'>{subtitle1}</p>
                            <p className='mb-9'>{subtitle2}</p>
                            <Button variant='ghost' size='lg' className='btn btn-link gap-x-4 text-xl'>{btnText}<IoMdArrowForward /></Button>
                        </div>
                    </motion.div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}