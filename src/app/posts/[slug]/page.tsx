import { notFound } from "next/navigation";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import blogConfig from "@/blog.config";
import rehypeShiki from '@shikijs/rehype'

import "@/app/css/posts.css";
import "@/app/css/markdown.css";

const mdx_config: MDXRemoteProps["options"] = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [[rehypeShiki, {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      //添加'language-*'到class中，可以用来在代码块中显示语言种类
      addLanguageClass: true,
    }],],
  },
}

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
    <div className="posts card">
      <MDXRemote source={md_content} options={mdx_config} />;
    </div>
  )
}

