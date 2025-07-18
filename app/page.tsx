import { db } from "@/lib";
import { postsTable, usersTable } from "@/lib/schema";

export default async function Home() {

  const post = await db.query.postsTable.findMany();

  return (
    <div>
      <form action={async () => {
        'use server'
        await db.insert(usersTable).values({
          id: 1,
          name: 'John Doe',
          age: 30,
          email: 'test@test.com'
        })
        await db.insert(postsTable).values({
          title: 'New Post',
          content: 'This is the content of the new post.',
          userId: 1
        })
      }}>
        <input type="text" name="name" placeholder="Name" required />
        <button>Submit</button>
      </form>
      {
        post.map((p) => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
            <p>Author ID: {p.userId}</p>
            <p>Created At: {new Date(p.createdAt).toLocaleString()}</p>
          </div>
        ))
      }
    </div>
  );
}
