import styles from "@styles/card.module.css";

export default function Card({ children, image }) {
  return (
    <div className={styles.card}>
      {image && image.url && (
        <div className={styles["image-wrapper"]}>
          <img className={styles["heading-image"]} src={image.url} alt={image.alt}></img>
        </div>
      )}
      {children}
    </div>
  );
}
