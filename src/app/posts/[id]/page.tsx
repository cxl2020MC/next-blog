import Img from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";




export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`/posts/${params.id}`);
  const post = await res.json();

  if (!post.id) {
    notFound();
  }

  return
}

