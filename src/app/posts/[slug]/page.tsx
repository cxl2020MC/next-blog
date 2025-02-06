import { notFound } from "next/navigation";

import blogConfig from "@/blog.config";

import Aside from "@/components/aside/aside";
import Comment from "@/components/comment";

// import mdxShiki from "@/utils/mdxShiki";

import "@/app/css/posts.css";
import "@/app/css/markdown.css";

import { MDXRemote } from 'next-mdx-remote/rsc'


import rehypeShikiFromHighlighter from '@shikijs/rehype/core'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'


const jsEngine = createJavaScriptRegexEngine()

const highlighter = await createHighlighterCore({
    themes: [
        import('shiki/themes/vitesse-light.mjs'),
        import('shiki/themes/vitesse-dark.mjs'),
    ],
    langs: [
        import('shiki/langs/javascript.mjs'),
    ],
    engine: jsEngine
})


export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const res = await fetch(`${blogConfig.api}/posts/${params.slug}`, { next: { revalidate: 30 } });
  const post = await res.json();
  console.log(post)
  if (!post.data) {
    notFound();
  }
  const md_content = post.data.md_content;
  console.log(md_content)

  return (
    <>
      <main>
        <div className="posts card">
          <MDXRemote source={md_content} 
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypeShikiFromHighlighter, highlighter, {
                  themes: {
                      light: 'vitesse-light',
                      dark: 'vitesse-dark',
                  }
              }]]
              }
            }}
          />
        </div>
        <Comment />
      </main>
      <Aside />
    </>
  )
}

