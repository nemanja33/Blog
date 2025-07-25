import { db } from "@/lib";
import { cache } from "react";

export const getPosts = cache(async () => {
    const posts = await db.query.postsTable.findMany(); 
    return posts;
})

export const getPost = cache(async (slug: number) => {
    const post = await db.query.postsTable.findFirst({
        where: (posts, { eq }) => (eq(posts.id, slug))
    })

    return post;
})