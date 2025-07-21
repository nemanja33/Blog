import { db } from "@/lib";

export async function getPosts() {
    const posts = await db.query.postsTable.findMany(); 
    return posts;
}

export async function getPost(slug: number) {
    const post = await db.query.postsTable.findFirst({
        where: (posts, { eq }) => (eq(posts.id, slug))
    })

    return post;
}