import { socialData } from "@/constants/data";
import Link from "next/link";

export default function Socials() {
    return (
        <ul className="flex justify-center items-center gap-x-7">
            {socialData.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>
                        <item.icon className='w-8 h-8' />
                    </Link>
                </li>
            ))}   
        </ul>
    )
}