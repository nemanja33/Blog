"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";

const HoverLink = ({
  children,
  href
}: {
  children: React.ReactNode;
  href: string
}) => {
  const [prefetch, setPrefetch] = useState(false);
  
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={styles.primary}
      onMouseEnter={() => setPrefetch(true)}
      >
      {children}
    </Link>
  )
}

export default HoverLink;