"use client"
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'


export default function NavThemeToggleBtn() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => setMounted(true), [])


    if (!mounted) return null

    function themeToggle() {
        if (theme === 'light') {
            setTheme('dark')
        }
        else if (theme === 'dark') {
            setTheme('system')
        }
        else if (theme === 'system'){
            setTheme('light')
        }
    }

    const icons = {
        'system': 'fa6-solid:circle-half-stroke',
        'light': 'fa6-solid:sun',
        'dark': 'fa6-solid:moon'
    }
    return (
        <button className="nav-btn" onClick={themeToggle} title={"颜色模式为: " + theme}>
            <Icon icon={icons[theme as 'system' | 'light' | 'dark']} />
        </button>
    )
}

