import { Icon } from "@iconify/react"
import type { Article } from "@/types/article"
import { formatUnix } from "@/utils/formatDate"

import "./postInfo.css"

export function PostInfo({Article} : {Article: Article}) {
    return (
        <div className="post-infos">
            <span className="post-info">
                <Icon icon="fa6-solid:calendar"></Icon>
                创建于: {formatUnix(Article.created_at)}
            </span>
            <span>|</span>
            <span className="post-info">
                <Icon icon="fa6-solid:clock"></Icon>
                更新于: {formatUnix(Article.updated_at)}
            </span>
            <span>|</span>
            <span className="post-info">
                <Icon icon="fa6-solid:file-word" />
                字数: {Article.word_count}
            </span>
        </div>
    )
}