'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';

import {PhotoAlbum} from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryData } from '@/constants/data';

import {IoMdArrowForward} from 'react-icons/io'
import { useState } from 'react';
import { Button } from './ui/button';

const slides = galleryData.images.map(({original, width, height}) => ({
    src: original,
    width,
    height
}))

export default function GallerySection() {
    const [index, setIndex] = useState<number>(-1)

    const {title, images, btnText} = galleryData

    return (
        <section className='section relative mt-[40px] lg:mt-0' id='gallery'>
            <div className='container mx-auto'>
                <motion.h2 variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.6}} className='h2 max-w-[370px] lg:mb-20'>{title}</motion.h2>
            </div>
            {/* @ts-ignore */}
            <motion.div variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}} className='mb-8 lg:mb-20'>
                <PhotoAlbum onClick={({index}) => setIndex(index)} layout='rows' photos={images} />
                <Lightbox slides={slides} styles={{container: {backgroundColor: 'rgba(0, 0, 0, .9)'}}} open={index >= 0} index={index} close={() => setIndex(-1)} />
            </motion.div>
            <motion.div variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}} className='flex justify-center'>
                <Button variant='ghost' className='btn btn-lg btn-dark h-14 text-lg'>
                    {btnText} <IoMdArrowForward className='text-xl' />
                </Button>
            </motion.div>
        </section>
    )
}