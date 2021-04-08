import { useCallback, useState } from "react";

import Image from "./image";
import styles from "@styles/codeImage.module.css";

export default function CodeImage({ codeSnippet, ...rest }) {
  const [copied, setCopied] = useState(false);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
  }, [codeSnippet]);

  return (
    <div>
      <Image {...rest} />
      <button className={styles["copy-button"]} onClick={copyCode}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
