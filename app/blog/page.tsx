
import { getPosts } from '@/lib/posts'

export default async function Blog(){

    const posts = await getPosts();

    return (
        <>
            {posts.map((p) => (
            <div key={p.id}>
                <h2>{p.title}</h2>
                <p>{p.content}</p>
                <p>Author ID: {p.userId}</p>
                <p>Created At: {new Date(p.createdAt).toLocaleString()}</p>
            </div>
            ))}
        </>
    )
}