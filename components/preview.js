import { useMemo } from "react";
import Link from "next/link";

import styles from "@styles/preview.module.css";

export default function Preview({ updated: updatedProp, uid, headline }) {
  const updated = useMemo(() => new Date(updatedProp), [updatedProp]);

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <Link href={`/posts/${uid}`}>
          <a className={styles.link}>
            <h2 className={styles.headline}>{headline}</h2>
          </a>
        </Link>
        <sub className={styles.dates}>{`Last edit: ${updated.toLocaleDateString()}`}</sub>
      </div>
    </div>
  );
}
