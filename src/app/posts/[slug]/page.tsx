// import Img from "next/image";
// import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc'
import blogConfig from "@/blog.config";
import "@/app/css/posts.css"


export default async function PostPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`${blogConfig.api}/posts/${params.slug}`);
  const post = await res.json();
  console.log(post)
  if (!post.data) {
    notFound();
  }
  const md_conent = post.data.md_content;


  return (
    <div className="posts card">
      <MDXRemote source={md_conent} />
    </div>
  )
}

