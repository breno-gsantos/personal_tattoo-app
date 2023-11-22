'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { testimonialData } from '@/constants/data';
import Image from 'next/image';

export default function Testimonials(){
    return (
        <motion.section variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}} className='py-[40px] lg:pb-[160px] lg:pt-0'>
            <div className='container mx-auto'>
                <Swiper>
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.message}>
                            <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                                <Image src={testimonial.quoteImg} alt='Quote Image' width={154} height={109} className='mb-5' style={{fill: '#222'}} />
                                <div className='flex-1 lg:mt-[54px]'>
                                    <p className='text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12'>{testimonial.message}</p>
                                    <div className='flex items-center text-xl lg:text-2xl font-oswald'>
                                        <h1 className='font-semibold'>{testimonial.name}</h1>
                                        <span className='mx-4'>|</span>
                                        <h2 className='font-light'>{testimonial.occupation}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    )
}