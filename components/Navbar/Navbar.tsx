import { navData } from "@/constants/data"
import Link from "next/link"

export default function Navbar() {
    const {items} = navData

    return (
        <nav>
            <ul className="flex gap-x-14">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="link hover:border-b-2 hover:border-dark transition duration-300">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}