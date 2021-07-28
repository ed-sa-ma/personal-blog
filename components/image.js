import cn from "classnames";

import { useCssVariable } from "@hooks";
import styles from "@styles/image.module.css";

export default function Image({ url, alt, maxWidth }) {
  const ref = useCssVariable(maxWidth, "--max-width");

  return (
    <div className={styles.image} ref={ref}>
      <img
        className={cn(styles["image-element"], { [styles.png]: url.includes("png") })}
        src={url}
        alt={alt}
      />
    </div>
  );
}
