import type { Metadata } from 'next'
// import Image from "next/image"

// import blogConfig from "@/blog.config";

import Aside from "@/components/ui/aside/aside";
import Comment from "@/components/comment";


import "@/app/css/posts.css";
import "@/app/css/markdown.css";

export const metadata: Metadata = {
    alternates: {
        canonical: "/links"
    },
    title: '友情链接',
    description: '友链',
}

export default async function LinkPage(){
    return (
        <>
            <main>
                <div className="posts card markdown">
                    有点忙，还在做
                </div>
                <div className="comment card mobile-card">
                    <Comment />
                </div>
            </main>
            <Aside>
            </Aside>
        </>
    )
}