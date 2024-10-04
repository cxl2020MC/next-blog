import Link from 'next/link'
import { Icon } from '@iconify/react'
import blogConfig from '@/blog.config'
import "@/app/css/nav.css"

export default function Nav() {
  return (
    <nav className="nav">
      <Link id="site-name" href="/">陈鑫磊的博客</Link>
      <div className="nav-links">
         <NavLinks></NavLinks>
      </div>
      <div className="nav-menu-btn">

      </div>
    </nav>
  )
}

function NavLinks() {
  return blogConfig.nav.map((item) => {
    return (
      <Link key={item.name} href={item.link} className="nav-link">
        <Icon icon={item.icon}></Icon>
        <span>{item.name}</span>
      </Link>
    )
  })
}