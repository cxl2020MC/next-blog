import { Icon } from '@iconify/react';
// import { useState } from 'react';
// import Window from '@/components/ui/window';
// import Link from 'next/link';
import "./navMenu.css"


export default function NavMobileMenu({navOpen, toggleNav}: {navOpen: boolean, toggleNav: () => void}) {

  const navClassName = navOpen ? "nav-mobile-menu open" : "nav-mobile-menu";
  return (
    <div className={navClassName}>
      {/* <div className="mask"></div> */}
      <div className="nav-menu-container">
        <div className="nav-menu-header">
          <button className="blog-btn window-close" onClick={toggleNav} >
            <Icon icon="fa6-solid:xmark" />
          </button>
        </div>
        <div className="nav-menu-content">
          <ul className="nav-menu-list">
            <li className="nav-menu-item">
              <a href="/about">关于</a>
            </li>
            <li className="nav-menu-item">
              <a href="/blog">博客</a>
            </li>
            <li className="nav-menu-item">
              <a href="/contact">联系</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}