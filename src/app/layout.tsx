import type { Metadata } from "next";
import "./css/globals.scss";
import Nav from "@/components/nav";
import Aside from "@/components/aside/aside";

export const metadata: Metadata = {
    title: "陈鑫磊的博客",
    description: "一个记录生活、学习、思考的博客",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" data-theme="light">
            <body>
                {/* 导航栏 */}
                <Nav />
                <div className="main">
                    {/* 内容 */}
                    {children}
                    {/* 侧边栏 */}
                    <Aside />
                </div>
            </body>
        </html>
    );
}
