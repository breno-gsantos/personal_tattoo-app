'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { heroData } from '@/constants/data';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6
        }
    }
}

export default function Hero() {
    const {title, subtitle, btnIcon, btnText} = heroData

    return (
        <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]' id='#home'>
            <motion.div variants={container} initial='hidden' whileInView='show' className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
                <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
                    <motion.h1 variants={fadeIn('down', 0.0)} className='h1'>{title}</motion.h1>
                    <motion.p variants={fadeIn('down', 0.0)} className='mb-8 lg:mb-16 max-w-lg leading-relaxed'>{subtitle}</motion.p>
                    <motion.div variants={fadeIn('down', 0.0)}>
                        <Button variant='oswald' className='gap-x-4 btn-outline h-[67px]'>{btnText} <ArrowRight /></Button>
                    </motion.div>
                </div>
                <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'>

                </div>
            </motion.div>
        </section>
    )
}