import Link from "next/link"
import Image from "next/image"
import { Icon } from "@iconify/react"
import type { Article } from "@/types/article"
import { formatUnix } from "@/utils/formatDate"
import "./css/postCard.css"


export default function PostCard({ Article, Index }: { Article: Article, Index: number|undefined }) {
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
                <div className="post-card__infos">
                    <span className="post-card__info">
                        <Icon icon="fa6-solid:calendar"></Icon>
                        创建于: {formatUnix(Article.created_at)}
                    </span>
                    <span>|</span>
                    <span className="post-card__info">
                        <Icon icon="fa6-solid:clock"></Icon>
                        更新于: {formatUnix(Article.updated_at)}
                    </span>
                    <span>|</span>
                    <span className="post-card__info">
                        <Icon icon="fa6-solid:file-word"/>
                        字数: {Article.word_count}
                    </span>
                </div>
            </div>
        </div>
    )
}