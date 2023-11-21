'use client'

import Navbar from "./Navbar/Navbar";
import MobileNavbar from "./Navbar/MobileNavbar";
import Socials from "./Socials";

import { headerData } from "@/constants/data";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const {logo} = headerData

    const [isActive, setIsActive] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        })
    }, [])

    return (
        <header className={`${isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'} fixed bg-white left-0 right-0 top-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
            <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
                <Link href='/'>
                    <Image src={logo} alt="Logo" width={188} height={90} />
                </Link>
                <div className="hidden xl:flex">
                    <Navbar />
                </div>
                <div className="xl:hidden">
                    <MobileNavbar />
                </div>
                <div className="hidden xl:flex">
                    <Socials />
                </div>
            </div>
        </header>
    )
}