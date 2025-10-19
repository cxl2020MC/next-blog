// import Image from 'next/image'
import PostList from "@/components/postList";
import Aside from "@/components/ui/aside/aside";

export default function Home() {
    return (
        <>
            <main>
                <PostList />
            </main>
            <Aside />
        </>
    )
}
