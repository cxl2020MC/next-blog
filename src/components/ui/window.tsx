import React from "react";
import { Icon } from '@iconify/react';
// import Link from 'next/link';
import './css/window.css'

export default function Window({ children, className, open, onClose }: { children: React.ReactElement, className?: string, open?: boolean, onClose?: () => void }) {
    return (<div className={`window ${className} ${open ? 'open' : ''}`}>

        <div className="window-header">
            <button className="blog-btn window-close" onClick={onClose} >
                <Icon icon="fa6-solid:xmark" />
            </button>
        </div>
        <div className="window-content">
            {children}
        </div>
    </div>);
}
