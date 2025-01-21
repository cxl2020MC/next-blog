import type { Metadata } from "next";
import "./css/globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

import blogConfig from "@/blog.config";

import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: blogConfig.title,
    description: blogConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" data-theme="light">
            <body>
                <NextTopLoader />
                <header>
                    {/* 导航栏 */}
                    <Nav />
                </header>
                
                <div id="main-content">
                    {/* 内容 */}
                    {children}
                </div>

                {/* 页脚 */}
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
