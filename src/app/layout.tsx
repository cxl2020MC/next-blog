import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./css/globals.css"
import Nav from "@/components/nav"
import Aside from "@/components/aside/aside"

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
        <ThemeProvider>
          {/* 导航栏 */}
          <Nav />
          {children}
          {/* 侧边栏 */}
          <Aside />
        </ThemeProvider>
      </body>
    </html>
  );
}
