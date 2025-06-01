"use client"
import { useState } from "react";
import Nav from "@/components/nav";
import { NavMobileMenu } from "@/components/nav";



export default function Header() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    function toggleNav() {
        console.log("切换导航栏菜单打开状态");
        setNavOpen(!navOpen);
    }
    return (
        <header>
            {/* 导航栏 */}
            <Nav toggleNav={toggleNav} />
            <NavMobileMenu navOpen={navOpen} toggleNav={toggleNav} />
        </header>
    )
}