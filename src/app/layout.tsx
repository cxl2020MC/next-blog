import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./css/globals.css"
import Nav from "@/components/nav"

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
    <html lang="zh-CN">
      <body>
        <ThemeProvider>
          {/* 导航栏 */}
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
