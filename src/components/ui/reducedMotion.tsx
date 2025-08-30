"use client"
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function ReducedMotion() {
    useEffect(() => {
        const mqList = window.matchMedia('(prefers-reduced-motion: reduce)')
        console.log(mqList)
        if (mqList.matches) {
            toast('你的设备开启了动画减弱模式，已自动降低部分动画与视觉效果')
        }
    }, [])

    return null
}