// import Img from "next/image";
// import Link from "next/link";
import { notFound } from "next/navigation";
import blogConfig from "@/blog.config";
import renderMarkdown from "@/utils/renderMarkdown";
import "@/app/css/posts.css";
import "@/app/css/markdown.css";


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
  const md_html = await renderMarkdown(md_content);

  console.log(md_html)

  return (
    <div className="posts card" dangerouslySetInnerHTML={{
      __html: md_html
    }
    }>
    </div>
  )
}

