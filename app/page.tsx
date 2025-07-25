import { db } from "@/lib";
import { postsTable, usersTable } from "@/lib/schema";
import Link from "next/link";
import styles from "./page.module.css";
import HoverLink from "@/components/Link/Link";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HoverLink href={"/blog"}>Blog</HoverLink>

        <Link className={styles.primary} href={"/blog/1"}>
          Blog 1
        </Link>

        <form
          action={async () => {
            "use server";
            await db.insert(usersTable).values({
              id: 2,
              name: "John Doe",
              age: 30,
              email: "test2@test.com",
            });
            await db.insert(postsTable).values({
              title: "New Post 2",
              content: "This is the content of the new post.",
              userId: 2,
            });
          }}
        >
          <input type="text" name="name" placeholder="Name" required />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}
