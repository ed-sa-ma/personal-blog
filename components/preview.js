import { useMemo } from "react";
import Link from "next/link";

import styles from "@styles/preview.module.css";

export default function Preview(props) {
  const updated = useMemo(() => new Date(props.updated), [props.updated]);

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <Link href={`/posts/${props.uid}`}>
          <a className={styles.link}>
            <h2 className={styles.headline}>{props.headline}</h2>
          </a>
        </Link>
        <sub className={styles.dates}>{`Last edit: ${updated.toLocaleDateString()}`}</sub>
        {/* <div>{JSON.stringify(props, null, 2)}</div> */}
      </div>
    </div>
  );
}
