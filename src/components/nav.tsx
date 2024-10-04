import Link from 'next/link'
import { Icon } from '@iconify/react'
import blogConfig from '@/blog.config'
import "@/app/css/nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <Link id="site-name" href="/">陈鑫磊的博客</Link>
      <div className="nav-links">
        <NavLinks />
      </div>
      <div className="nav-btns">
        <NavMenuBtns icon="fa6-brands:github" />
        <NavMenuBtns icon="fa6-solid:bars" />
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


function NavMenuBtns({ icon }: { icon: string }) {
  return (
    <div className="nav-menu-btn">
      <Icon icon={icon}></Icon>
    </div>
  )
}