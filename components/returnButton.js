import Link from "next/link";

import HouseIcon from "@components/houseIcon.js";
import styles from "@styles/returnButton.module.css";

export default function ReturnButton() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.button}>
          <HouseIcon className={styles.icon} />
          &ensp;Back home
        </a>
      </Link>
    </div>
  );
}
