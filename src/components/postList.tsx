import blogConfig from "@/blog.config"
import PostCard from "./postCard"
import type { Article } from "@/types/article"


export default async function PostList() {
    async function getPostList() {
        // 'use server'
        const req = await fetch(`${blogConfig.api}/posts`, { next: { revalidate: 30 } })
        const res = await req.json()
        console.log(res)
        return res.data
    }
    return (
        <div className="post-list">
            { ((await getPostList())as Article[]).map((post, index) => 
                { return <PostCard Article={post} Index={index} key={post._id}></PostCard> }
            ) }
        </div>
    )
}