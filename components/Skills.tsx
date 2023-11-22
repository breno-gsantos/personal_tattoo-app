'use client'

import { useInView } from "react-intersection-observer";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/variants";
import { useEffect, useState } from "react";

export default function Skills() {
    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const [fullBody, setFullBody] = useState<number>(0);
    const [safelyPiercing, setSafelyPiercing] = useState<number>(0)
    const [fullColor, setFullColor] = useState<number>(0)
    const [temporary, setTemporary ] = useState<number>(0)

    useEffect(() => {
        if (inView){
            setTimeout(() => {
                if(fullBody < 90) {
                    setFullBody(fullBody + 1)
                }
                if(safelyPiercing < 80) {
                    setSafelyPiercing(safelyPiercing + 1)
                }
                if(fullColor < 85) {
                    setFullColor(fullColor + 1)
                }
                if(temporary < 95) {
                    setTemporary(temporary + 1)
                }
            },50);
        } else {
            setFullBody(0);
            setSafelyPiercing(0);
            setFullColor(0);
            setTemporary(0);
        }
    }, [inView, fullBody, safelyPiercing, fullColor, temporary])

    const styles = {
        path: {
            stroke: '#111111'
        },
        trail: {
            stroke: '#eeeeee'
        },
        text: {
            fill: '#111111',
            fontSize: '24px'
        }
    }

    return (
        <motion.section variants={fadeIn('up', 0)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.1}} ref={ref} className="section font-oswald">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center xl:flex-row">
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`} />
                        <h1 className="uppercase font-light tracking-[1.2px] text-center">Full Body Tattoo</h1>
                    </div>
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <CircularProgressbar strokeWidth={1} value={safelyPiercing} styles={styles} text={`${safelyPiercing}%`} />
                        <h1 className="uppercase font-light tracking-[1.2px] text-center">Safely piercing</h1>
                    </div>
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <CircularProgressbar strokeWidth={1} value={fullColor} styles={styles} text={`${fullColor}%`} />
                        <h1 className="uppercase font-light tracking-[1.2px] text-center">Full Color Tattoo</h1>
                    </div>
                    <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
                        <CircularProgressbar strokeWidth={1} value={temporary} styles={styles} text={`${temporary}%`} />
                        <h1 className="uppercase font-light tracking-[1.2px] text-center">Temporary Tattoo</h1>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}