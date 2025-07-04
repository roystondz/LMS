'use client';

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"


const navItems = [
    {label: 'Home', href: '/'},
    {label: "Companions",href: '/companions'},
    {label:"My Journey", href: '/my-journey'},
]

const NavItems = () => {

    const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
        {
            navItems.map(({label,href}) => (
                <Link key={label} href={href} className={cn(pathname === href ? ' font-semibold text-red-400' : '')}>
                    {label}
                </Link>
            ))
        }
    </div>
  )
}

export default NavItems