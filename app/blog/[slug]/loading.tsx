import React from "react";
import styles from "./page.module.css";

const BlogPostSkeleton = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={`${styles.skeleton} ${styles.title}`}></div>
      <div className={`${styles.skeleton} ${styles.titleShort}`}></div>

      {/* Author and date */}
      <div className={styles.meta}>
        <div className={`${styles.skeleton} ${styles.avatar}`}></div>
        <div className={styles.authorInfo}>
          <div className={`${styles.skeleton} ${styles.author}`}></div>
          <div className={`${styles.skeleton} ${styles.date}`}></div>
        </div>
      </div>

      {/* Featured image */}
      <div className={`${styles.skeleton} ${styles.image}`}></div>

      {/* Content paragraphs */}
      <div className={styles.content}>
        <div className={`${styles.skeleton} ${styles.line}`}></div>
        <div className={`${styles.skeleton} ${styles.line}`}></div>
        <div className={`${styles.skeleton} ${styles.lineShort}`}></div>
      </div>

      <div className={styles.content}>
        <div className={`${styles.skeleton} ${styles.line}`}></div>
        <div className={`${styles.skeleton} ${styles.line}`}></div>
        <div className={`${styles.skeleton} ${styles.lineMedium}`}></div>
      </div>

      <div className={styles.content}>
        <div className={`${styles.skeleton} ${styles.line}`}></div>
        <div className={`${styles.skeleton} ${styles.lineShort}`}></div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
