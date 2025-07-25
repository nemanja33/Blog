
import BlogPosts from '@/components/BlogPost/BlogPosts';
import { getPosts } from '@/lib/posts'
import { Suspense } from 'react';

export default function Blog(){

    // kada saljes ovako podakte ne smes da awaitas jer saljes promise na clienta
    const posts = getPosts();

    if (!posts) {
        return <div>No posts</div>
    }

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BlogPosts posts={posts} />
            </Suspense>
        </>
    )
}