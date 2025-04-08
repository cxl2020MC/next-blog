import { notFound } from "next/navigation";

import blogConfig from "@/blog.config";

import Aside from "@/components/aside/aside";
import Comment from "@/components/comment";

import Pre from "@/components/markdown/pre";

import "@/app/css/posts.css";
import "@/app/css/markdown.css";

import { MDXRemote } from 'next-mdx-remote/rsc'


export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const res = await fetch(`${blogConfig.api}/posts/${params.slug}`, { next: { revalidate: 30 } });
  const post = await res.json();
  console.debug(post)
  if (!post.data) {
    notFound();
  }
  const md_content = post.data.md_content;
  console.debug(md_content)

  return (
    <>
      <main>
        <div className="posts card markdown">
          <MDXRemote source={md_content}
            components={{
              pre: Pre
            }}
          />
        </div>
        <div className="comment card mobile-card">
          <Comment />
        </div>

      </main>
      <Aside />
    </>
  )
}

