// import Img from "next/image";
// import Link from "next/link";
import { notFound } from "next/navigation";
import blogConfig from "@/blog.config";
import renderMarkdown from "@/utils/renderMarkfdown";
import "@/app/css/posts.css"


export default async function PostPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`${blogConfig.api}/posts/${params.slug}`);
  const post = await res.json();
  console.log(post)
  if (!post.data) {
    notFound();
  }
  const md_conent = post.data.md_content;
  const md_html = await renderMarkdown(md_conent);

  return (
    <div className="posts card" dangerouslySetInnerHTML={{
      __html: md_html
    }
    }>
    </div>
  )
}

