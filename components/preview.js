import { useMemo } from "react";
import Link from "next/link";

import styles from "@styles/preview.module.css";

export default function Preview({ headline, published: publishedProp, uid, updated: updatedProp }) {
  const [published, updated] = useMemo(
    () => [new Date(publishedProp), new Date(updatedProp)],
    [publishedProp, updatedProp]
  );

  return (
    <div className={styles.container}>
      <Link href={`/posts/${uid}`}>
        <a className={styles.link}>
          <h2 className={styles.headline}>{headline}</h2>
        </a>
      </Link>
      <div className={styles.meta}>
        <sub className={styles.dates}>{`First published: ${published.toLocaleDateString()}`}</sub>
        <br />
        <sub className={styles.dates}>{`Last edit: ${updated.toLocaleDateString()}`}</sub>
      </div>
    </div>
  );
}
