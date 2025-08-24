import type { Metadata } from "next";
import "./css/globals.css";
import Header from "@/components/header"
import Footer from "@/components/footer";

import blogConfig from "@/blog.config";

import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    title: {
        template: `%s | ${blogConfig.title}`,
        default: blogConfig.title
    },
    description: blogConfig.description,
    keywords: blogConfig.keywords,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" data-theme="light">
            <head>
                <link rel="icon" href={blogConfig.favicon} sizes="any" />
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
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
