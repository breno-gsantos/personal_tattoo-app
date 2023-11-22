'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { contactData } from '@/constants/data';
import Link from 'next/link';
import FormContact from './FormContact';

export default function Contact() {
    const {title, info, form} = contactData

    return (
        <section className='section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-y-16'>
                    <motion.div variants={fadeIn('right', 0 )} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.4}} className='flex-1'>
                        <h2 className='h2 max-w-[490px]'>{title}</h2>
                        <div className='flex flex-col lg:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
                            {info.map((item) => (
                                <div key={item.title}>
                                    <h1 className='font-oswald uppercase font-medium text-xl mb-3'>{item.title}</h1>
                                    <h2 className='mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>{item.subtitle}</h2>
                                    <div className='flex flex-col gap-y-3 mb-8'>
                                        <div className='flex items-center gap-[10px]'>
                                           <p><item.address.icon /></p> 
                                           <p className='font-medium'>{item.address.name}</p>
                                        </div>
                                        <div className='flex items-center gap-[10px]'>
                                           <p><item.phone.icon /></p> 
                                           <p className='font-medium'>{item.phone.number}</p>
                                        </div>
                                        <div className='flex items-center gap-[10px]'>
                                           <p><item.email.icon /></p> 
                                           <p className='font-medium'>{item.email.address}</p>
                                        </div>
                                    </div>
                                    <Link className='font-medium border-b border-dark pb-[5px]' href='#'>{item.link}</Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.4}} className='flex-1 xl:pl-[40px] flex justify-center items-center'>
                        <FormContact />  
                    </motion.div>
                </div>
            </div>
        </section>
    )
}