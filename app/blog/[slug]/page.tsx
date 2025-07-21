import { getPost } from "@/lib/posts";

export async function genereateStaticParams() {
  // check what this does
  // const post = await getPost(Number(slug));
  // return post
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(Number(slug));

  console.log(post);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
}
