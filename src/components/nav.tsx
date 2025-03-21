import Link from "next/link";
import { Icon } from "@iconify/react";
import blogConfig from "@/blog.config";
import "./css/nav.css";

export default function Nav({toggleNav}: {toggleNav: () => void}) {
    return (
        <nav className="nav">
            <Link id="site-name" href="/">
                {blogConfig.title}
            </Link>
            <div className="nav-links">
                <NavLinks />
            </div>
            <div className="nav-btns">
                {/* <NavMenuBtn icon="fa6-brands:github" /> */}
                <NavMenuBtn icon="fa6-solid:bars" onClick={toggleNav} />
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

function NavMenuBtn({ icon, onClick }: { icon: string; onClick?: () => void }) {
    return (
        <button className="nav-btn" onClick={onClick}>
            <Icon icon={icon}></Icon>
        </button>
    );
}
