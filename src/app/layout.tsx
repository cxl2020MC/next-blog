import type { Metadata } from "next";
import "./css/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReducedMotion from "@/components/ui/reducedMotion";

import blogConfig from "@/blog.config";

import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
    title: {
        template: `%s | ${blogConfig.title}`,
        default: blogConfig.title
    },
    description: blogConfig.description,
    keywords: blogConfig.keywords,
    icons: [
        {
            rel: 'icon',
            sizes: 'any',
            url: blogConfig.favicon,
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" data-theme="light">
            <head>
                {/* <link rel="icon" href={blogConfig.favicon} sizes="any" /> */}
                <link rel="stylesheet" href="https://cxl2020mc-1304820025.file.myqcloud.com/fonts/Mi_Sans/MiSans%20VF/result.css" />
            </head>
            <body>
                <NextTopLoader />
                {/* 头部 */}
                <Header />
                <div id="main-content">
                    {/* 内容 */}
                    {children}
                </div>

                {/* 页脚 */}
                <Footer />
                <Toaster richColors closeButton position="top-right" theme="system" />
                <ReducedMotion />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
