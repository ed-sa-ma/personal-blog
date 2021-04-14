import styles from "@styles/card.module.css";

export default function Card({ children, image }) {
  return (
    <div className={styles.card}>
      {image && image.url && (
        <div className={styles.banner} style={{ backgroundImage: `url(${image.url})` }} />
      )}
      {children}
    </div>
  );
}
