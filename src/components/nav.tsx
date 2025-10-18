// import { createContext } from 'react';
import Link from "next/link";
import { Icon } from "@iconify/react";
import blogConfig from "@/blog.config";
import "./css/nav.css";


// export const MobileMenuContext = createContext({ navOpen: false, toggleNav: () => { } });

export default function Nav({ toggleNav }: { toggleNav: () => void }) {
    return (
        <nav className="nav">
            <div className="site-name">
                <Link id="site-name" href="/">
                    {blogConfig.title}
                </Link>
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <NavLinks />
                </div>
                <div className="nav-btns">
                    <NavMenuBtn icon="fa7-solid:bars" className="toggle-mobile-menu-btn" onClick={toggleNav} />
                </div>
            </div>

        </nav>
    );
}

function NavLinks() {
    return blogConfig.nav.links.map((item) => {
        return (
            <Link key={item.name} href={item.link} className="nav-link">
                <Icon icon={item.icon}></Icon>
                <span>{item.name}</span>
            </Link>
        );
    });
}

function NavMenuBtn({ icon, className, onClick }: { icon: string, className?: string, onClick?: () => void }) {
    return (
        <button className={className ? "nav-btn " + className : "nav-btn"} onClick={onClick} >
            <Icon icon={icon}></Icon>
        </button>
    );
}



export function NavMobileMenu({ navOpen, toggleNav }: { navOpen: boolean, toggleNav: () => void }) {

    const navClassName = navOpen ? "nav-mobile-menu open" : "nav-mobile-menu";
    return (
        <div className={navClassName}>
            {/* <div className="mask"></div> */}
            <div className="nav-menu-container">
                <div className="nav-menu-header">
                    <h3 className="nav-menu-title">菜单</h3>
                    <button className="nav-menu-close-btn" onClick={toggleNav} >
                        <Icon icon="fa7-solid:xmark" />
                    </button>
                </div>
                <div className="nav-menu-content">
                    <NavLinks />
                </div>
            </div>
        </div>
    )
}