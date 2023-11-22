'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import { footerData } from '@/constants/data';
import Link from 'next/link';
import FooterForm from './FooterForm';

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    } 
}

export default function Footer() {
    const {about, links, newsletter, program} = footerData

    return (
        <footer className='section bg-dark'>
            <div className='container mx-auto'>
                <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.1}} className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
                    <motion.div variants={fadeIn('up', 0)} className='flex-1 flex flex-col gap-y-6'>
                        <h1 className='font-oswald text-xl uppercase tracking-[0.08em]'>{about.title}</h1>
                        <h2 className='leading-relaxed text-[#dbdbdb]'>{about.subtitle}</h2>
                        <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
                            <div className='flex items-center gap-x-3'>
                               <about.address.icon />
                               <p>{about.address.name}</p>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <about.phone.icon />
                               <p>{about.phone.number}</p> 
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <about.email.icon />
                               <p>{about.email.address}</p> 
                            </div>
                        </div>
                        
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0)} className='flex-1 flex flex-col xl:items-center'>
                            <h1 className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>{links.title}</h1>
                            <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                                {links.items.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className='hover:text-white transition'>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0)} className='flex-1'>
                        <h1 className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>{program.title}</h1>
                        <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                            {program.items.map((item) => (
                                <li key={item.name}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0)} className='flex-1'>
                        <h1 className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>{newsletter.title}</h1>
                        <h2 className='leading-relaxed mb-9 text-[#dbdbdb]'>{newsletter.subtitle}</h2>
                        <FooterForm />
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}