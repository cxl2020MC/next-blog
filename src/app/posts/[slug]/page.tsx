import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import Image from "next/image"

import blogConfig from "@/blog.config";

import Aside from "@/components/aside/aside";
import Comment from "@/components/comment";

import Pre from "@/components/markdown/pre";

import "@/app/css/posts.css";
import "@/app/css/markdown.css";

// import { MDXRemote, type MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkFlexibleToc, { type TocItem } from "remark-flexible-toc";


async function get_post_data(slug: string) {
  // const res = await fetch(`${blogConfig.api}/posts/${slug}`, { next: { revalidate: 30 } });
  const res = await fetch(`${blogConfig.api}/posts/${slug}`);
  const post = await res.json();
  return post
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // 读取路由参数
  const slug = (await params).slug

  // 获取数据
  const post = await get_post_data(slug)

  const metadata: Metadata = {
    alternates: {
      canonical: `/posts/${slug}`
    },
    title: post.data.title,
    description: post.data.description,
  }
  console.debug(`设置文章元数据为:`)
  console.debug(metadata)
  return metadata
}

type Scope = {
  toc: TocItem[]
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await get_post_data(params.slug)
  console.debug(post)
  if (!post.data) {
    notFound();
  }
  const md_content = post.data.md_content;
  console.debug(md_content)


  const options: EvaluateOptions = {
    mdxOptions: {
      remarkPlugins: [
        remarkFlexibleToc
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]
    },
    vfileDataIntoScope: "toc",
  }

  const components = {
    pre: Pre
  }

  const { content, scope, error } = await evaluate<Scope>({
    source: md_content,
    options,
    components,
  });

  console.debug(scope)

  if (error) {
    console.error(error)
    return <div>加载失败</div>
  }

  return (
    <>
      <main>
        <div className="post-cover card">
          <Image className="post-cover-img" src={post.data.cover} alt={post.data.title} fill={true} />
          <div className="post-info-container">
            <h1 className="post-title">{post.data.title}</h1>
            {/* <p className="post-date">{post.data.date}</p> */}
          </div>
        </div>
        <div className="posts card markdown">
          {content}
        </div>
        <div className="comment card mobile-card">
          <Comment />
        </div>
      </main>
      <Aside />
    </>
  )
}

