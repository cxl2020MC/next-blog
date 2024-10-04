import Link from 'next/link'
import { Icon } from '@iconify/react'
import blogConfig from '@/blog.config'
import "@/app/css/nav.css"
import NavThemeToggleBtn from './themeToggleBtn'

export default function Nav() {
  return (
    <nav className="nav">
      <Link id="site-name" href="/">陈鑫磊的博客</Link>
      <div className="nav-links">
        <NavLinks />
      </div>
      <div className="nav-btns">
        <NavThemeToggleBtn />
        <NavMenuBtn icon="fa6-brands:github" />
        <NavMenuBtn icon="fa6-solid:bars" />
      </div>
    </nav>
  )
}

function NavLinks() {
  return blogConfig.nav.links.map((item) => {
    return (
      <Link key={item.name} href={item.link} className="nav-link">
        <Icon icon={item.icon}></Icon>
        <span>{item.name}</span>
      </Link>
    )
  })
}


function NavMenuBtn({ icon }: { icon: string, onClick?: () => void }) {
  return (
    <button className="nav-btn">
      <Icon icon={icon}></Icon>
    </button>
  )
}

