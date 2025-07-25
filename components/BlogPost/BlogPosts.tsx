"use client"
import React, { use } from 'react'

interface IBlogPost {
    id: number,
    title: string,
    content: string,
    userId: number,
    createdAt: string,
    updatedAt: Date | null
}

const BlogPosts = ({
  posts
}: {
  posts: Promise<IBlogPost[]>
}) => {

  const allPosts = use(posts);


  return (
    <div>
      {allPosts.map(post => (
        <React.Fragment key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default BlogPosts