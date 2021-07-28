import React, { useMemo } from "react";

import styles from "@styles/linkedHeadline.module.css";
import LinkIcon from "@components/linkIcon";

const REPLACEMENTS = {
  " ": "-",
  "-": "--",
  "?": "",
  "!": "",
  ",": "",
  "...": "",
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  ñ: "n"
};

export default function LinkedHeadline({ element, text }) {
  const href = useMemo(() => {
    let result = text
      .split("")
      .map((c) => {
        return REPLACEMENTS.hasOwnProperty(c) ? REPLACEMENTS[c] : c.toLocaleLowerCase();
      })
      .join("");

    return encodeURIComponent(result);
  }, [text]);
  return (
    <>
      {React.createElement(element, { className: styles.container, id: href }, [
        <a href={`#${href}`} className={styles.link}>
          <LinkIcon className={styles.icon} />
        </a>,
        <span className={styles.headline}>{text}</span>
      ])}
    </>
  );
}
