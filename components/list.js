import styles from "@styles/list.module.css";

export default function List({ children }) {
  return children.length > 1 ? <div className={styles.list}>{children}</div> : children;
}
