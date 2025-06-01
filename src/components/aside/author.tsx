import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import blogConfig from "@/blog.config"

export default function Author(){
    return (
        <div className="author card">
            <div className="author__avatar">
                <Image src={blogConfig.author.avatar} alt="avatar" fill={true} />
            </div>
            <div className="author__info">
                <h3 className="author__name">{blogConfig.author.name}</h3>
                <p className="author__bio">{blogConfig.author.bio}</p>
            </div>
            <div className="author__social">
                <Link href={blogConfig.author.github} className="author__social__item" title="Github" aria-label="Github"get="_blank" rel="noreferrer">
                    {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github" /> */}
                    <Icon icon="fa6-brands:github"></Icon>
                </Link>
            </div>
        </div>
    )
}