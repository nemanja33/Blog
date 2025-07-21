import { db } from "@/lib";
import { postsTable, usersTable } from "@/lib/schema";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* mozes napraviti client componentu gde se stavi state za prefetch i na hover da se stavi da je true */}
        {/* what is hydration??? */}
        {/* prefetch (rute koje su u <Link> komponenti) i streaming (loader.tsx) */}
        <Link prefetch={false} className={styles.primary} href={"/blog"}>
          Blog
        </Link>
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
