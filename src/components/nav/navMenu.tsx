"use client"
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Window from '@/components/ui/window';
// import Link from 'next/link';

export default function NavMenu() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  function toggleNav() {
    console.log("切换导航栏菜单打开状态");
    setNavOpen(!navOpen);
  }
  return (
      <div className="nav-menu">
        <div className="nav-btns">
          <NavBtn icon="fa6-solid:bars" title="菜单" onClick={toggleNav} />
        </div>
        <Window className="nav-menu-window" open={navOpen} onClose={toggleNav} >
          <div className="nav-menu-content"></div>
        </Window>
      </div>
  )
}

function NavBtn({ icon, title,  onClick }: { icon: string, title?: string, onClick?: () => void }) {
  return (
    <button className="nav-btn" title={title} onClick={onClick}>
      <Icon icon={icon}></Icon>
    </button>
  );
}