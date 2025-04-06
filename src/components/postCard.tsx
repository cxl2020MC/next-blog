import Link from "next/link"
import Image from "next/image"
// import { Icon } from "@iconify/react"
import type { Article } from "@/types/article"
// import { formatUnix } from "@/utils/formatDate"
import { PostInfo } from "@/components/ui/post/postInfo"
import "./css/postCard.css"


export default function PostCard({ Article, Index }: { Article: Article, Index?: number|undefined }) {
    return (
        <div className="card post-card">
            <div className="post-card__image">
                <Link href={`/posts/${Article.link}`}>
                    <Image src={Article.cover} alt={Article.title} fill={true} priority={Index===0 ? true : false} />
                </Link>
            </div>
            <div className="post-card__content">
                <Link href={`/posts/${Article.link}`}>
                    <h3 className="post-card__title">{Article.title}</h3>
                </Link>
                <p className="post-card__description">{Article.description}</p>
                <PostInfo Article={Article} />
            </div>
        </div>
    )
}