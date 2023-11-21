import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import {TiThMenuOutline} from 'react-icons/ti'
import { navData } from "@/constants/data"
import Link from "next/link"
import Socials from "../Socials"

export default function MobileNavbar() {
    const {items} = navData

    return (
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost"><TiThMenuOutline className='text-4xl bg-dark text-white p-2 rounded-md'/></Button>
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mt-32">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-2xl font-oswald">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text2xl mt-60">
            <Socials />
          </div>
        </SheetContent>
      </Sheet>
    )
}